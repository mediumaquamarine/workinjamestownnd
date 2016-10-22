"use strict";

var express = require('express');
var app = express();

app.use(express.static(__dirname + '/../client'));

app.get('/employers', function(request, response){
  response.json(["Hardees", "Walmart"]);
})

app.listen(process.env.port || 8181);