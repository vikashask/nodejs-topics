// module

setImmediate(()=> {
    console.log("-----------");
    const m1 = require('./lib/m1');
    console.log(module);
    console.log(m1);
});