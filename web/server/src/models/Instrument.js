// models/Instrument.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const InstrumentSchema = new Schema(
  {
    symbol: { type: String, required: true, unique: true, index: true },
    name: { type: String, required: true },
    type: {
      type: String,
      enum: ["stock", "mf", "commodity", "crypto"],
      required: true,
    },
    sector: { type: String, default: null },
    exchange: { type: String, default: null },
    lastPrice: { type: Number, default: null },
    change: { type: Number, default: null },
    changePct: { type: Number, default: null },
    marketCap: { type: Number, default: null },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true, versionKey: false },
);

InstrumentSchema.index({ name: "text", symbol: "text" });

module.exports = mongoose.model("Instrument", InstrumentSchema);
