/* Non-Blocking Code Example */
/* program does not wait for file reading and
proceeds to print "Program Ended" and at the same time, the program without
blocking continues reading the file. */
var fs = require('fs');
fs.readFile('input.txt',function(err,nonBlockData){
    if(err)
    console.log('error ',err);
    else
    console.log(nonBlockData.toString());
});

console.log("test");

