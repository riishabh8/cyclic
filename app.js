const express = require("express");
const PORT = process.env.port || 3000;
const app = express();
app.get("/", function (req, res) {
  res.send("<h1>Hello Rishabh</h1>");
});
app.listen(PORT, function (req, res) {
  console.log("Server is running on:" + PORT);
});
