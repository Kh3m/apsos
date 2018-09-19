const express = require("express");

// express app
const app = express();

// express config
app.set("view engine", "ejs");

// express serve static content
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("pages/landing");
});

app.get("/signup",(req,res)=>{
    res.render("pages/signup")
})

module.exports = app;