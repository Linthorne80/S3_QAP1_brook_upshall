//npm install lodash


const _ = require('lodash');

// Function to test
function sumArray(numbers) {
  return _.sum(numbers);
}

// Test case
const numbers = [1, 2, 3, 4, 5];
const expectedResult = 15;
const result = sumArray(numbers);

if (result === expectedResult) {
  console.log('Test passed!');
} else {
  console.error('Test failed!');
}
