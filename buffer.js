// In Node.js, a Buffer is a built-in class that provides a way to work 
//with binary data directly in memory. Buffers are particularly useful for working with 
//binary files, network protocols, and other data streams where data may not be represented as text.

const buffer = Buffer.from('Hello, Buffer!', 'utf8');

console.log(buffer); // <Buffer 48 65 6c 6c 6f 2c 20 42 75 66 66 65 72 21>
console.log(buffer.toString('utf8')); // Hello, Buffer!
console.log(buffer.toString('ascii')); // Hello
console.log(buffer.toString('binary')); // Hello
console.log(buffer.toString('hex')); // 48656c6c6f2c2052656666726121        
