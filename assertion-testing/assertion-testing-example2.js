var assert = require('assert');  
function add (a, b) {  
  return a + b;  
}  
var expected = add(1,2);  
assert( expected === 4, 'one plus two is three');  

/* Now you will see the AssertionError. */