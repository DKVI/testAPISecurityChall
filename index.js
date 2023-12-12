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

app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "public", "index.html");
  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading index.html");
    } else {
      res.send(data);
    }
  });
});
app.listen(PORT, () => {
  console.log("Server is running in port " + PORT);
});
