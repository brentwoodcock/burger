var connection = require('./connection.js');

var orm = {
	// Read all from table and execute cb (callback function) upon query completion
	selectAll: function(table, cb) {
		var query = 'SELECT * FROM ??';
		connection.query(query, table, function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Insert an array of values (burger) into table then execute cb (callback function)
	insertOne: function(table, burger, cb) {
		var query = 'INSERT INTO ?? (burger_name, devoured) VALUES (?)';
		connection.query(query, [table, burger], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	},
	// Update devoured status to true (1) of a certain burger based on the burger's id
	updateOne: function(table, burgerId, cb) {
		var query = 'UPDATE ?? SET devoured=1 WHERE id=?';
		connection.query(query, [table, burgerId], function(err, result) {
			if (err) {
				throw err;
			}
			cb(result);
		});
	}
};

module.exports = orm;