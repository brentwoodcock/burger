// NPM requirements, controller file for routing, initial setup
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require('./controllers/burgers_controller.js');
var PORT = process.env.PORT || 3000;
var app = express();
// Serve static content from public directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));
// Handlebars setup
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', routes);
app.use('/update', routes);
app.use('/create', routes);

app.listen(PORT, function() {
	console.log('Listening on port: ' + PORT);
});