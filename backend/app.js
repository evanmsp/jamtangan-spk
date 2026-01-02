console.log("FILE APP.JS DIEKSEKUSI");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Backend SPK AHP jalan 🚀");
});

app.listen(3000, () => {
  console.log("SERVER AKTIF di http://localhost:3000");
});