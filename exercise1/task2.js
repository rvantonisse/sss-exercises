//  ===================================
//  = Serverside scripting in node.js =
//  ===================================

//                                    .__                 ____ 
//   ____ ___  ___ ___________   ____ |__| ______ ____   /_   |
// _/ __ \\  \/  // __ \_  __ \_/ ___\|  |/  ___// __ \   |   |
// \  ___/ >    <\  ___/|  | \/\  \___|  |\___ \\  ___/   |   |
//  \___  >__/\_ \\___  >__|    \___  >__/____  >\___  >  |___|
//      \/      \/    \/            \/        \/     \/        

//  ==========
//  = Task 2 =
//  ==========
//  Working with variables
var calculator = require('./lib/calculator'),
	numbers = [2,3,4,5];

console.log('The numbers are: ', numbers);
// Using sum()
console.log('The sum of the numbers = ', calculator.sum(numbers));

// Using multiply()
console.log('Multiplying the numbers = ', calculator.multiply(numbers));
