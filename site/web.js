var path = require('path');
var express = require('express');
var app = express();

var texts = {
	"en":{
		"hello":"hello"
	},
	"fr":{
		"hello":"bonjour"
	}
}

app.configure(function()
{

	app.use("/css", express.static(__dirname + '/css'));
	app.use("/images", express.static(__dirname + '/images'));
	app.use("/js", express.static(__dirname + '/js'));

	app.get('/', function(req,res) {
	    res.render('trouver_notre_eglise.ejs', texts["fr"]);
	});

	app.get('/:locale', function(req,res) {
	    res.render('trouver_notre_eglise.ejs', texts[req.params.locale]);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});