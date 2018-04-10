const fs = require('fs');  
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error', err);  
   return;  
 }  
 console.log(data);  
}  
fs.readFile('../test-not-exist.txt', nodeStyleCallback);  
fs.readFile('../test.txt', nodeStyleCallback);  