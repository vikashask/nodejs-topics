/* 
The Node.js Query String provides methods to deal with query string. It can be used to convert query string into JSON object and vice-versa.

The Node.js Query String utility has four methods.

querystring.parse(str[, sep][, eq][, options])	converts query string into JSON object.
querystring.stringify(obj[, sep][, eq][, options])	converts JSON object into query string.

*/

querystring = require('querystring');  
const obj1=querystring.parse('name=vikash&company=vikask');  
console.log(obj1);  