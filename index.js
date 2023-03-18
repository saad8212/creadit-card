const express = require("express");
const app = express();
const path = require("path");
app.use(express.static(path.resolve('./public')));
app.set("view engine", "ejs"); 
const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// Routes


app.use(express.json())
app.use("/", require("./routes"));
app.listen("3005");

 

 
 
 
 