const proxy = require("express-http-proxy");
const express = require("express");
const app = express();
const PORT = 80;

const API_BASE_URL = "https://api.uat.equifax.co.uk";

app.get("/status", (req, res) => {
  res.send("Proxy server is running smoothly!");
});

app.use("/", proxy(API_BASE_URL));

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
