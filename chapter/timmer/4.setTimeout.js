/*
setTimeout  = an be used to schedule code execution after a designated amount of milliseconds
callback <Function> The function to call when the timer elapses.
delay <number> The number of milliseconds to wait before calling the callback.
*/

function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}
setTimeout(myFunc, 1500, 'vikash');