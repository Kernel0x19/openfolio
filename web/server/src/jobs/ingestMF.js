const axios = require("axios");
const Instrument = require("../models/Instrument");

const ingestMF = async () => {
  console.log("[ingestMF] Starting ingestion ...");
  try {
    const { data } = await axios.get("https://api.mfapi.in/mf");

    const ops = data.map((fund) => ({
      updateOne: {
        filter: { symbol: String(fund.schemeCode) },
        update: {
          $set: {
            symbol: String(fund.schemeCode),
            name: fund.schemeName,
            type: "mf",
            exchange: null,
            updatedAt: new Date(),
          },
        },
        upsert: true,
      },
    }));

    const result = await Instrument.bulkWrite(ops);
    console.log(
      `[ingestMF] Done. Upserted: ${result.upsertedCount} | Modified: ${result.modifiedCount}`,
    );
  } catch (error) {
    console.error("[ingestMF] Failed:", error.message);
  }
};

module.exports = ingestMF
