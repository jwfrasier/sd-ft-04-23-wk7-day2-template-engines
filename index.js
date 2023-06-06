const express = require("express");
const app = express();
const PORT = 3001;
const user = require("./routes/user");
const dashboard = require("./routes/dashboard");
const login = require("./routes/login");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views/partials"));
app.use(express.static(__dirname + "/public/css"));

app.use("/user", user);
app.use("/dashboard", dashboard);
app.use("/login", login);

app.listen(PORT, console.log(`listening on port ${PORT}`));
