"use strict";

var app = require('express')();

var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.status(200).send({
    slackUsername: 'Kelleman',
    backend: true,
    age: 27,
    bio: 'My name is Atser Godfrey Tilenenge, i hailed from Benue state Nigeria, a university graduate and Tech enthusiast'
  });
});
app.listen(port, function () {
  console.log("listening at https://localhost:".concat(port));
});