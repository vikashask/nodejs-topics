/* 
The Node.js console module provides a simple debugging console similar to JavaScript console mechanism
    provided by web browsers.
 
   There are three console methods that are used to write any node.js stream:

1.console.log()
2.console.error()
3.console.warn()  
*/
// display simple message
console.log('Hello World');   
console.log('Hello %s', 'world 2');   

// The console.error() function is used to render error message on console.
console.error(new Error('Hell! This is a wrong method.'));  

// The console.warn() function is used to display warning message on console.
const name = 'vikash';  
console.warn(`Don't mess with me ${name}! Don't mess with me!`);   