var express = require('express');
var router = express.Router();

// Create routes for the following URL's
// [GET] /users
router.get('/', function (req, res, next) {
	console.log('Opened users');
	var data = {
		title: 'User profile',
		username: null
	};
	res.locals.error = false;

	if (req.session.username) {
		console.log('Registered user');
		data.username = req.session.username;
		res.render('index', data);
	} else {
		console.log('Guest user');
		res.redirect(req.baseUrl + '/login');
	}
	next();
});
// [GET] /users/login
router.get('/login', function (req, res, next) {
	res.locals.error = false;
	next();
});
router.get('/login', function (req, res) {
	console.log('Opened users/login');
	var data = {
			title: 'Login',
			req: req
		};
	res.render('user/login', data);
});

// [POST] /users/login
router.post('/login', function (req, res) {
	console.log('Posted stuff to users/login');
	var data = {
		title: 'Login',
		req: req,
		username: req.body.name,
		password: req.body.password
	};

	if (data.username === 'admin' && data.password === 'pass') {
		res.locals.username = data.username;
		res.locals.error = false;
		res.redirect('/');
	} else {
		res.locals.error = true;
		res.render('user/login', data);
	}
});
router.get('/logout', function (req, res) {
	console.log('Logging off');
	if (req.session.username) {
		console.log('Unsetting session.username');
		res.locals.username = null;
	}
	console.log('Redirecting');
	res.redirect('/');
});

module.exports = router;