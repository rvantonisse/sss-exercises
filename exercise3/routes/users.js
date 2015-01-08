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
router.get('/login', function (req, res) {
	console.log('Opened users/login');
	var data = {
		title: 'Login',
		req: req,
		err: false
	};
	res.render('users/login', data);
});

// [POST] /users/login
router.post('/login', function (req, res) {
	console.log('Posted stuff to users/login');
	var data = {
		title: 'Login',
		req: req,
		username: req.body.username,
		password: req.body.password
	};
	if (data.username === 'admin' && data.password === 'pass') {
		req.session.username = data.username;
		res.redirect(req.baseUrl + '/');
	} else {
		data.err = true;
		res.render('users/login', data);
	}
});
router.get('/logout', function (req, res) {
	console.log('Logging off');
	if (req.session.username) {
		console.log('Unsetting session.username');
		req.session.username = null;
	}
	console.log('Redirecting');
	res.redirect('/');
});

module.exports = router;