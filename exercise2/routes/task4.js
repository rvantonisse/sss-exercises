var express = require('express');
var router = express.Router();
var request = require("request");

/* GET Weather page. */
router.get('/', function(req, res) {

	var url = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl",
		data = {
			title: 'Het weer vandaag in jouw hoofdstad',
			cities: [
				"Amsterdam",
				"Utrecht",
				"Middelburg",
				"Lelystad",
				"Arnhem",
				"Assen",
				"Leeuwarden",
				"Groningen",
				"Zwolle",
				"Den&nbsp;Bosch",
				"Den&nbsp;Haag"
			]
		};
	res.render('task4', data);
});

// task4/:location
router.get('/:location', function(req, res) {

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + req.params.location,
		data = {
			title: 'Het weer vandaag in ' + req.params.location,
			weather: null,
		};
	function showWeather (url, callback) {
		request(url, function (error, response, body) {
			if (!error && response.statusCode == 200) {
				var result = JSON.parse(body);
				console.log('Your weather Sir...',result); // Print the weather.
				data.weather = {
					wind: {
						speed: result.wind.speed,
						direction: result.wind.deg
					}
				};
			} else {
				if (error) {
					console.log(error);
				}
				console.log('No weather for you today Sir!');
				data.weather = null;
			}
			callback();
		});
	}
	showWeather(url, function () {
		res.render('task4/location', data);
	});
});

// Extra opdacht op basis van query string weer ophalen
module.exports = router;