/* 
Node implements File I/O using simple wrappers around standard POSIX functions 

Synchronous vs Asynchronous
Every method in the fs module has synchronous as well as asynchronous forms.

Common use for the File System module:

Read files
    fs.readFile

Create files
    fs.appendFile()
    fs.open()
    fs.writeFile()

Update files
    fs.appendFile()
    fs.writeFile()

Delete files
    fs.unlink()

Rename files
    fs.rename()

*/

var fs = require("fs");
// Asynchronous read
fs.readFile('test.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
console.log("start from here");

var data = fs.readFileSync('test.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
