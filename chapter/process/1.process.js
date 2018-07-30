/* 
The process object is a global that provides information about, and control over, the current Node.js process.
 */
var fs = require('fs');
console.log("ertyuio");
console.log(process.cwd());
console.log(process.env);


process.on('uncaughtException', (err) => {
    fs.writeSync(1, `Caught exception: ${err}\n`);
  });
  
  setTimeout(() => {
    console.log('This will still run.');
  }, 1000);
  
  // Intentionally cause an exception, but don't catch it.
  nonexistentFunc();