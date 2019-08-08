// app.js
const path = require("path");
const express = require("express");

const app = express();
const port = "8000";

// setting the view engine to pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// setting views and static directories
app.use(express.static(path.join(__dirname, "public")));


app.get("/" , (req,res) => {
  res.render("index", {title: "Home"});
});

app.get("/users", (req,res) =>{
  res.render("users", {title: "Profile", userProfile: {nickname: "Gilles"} });
})

app.listen(port, () => {
  console.log("Listening to requests on localhost:${port}");
});
