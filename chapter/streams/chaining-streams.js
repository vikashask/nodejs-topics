/* 
Chaining stream is a mechanism of creating a chain of multiple stream operations by connecting output of one stream to another stream. It is generally used with piping operation.
*/
var fs = require("fs");  
var zlib = require('zlib');  
// Compress the file input.txt to input.txt.gz  
fs.createReadStream('input.txt')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('input.txt.gz'));  
  console.log("File Compressed.");  