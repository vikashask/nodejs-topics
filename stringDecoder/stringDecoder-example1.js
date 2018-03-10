/* 
    The Node.js StringDecoder is used to decode buffer into string. It is similar to buffer.toString() but provides extra support to UTF.
 */

const StringDecoder = require('string_decoder').StringDecoder;  
const decoder = new StringDecoder('utf8');  
  
const buf1 = new Buffer('this is a test');  
console.log(decoder.write(buf1));//prints: this is a test  
  
const buf2 = new Buffer('7468697320697320612074c3a97374', 'hex');  
console.log(decoder.write(buf2));//prints: this is a test  
                        
const buf3 = Buffer.from([0x62,0x75,0x66,0x66,0x65,0x72]);  
console.log(decoder.write(buf3));//prints: buffer  