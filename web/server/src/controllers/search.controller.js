const Instrument = require("../models/Instrument");

const search = async (req, res) => {
  try {
    const { q, type, limit = 10 } = req.query;

    if (!q || q.trim().length < 2) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Query must be at least 2 characters",
        });
    }

    const filter = {
      $text: { $search: q.trim() },
    };
    if (type) filter.type = type;

    const results = await Instrument.find(filter)
      .select("symbol name type updatedAt")
      .limit(Number(limit))
      .sort({ score: { $meta: "textScore" } });

    res.json({ success: true, count: results.length, data: results });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports = { search };
