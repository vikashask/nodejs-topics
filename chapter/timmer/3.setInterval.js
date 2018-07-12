/*
setInterval(): It is used to define a time interval.
callback <Function> The function to call when the timer elapses.
delay <number> The number of milliseconds to wait before calling the callback.
*/
var i = 0;
console.log(i);
setInterval(function () {
    i++;
    console.log(i);
    // if(i==2){
    //     process.exit();
    // }
}, 1000);