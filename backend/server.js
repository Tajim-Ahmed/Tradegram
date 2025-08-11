import express from "express";
import dotenv from "dotenv";
import connectDB from "./db.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API is running and DB is connected");
});

app.listen(process.env.PORT, () => {
  console.log(`🚀 Server running on port ${process.env.PORT}`);
});

