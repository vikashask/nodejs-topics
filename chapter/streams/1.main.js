/* 
Streams are the objects that facilitate you to read data from a source and write data to a destination. 
There are four types of streams in Node.js:
Readable : streams from which data can be read
Writable : streams to which data can be written 
Duplex   : streams that are both Readable and Writable
Transform: 
*/
var fs = require("fs");  
var data = '';  
// Create a readable stream  
// work with input.txt first
var readerStream = fs.createReadStream('vikask.txt');  
// Set the encoding to be utf8.   
readerStream.setEncoding('UTF8');  
// Handle stream events --> data, end, and error  
readerStream.on('data', function(chunk) {  
   data += chunk;  
});  
readerStream.on('end',function(){  
    console.log(typeof data);
    let parseData = JSON.parse(data);
   console.log(parseData.name);  
});  
readerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  