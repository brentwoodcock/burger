// Requirements
var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function(req, res) {
	burger.selectAll(function(burgerData) {
		res.render('index', { burger_data: burgerData });
	});
});

router.post('/burgers/create', function(req, res) {
	burger.insertOne(req.body.burger_name, function(result) {
		res.redirect('/');
	});
});

router.put('/burgers/update', function(req, res) {
	burger.updateOne(req.body.burger_id, function(result) {
		res.redirect('/');
	});
});

module.exports = router;