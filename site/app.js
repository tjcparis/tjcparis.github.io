var path = require('path');
var express = require('express');
var app = express();

app.use("/css", express.static(__dirname + '/css'));
app.use("/images", express.static(__dirname + '/images'));
app.use("/js", express.static(__dirname + '/js'));

app.get('/', function(req,res) {
    res.render('trouver_notre_eglise.ejs');
});

app.listen(8080);