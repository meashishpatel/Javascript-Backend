require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("meashish_patel");
});

app.get("/login", (req, res) => {
  res.send("<h1> I have created a server</h1>");
});

app.get("/celebration", (req, res) => {
  res.send("<h1> Celebration </h1>");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
