// function hello(someone) {
//   return "Hello, " + someone + "!!!";
// }

// console.log(hello("Heroku"));

// module.exports = hello;


const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send('Hello, Heroku!')
});

const port = process.env.PORT || 3000;
app.listen(port, function() {});

//console.log("Server running at http://localhost:%d", port);