/* 
Streams are the objects that facilitate you to read data from a source and write data to a destination. 
There are four types of streams in Node.js:
Readable
Writable
Duplex
Transform
*/
var fs = require("fs");  
var data = '';  
// Create a readable stream  
var readerStream = fs.createReadStream('input.txt');  
// Set the encoding to be utf8.   
readerStream.setEncoding('UTF8');  
// Handle stream events --> data, end, and error  
readerStream.on('data', function(chunk) {  
   data += chunk;  
});  
readerStream.on('end',function(){  
   console.log(data);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  