const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./login/login.ejs");
});

router.post("/login", (req, res) => {
  // passport stuff
  console.log(req.body);
  res.json(req.body);
});

router.get("/signup", (req, res) => {
  res.render("./signup/signup.ejs");
});

router.post("/signup", (req, res) => {
  // user.create code goes here
  // bcrypt goes here too
  // redirect themn to the login page
  res.redirect("/login");
});

module.exports = router;
