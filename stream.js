//Streams in Node.js are a core concept for handling data in a more efficient and scalable way.
// A stream is an abstract interface for working with streaming data, 
//where data is transferred in chunks instead of loading the entire data into memory at once

const fs = require('fs');

const readStream = fs.createReadStream('stream.js');

readStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
});

readStream.on('end', () => {
  console.log('End of file reached.');
});

readStream.on('error', (err) => {
  console.error(`Error reading file: ${err}`);
});


