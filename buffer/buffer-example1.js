/* 
Node.js provides Buffer class to store raw data similar to an array of integers but corresponds to a 
raw memory allocation outside the V8 heap. Buffer class is used because pure JavaScript is not nice to 
binary data. So, when dealing with TCP streams or the file system, it's necessary to handle octet streams

*/

// 1. Create an uninitiated buffer: Following is the syntax of creating an uninitiated buffer of 10 octets:
var buf1 = new Buffer(10);  

// 2. Create a buffer from array: Following is the syntax to create a Buffer from a given array:
var buf2 = new Buffer([10, 20, 30, 40, 50]);  
// 3. Create a buffer from string: Following is the syntax to create a Buffer from a given string and optionally encoding type:
var buf3 = new Buffer("Simply Easy Learning", "utf-8");   

/* Node.js Writing to buffers
buf.write(string[, offset][, length][, encoding])  
 */

 buf = new Buffer(256);  
len = buf.write("Simply Easy Learning");  
console.log("Octets written : "+  len); 

// o/p Octets written : 20

