/* There are two methods for running child processes under Node.js - exec and spawn. 
   We are passing our command node -v as a first argument and expect to get response in the provided callback.

*/
var exec = require('child_process').exec;
exec('node -v', function(error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

// o/p stdout: v6.11.4