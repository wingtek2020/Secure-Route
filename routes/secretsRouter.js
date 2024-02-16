const express = require('express');
const secretsRouter = express.Router();

secretsRouter.route('/')

.all((req, res, next) => {
    res.statusCode = 200;
    //this indicate that it will return plain text
    res.setHeader("Content-Type", "text/html");
    next(); // this passes controle to the next routing method
  })

  //set up an end point for the get request

  .get((req, res) => {
    res.end("<html><body><h1>Not Hello World</h1></body></html>"); //msg sent to the client
  });

module.exports = secretsRouter;
