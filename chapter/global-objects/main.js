/* 
Node.js global objects are global in nature and available in all modules. You don't need to include these
objects in your application; rather they can be used directly. These objects are modules, functions, strings
and object etc

A list of Node.js global objects.

__dirname
__filename
Console
Process
Buffer
setImmediate(callback[, arg][, ...])
setInterval(callback, delay[, arg][, ...])
setTimeout(callback, delay[, arg][, ...])
clearImmediate(immediateObject)
clearInterval(intervalObject)
clearTimeout(timeoutObject)

*/

// It specifies the name of the directory that currently contains the code.
console.log(__dirname);   

//  filename of the code being executed
console.log(__filename);
