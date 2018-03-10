/* 
Node implements File I/O using simple wrappers around standard POSIX functions 

Synchronous vs Asynchronous
Every method in the fs module has synchronous as well as asynchronous forms.

Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files

*/

var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
