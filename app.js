const express = require("express");
const ejs = require("ejs");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/", (req, res)=>{
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
