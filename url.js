/* 
Parse an address with the url.parse() method, and it will return a URL object with each part of the address
 as properties:
*/
'use strict';
let url = require('url');
let adr = 'http://localhost:8080/default.htm?year=2017&month=february&test=12';
//Parse the address:
let q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log("Host" , q.host);
console.log("Path ",q.pathname);
console.log("Param ",q.search);

/*The query property returns an object with all the querystring parameters as properties:*/
var qdata = q.query;
console.log(qdata.month);
