/* TASK 2 ROUTING */
var express = require('express'),
	router = express.Router();

router.get('/', function (req, res) {
	// Do eeet
	// NOAW!
	res.send('Task 2 Bitch!');
});

router.get('/sup-ho', function (req, res) {
	// Do eeet
	// NOAW!
	res.send('Subbed!');
});

// export the router
module.exports = router;