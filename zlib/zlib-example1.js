/* 
The Node.js Zlib module is used to provide compression and decompression (zip and unzip) functionalities. It is implemented using Gzip and deflate/inflate.
 
*/

const zlib = require('zlib');  
const gzip = zlib.createGzip();  
const fs = require('fs');  
const inp = fs.createReadStream('input.txt');  
const out = fs.createWriteStream('input.txt.gz');  
inp.pipe(gzip).pipe(out);  
