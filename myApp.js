let express = require("express");
let app = express();
console.log("Hello World");

function server(req, res) {
  absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

app.get("/", server);

module.exports = app;
