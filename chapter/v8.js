/* 
V8 is an open source JavaScript engine developed by the Chromium project for the Google Chrome web browser. It is written in C++

The Node.js V8 module represents interfaces and event specific to the version of V8. It provides methods to 
get information about heap memory through v8.getHeapStatistics() and v8.getHeapSpaceStatistics() methods.

*/
const v8 = require('v8');  

/* 
The v8.getHeapStatistics() method returns statistics about heap such as total heap size, used heap size, heap size limit, total available size etc.
 */
console.log(v8.getHeapStatistics());  

/* 
The v8.getHeapSpaceStatistics() returns statistics about heap space.
 */
console.log(v8.getHeapSpaceStatistics());  

/* by default v8 has a memory limit of 512mb on 32-bit and 1gb on 64-bit systems */