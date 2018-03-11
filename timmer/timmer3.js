/* 
Clear timer functions:

clearImmediate(immediateObject): It is used to stop an immediateObject, as created by setImmediate
clearInterval(intervalObject): It is used to stop an intervalObject, as created by setInterval
clearTimeout(timeoutObject): It prevents a timeoutObject, as created by setTimeout

*/

function welcome () {  
    console.log("Welcome to JavaTpoint!");  
  }  
  var id1 = setTimeout(welcome,1000);  
  var id2 = setInterval(welcome,2000);  
  clearTimeout(id1);  
//   clearInterval(id2);  