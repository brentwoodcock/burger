var mysql = require('mysql');

var connection;

// Configure connection for Heroku
if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {  // Configure connection for localhost
	connection = mysql.createConnection({
		host: 'localhost',
		port: 3306,
		user: 'bwoodcock',
		password: '',
		database: 'burgers_db'
	});
}

connection.connect(function(err) {
	if (err) {
		console.error('Error connecting: ' + err.stack);
		return;
	}
	console.log('Connected as id ' + connection.threadId);
});

module.exports = connection;