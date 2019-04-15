const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
bodyParser = require("body-parser");
const app = express();
const querystring = require("querystring");
const request = require("request");
var nodemailer = require("nodemailer");
var stack = [];

//////////////////////////////////////////////////////////////////
/// Set up enviornment what your app will use ///////////////////
////////////////////////////////////////////////////////////////


app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => res.render("pages/index"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




// set the view engine so that it knows what to use
app.set("view engine", "ejs");

//display index.ejs
app.get("/", (req, res) => res.render("/index"));

///////////////////////////////////////////////////////////////////////////
//collecting posted data from index.js form  /////////////////////////////
/////////////////////////////////////////////////////////////////////////

app.post("/name", (req, res) => {
  var lname = req.body.lastname;
  var fname = req.body.firstname;
  var message = req.body.message;
  stack.push(lname,fname,message);

  //console.log(fname);
  //console.log(lname);
  console.log(stack);
});

 
///////////////// select a port for the application to listen on locally///////////////////////////
const newLocal = app.listen(3000, () => console.log("server started"));
