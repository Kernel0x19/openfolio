// models/Price.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PriceSchema = new Schema(
  {
    instrumentId: {
      type: Schema.Types.ObjectId,
      ref: "Instrument",
      required: true,
    },
    symbol: { type: String, required: true },
    date: { type: Date, required: true },
    open: { type: Number },
    high: { type: Number },
    low: { type: Number },
    close: { type: Number, required: true },
    volume: { type: Number, default: null },
  },
  { timestamps: true, versionKey: false },
);

PriceSchema.index({ symbol: 1, date: -1 });

module.exports = mongoose.model("Price", PriceSchema);
