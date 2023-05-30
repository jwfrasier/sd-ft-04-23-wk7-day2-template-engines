const express = require("express");
const router = express.Router();
const ejs = require("ejs");

router.get("/user_data", (req, res) => {
  let student = { name: "Jaye" };
  //   const header = ;
  let html = ejs.render(`<h1> Howdy <%= student.name; %> </h1>`, {
    student: student,
  });
  res.send(html);
});

module.exports = router;
