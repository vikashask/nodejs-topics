// failing script: stderr contains the text of the error and error is an instance of Error class.

var exec = require('child_process').exec;
exec('node ./failing.js', function(error, stdout, stderr) {
    console.log('stdout: ', stdout);
    console.log('stderr: ', stderr);
    if (error !== null) {
        console.log('exec error: ', error);
    }
});

