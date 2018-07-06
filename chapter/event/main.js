/* 
    Whenever an event gets fired, its listener function starts executing.
    Node.js has multiple in-built events available through events module and EventEmitter class which is used to bind events and event listeners.
*/

// Import events module  
var events = require('events');  
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter();  
  
// Create an event handler as follows  
var connectHandler = function connected() {  
   console.log('connection succesful.');  
    
   // Fire the data_received event   
   eventEmitter.emit('data_received');  
}  
  
// Bind the connection event with the handler  
eventEmitter.on('connection', connectHandler);  
 // Bind the data_received event with the anonymous function  
eventEmitter.on('data_received', function(){  
   console.log('data received succesfully.');  
});  
// Fire the connection event   
eventEmitter.emit('connection');  
console.log("Program Ended.");  