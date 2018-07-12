/* 
Piping is a mechanism where output of one stream is used as input to another stream. There is no limit on piping operation.

*/
var fs = require("fs");  
// Create a readable stream  
var readerStream = fs.createReadStream('input.txt');  
// Create a writable stream  
var writerStream = fs.createWriteStream('output.txt');  
// Pipe the read and write operations  
// read input.txt and write data to output.txt  
readerStream.pipe(writerStream);  
console.log("Program Ended");  
