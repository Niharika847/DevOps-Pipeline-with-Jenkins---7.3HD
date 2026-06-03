const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps HD Pipeline App is running successfully!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Application is healthy"
  });
});

module.exports = app;