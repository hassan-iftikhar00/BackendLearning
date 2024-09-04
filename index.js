require("dotenv").config();

const express = require("express");
const app = express();
const port = 9999;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () => {
  console.log(`App Listening on port: ${port}`);
});
