var fs = require("fs");  
var data = 'Hello world'; 

const details = {
    name:'vikas',
    location:'hyd'
};
var da = JSON.stringify(details);
// Create a writable stream  
var writerStream = fs.createWriteStream('vikask.txt');  
// Write the data to stream with encoding to be utf8  
writerStream.write(da,'UTF8');  
// Mark the end of file  
writerStream.end();  
// Handle stream events --> finish, and error  
writerStream.on('finish', function() {  
    console.log("Write completed.");  
});  
writerStream.on('error', function(err){  
   console.log(err.stack);  
});  
console.log("Program Ended");  