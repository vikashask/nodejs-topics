const fs = require('fs');  
function nodeStyleCallback(err, data) {  
 if (err) {  
   console.error('There was an error', err);  
   return;  
 }  
 console.log(data);  
}  
fs.readFile('/some/file/that/does-not-exist', nodeStyleCallback);  
fs.readFile('/some/file/that/does-exist', nodeStyleCallback);  