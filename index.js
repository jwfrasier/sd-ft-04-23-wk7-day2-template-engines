const express = require("express");
const app = express();
const PORT = 3001;
const user = require("./routes/user");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/user", user);

app.listen(PORT, console.log(`listening on port ${PORT}`));
