/* 
Callback is an asynchronous equivalent for a function. A callback function is called at the
completion of a given task.

exmple : a function to read a file may start reading a file and return the control to the
execution environment immediately so that the next instruction can be executed. Once
file I/O is complete, it will call the callback function while passing the callback function,
*/

/* Blocking Code Example */

var fs = require('fs');
var blockData = fs.readFileSync('input.txt'); //code is block
console.log(blockData.toString());
console.log("Program Ended for blocking");

/* shows that the program blocks until it reads the file and then
only it proceeds to end the program. */

