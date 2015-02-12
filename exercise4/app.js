var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

// Setup serving static assets
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Use body parser
app.use(bodyParser.urlencoded({extended: true}));

// Add session support
app.use(session({
	secret: 'AapNootMies', // Customize this string for security!
	saveUninitialized: true,
	resave: false
}));

// Routes
var userRoute = require('./routes/users.js');

app.get('*', function (req, res, next) {
	console.log(req.method, req.url);
	next();
});

app.get('/', function (req, res) {
	res.render('index', {title: 'SSS - Exercise 4'});
});

app.use('/user', userRoute);


// Start the server
app.listen(3000, function () {
	console.log('App listening at http://localhost:3000');
});