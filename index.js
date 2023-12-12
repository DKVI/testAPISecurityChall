const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.static("public"));
const PORT = 8080;
app.get("/image", (req, res) => {
  const fileName = req.query.img;
  res.setHeader("Content-Type", "image/jpeg");
  const image = fs.readFileSync(`./public/images/${fileName}`);
  console.log(image);
  res.send(image);
});

app.get("/", function (req, res) {
  res.send(".public/index.html");
});
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});
