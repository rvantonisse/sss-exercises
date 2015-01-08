var express = require('express'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	path = require('path'),
	app = express(),
	userRoutes = require('./routes/users');

// Setup serving static assets
app.use(express.static('public'));

// Use body parser
app.use(bodyParser.urlencoded({extended: true}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Add session support
app.use(session({
	secret: 'aapNootMies', // Customize this string for security!
	saveUninitialized: true,
	resave: false
}));

// Setup initial routing - index
app.use('/users', userRoutes);

app.get('/', function(req, res) {
	var data = {
		title: 'SSS Exercise 3',
		username: null
	};
	if (req.session.username) {
		data.username = req.session.username;
	}
	res.render('index', data);
});

// Start the server
app.listen(3000, function(){
	console.log('App listening at http://localhost:3000');
});