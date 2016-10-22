"use strict";

var express = require('express');
var app = express();

var mongoUtil = require('./mongoUtil');
mongoUtil.connect();

app.use(express.static(__dirname + '/../client'));

app.get('/employers', function(request, response){
  let employment = mongoUtil.employers();
  employment.find().toArray((err,docs) => {
    if(err) {
      response.sendStatus(400);
    }
    let employmentNames = docs.map((item) => item.name);
    response.json(employmentNames);
  });
});

app.listen(process.env.port || 8181);