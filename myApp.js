require("dotenv").config();

let express = require("express");
let app = express();
console.log("Hello World");

function server(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

function serveJSON(req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({message: "HELLO JSON"});
  } else {
    res.json({message: "Hello json"});
  }
}

//Mware to log requests
function requestLogger(req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
}

//Mware to add Date to Requests
function addDateToReq(req, res, next) {
  req.time = new Date().toString();
  next();
}

function dateHandler(req, res) {
  res.json({time: req.time});
}

function echoHandler(req, res) {
  res.json({echo: req.params.word});
}

function nameHandler(req, res) {
  res.json({name: req.query.first + " " + req.query.last});
}

function saveNameHandler(req, res) {
  req = req;
}
app.get("/", server); //Serves HTML page

app.get("/json", serveJSON); //Serves JSON data

const cssStyle = __dirname + "/public";
app.use("/public", express.static(cssStyle)); //Mware that calls css style for html

app.use(requestLogger);

app.get("/now", addDateToReq, dateHandler);

app.get("/:word/echo", echoHandler);

app.route("/name").get(nameHandler).post(saveNameHandler);

module.exports = app;
