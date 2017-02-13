// Requirements
var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// Redirect base route to /burgers
router.get('/', function(req, res) {
	res.redirect('/burgers');
});

// Display all burgers
router.get('/burgers', function(req, res) {
	burger.selectAll(function(burgerData) {
		res.render('index', { burger_data: burgerData });
	});
});

// Create a new burger from user's input
router.post('/burgers/create', function(req, res) {
	burger.insertOne(req.body.burger_name, function(result) {
		res.redirect('/');
	});
});

// Update the devoured status of a burger based on user's request
router.put('/burgers/update', function(req, res) {
	burger.updateOne(req.body.burger_id, function(result) {
		res.redirect('/');
	});
});

module.exports = router;