/*
setImmediate() will execute code at the end of the current event loop cycle. 
This code will execute after any I/O operations in the current event loop and before any 
timers scheduled for the next event loop. 
*/
console.log('before immediate');

setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');

console.log('after immediate');