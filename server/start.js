'use strict';
var chalk = require('chalk');
var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('views'));

app.get('/link2', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'ChineseSchool_Link2.pdf'));
});

app.get('/link3', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'ChineseSchool_Link3.pdf'));
});

app.get('/link4', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'ChineseSchool_Link4.pdf'));
});

app.get('/link6', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'ChineseSchool_Link6.pdf'));
});

app.get('/*', function(req, res, next) {
	res.sendFile(path.join(__dirname, '../views/', 'index.html'));
});

var startServer = function () {
    var PORT = (process.env.PORT || 1234);

    app.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

startServer();
