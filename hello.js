const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send(hello('Heroku 4 мая 18:19'));
});

const port = process.env.PORT || 3000;
app.listen(port, function() {});

const hello = someone => 'Hello, ' + someone;

module.exports = hello;
