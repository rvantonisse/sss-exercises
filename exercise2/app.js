var express = require('express'),
	path = require('path'),
	app = express(),
	task2 = require('./routes/task2'),
	task3 = require('./routes/task3');

// Setup serving static assets
app.use(express.static('public'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setup initial routing - index
app.get('/', function(req, res) {
  res.render('index', {title: 'Server-side Scripting - Exercise 2'});
});

// Load task 2 routes
app.use('/task2',task2);

// Load task 3 routes
app.use('/task3', task3);


// Start the server
var server = app.listen(3000, function () {
  console.log('App listening at http://localhost:3000');
});