const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const MONGO_URL = "mongodb://mongo:27017/labdb";

mongoose.connect(MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err.message));

app.get("/", (req, res) => {
  res.send("Docker Compose Lab: Web App + MongoDB is Running!");
});

app.listen(PORT, () => {
  console.log(`Web app running on port ${PORT}`);
});
