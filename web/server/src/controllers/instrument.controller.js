// controllers/instrumentController.js
const Instrument = require("../models/Instrument");
const axios = require("axios");

const navCache = new Map();
const CACHE_TTL = 5 * 60 * 1000;

const getInstruments = async (req, res) => {
  try {
    const { type, page = 1, limit = 20 } = req.query;
    const filter = {};
    if (type) filter.type = type;
    const skip = (Number(page) - 1) * Number(limit);

    const [instruments, total] = await Promise.all([
      Instrument.find(filter)
        .select("symbol name type updatedAt")
        .sort({ name: 1 })
        .skip(skip)
        .limit(Number(limit)),
      Instrument.countDocuments(filter),
    ]);

    res.json({
      success: true,
      data: instruments,
      pagination: {
        total,
        page: Number(page),
        limit: Number(limit),
        totalPages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const getInstrumentBySymbol = async (req, res) => {
  try {
    const instrument = await Instrument.findOne({
      symbol: req.params.symbol,
    }).select("symbol name type updatedAt");

    if (!instrument) {
      return res
        .status(404)
        .json({ success: false, message: "Instrument not found" });
    }

    const cached = navCache.get(req.params.symbol);
    if (cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
      return res.json({
        success: true,
        data: { ...instrument.toObject(), nav: cached.nav },
      });
    }

    let navData = null;
    try {
      const { data } = await axios.get(
        `https://api.mfapi.in/mf/${req.params.symbol}`,
      );
      navData = {
        latestNav: parseFloat(data.data[0].nav),
        navDate: data.data[0].date,
        history: data.data.slice(0, 30),
        schemeMeta: data.meta,
      };
      navCache.set(req.params.symbol, { nav: navData, fetchedAt: Date.now() });
    } catch (navErr) {
      console.error(
        `[NAV fetch failed for ${req.params.symbol}]:`,
        navErr.message,
      );
    }

    const { symbol, name, type, updatedAt } = instrument.toObject();
    res.json({
      success: true,
      data: { symbol, name, type, updatedAt, nav: navData },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { getInstruments, getInstrumentBySymbol };
