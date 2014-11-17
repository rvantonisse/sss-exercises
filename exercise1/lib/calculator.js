var calculator = {
	// Calculates the sum of a list with numbers
	sum: function (numbers) {
		console.log('sum()',numbers);
		var number = 0,
			sum = 0;
		console.log('numbers is an instance of Array or Object: ', (numbers instanceof Array || numbers instanceof Object));
		// Implement sum function
		if (typeof numbers === 'object' && numbers !== null) {
			for (number in numbers) {
				var thisNumber = numbers[number];
				console.log('This number: ' + thisNumber + ' is a ' + typeof thisNumber);
				if (typeof thisNumber === 'number') {
					sum += thisNumber;
				} else {
					console.log('This number is not a number: ' + thisNumber + ' and was excluded in the calculation.');
				}
			}
			return sum;
		} else {
			console.log('No list with numbers was specified');
		}
	},
	// Multiplies a list with numbers
	multiply: function (numbers) {
		console.log('Multiply()',numbers);
		var number = 0,
			multiplication = 1;
		console.log('numbers is an instance of Array or Object: ', (numbers instanceof Array || numbers instanceof Object));
		// Implement multiply function
		if (typeof numbers === 'object' && numbers !== null) {
			for (number in numbers) {
				var thisNumber = numbers[number];
				console.log('This number: ' + thisNumber + ' is a ' + typeof thisNumber);
				if (typeof thisNumber === 'number') {
					multiplication *= thisNumber;
				} else {
					console.log('This number is not a number: ' + thisNumber + ' and was excluded in the calculation.');
				}
			}
			return multiplication;
		} else {
			console.log('No list with numbers was specified, calculation was aborted');
		}
	}
};

module.exports = calculator;