let express = require("express");
let app = express();
console.log("Hello World");

function server(req, res) {
  const absolutePath = __dirname + "/views/index.html";
  res.sendFile(absolutePath);
}

app.get("/", server); //Serves HTML page

const cssStyle = __dirname + "/public";
app.use("/public", express.static(cssStyle));

module.exports = app;
