module.exports = (function () {
	var stringHelper = {};

	stringHelper.titleize = function (string) {
		console.log('titleize()', string);
		if (typeof string !== 'string') {
			string = string.toString();
		}
		var newString = '',
			stringArray = string.split(' ');
		console.log(stringArray);
		for (var i in stringArray) {
			var word = stringArray[i],
				firstLetter = word.substr(0,1);
			word = firstLetter.toUpperCase() + word.substr(1);
			stringArray[i] = word;
		}
		newString = stringArray.join(' ');
		return newString;
	};

	return stringHelper;
}());