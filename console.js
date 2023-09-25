//the console module provides a set of methods for printing messages and data to the console, 
//which is typically the terminal or command prompt where you run your Node.js applications.
// These methods are useful for debugging, logging information, and monitoring the execution of your code.

console.log('Hello, World!');
console.log('The answer is', 42);
console.log('The answer is %d', 42);

console.error('This is an error message.');

console.warn('This is a warning.');

console.info('Informational message.');

console.debug('Debugging message.');

const data = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
  ];
  
  console.table(data);

  console.clear();


  console.time('myTimer');
// Code to measure execution time
console.timeEnd('myTimer'); // Stop the timer and print the elapsed time

console.group('Group 1');
console.log('Message 1');
console.log('Message 2');
console.groupEnd();

console.group('Group 2');
console.log('Message 3');
console.groupEnd();

console.groupCollapsed('Group 3');
console.log('Message 4');
console.groupEnd();

console.clear();