var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var select = require('./mysql');

var app = new express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req, res) {
	select('SELECT * FROM goods').then(function(data) {
		res.json({data: data});
		res.end();
	}).catch(function(){})
});


module.exports = app;