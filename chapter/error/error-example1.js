/* 
 Node.js applications generally face four types of errors:

Standard JavaScript errors i.e. <EvalError>, <SyntaxError>, <RangeError>, <ReferenceError>, <TypeError>, <URIError> etc.
System errors
User-specified errors
Assertion errors
 */

// standard JavaScript error - ReferenceError.

// Throws with a ReferenceError because b is undefined  
try {  
    const a = 1;  
    const c = a + b;  
  } catch (err) {  
    console.log(err);  
  }  finally{
    console.log("finally");
    
  }