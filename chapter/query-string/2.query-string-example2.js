// querystring.stringify() method produces a URL query string from a given obj

querystring = require('querystring');  
const qs1=querystring.stringify({name:'vikash',company:'vikask'});  
console.log(qs1);       

const exp2= querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// returns 'foo=bar&baz=qux&baz=quux&corge='
console.log(exp2);

