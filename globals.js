//In Node.js, "globals" typically refer to objects and variables that are available globally 
//throughout the entire application without the need for explicit import or declaration. 
//These global objects and variables are part of the Node.js runtime environment and 
//can be accessed from any module in your Node.js application. Here are some of the 
//commonly used Node.js global objects and variables:

console.log(__dirname); // Prints the directory name of the current module
console.log(__filename); // Prints the file name of the current module

console.log(process.argv); // Prints the command-line arguments passed to the script
console.log(process.env); // Prints the environment variables

console.log(global); // Prints the global object

console.log(Buffer); // Prints the Buffer class for working with binary data
console.log(setTimeout); // Prints the setTimeout function for scheduling a delayed function execution
console.log(setInterval); // Prints the setInterval function for repeatedly executing a function at a fixed interval

