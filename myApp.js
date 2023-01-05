let express = require("express");
let app = express();
console.log("Hello World");

function server(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

function serveJSON(req, res) {
  res.json({message: "Hello json"});
}

app.get("/", server); //Serves HTML page

app.get("/json", serveJSON); //Serves JSON data

const cssStyle = __dirname + "/public";
app.use("/public", express.static(cssStyle));

module.exports = app;
