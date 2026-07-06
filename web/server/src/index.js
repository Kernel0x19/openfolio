const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/db");
const ingestMF = require("./jobs/ingestMF");

dotenv.config();

const instrumentRoutes = require("./routes/instrument.routes");
const searchRoutes = require("./routes/search.routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  }),
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const start = async () => {
  await connectDB(process.env.MONGO_URI);
};

start();

app.get("/v0/info", (req, res) => {
  res.json({
    success: true,
    message: "OpenFolio Backend Server v0",
    version: "0.0.0",
  });
});
app.get("/v0/health", (req, res) => {
  res.json({
    success: true,
    message: "Health OK",
  });
});
app.use("/v0/instruments", instrumentRoutes);
app.use('/v0/search', searchRoutes);
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
