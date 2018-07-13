/*
Node.js module system, each file is treated as a separate module. 

*/

const circle = require('./circle.js');
console.log(`The area of a circle of radius 4 is ${circle.area(4)}`);
console.log(__dirname);
console.log(__filename);

