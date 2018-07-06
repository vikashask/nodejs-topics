/* 
The Node.js Assert is the most elementary way to write tests. It provides no feedback when running 
your test unless one fails. The assert module provides a simple set of assertion tests that can be 
used to test invariants.
 */

var assert = require('assert');  
function add (a, b) {  
  return a + b;  
}  
var expected = add(1,2);  
assert( expected === 3, 'one plus two is three');  

/* It will not provide any output because the case is true. */