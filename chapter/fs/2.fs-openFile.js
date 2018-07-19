var fs = require('fs');
// open file
fs.open('../file/mynewfile1.txt', 'w', function (err, file) {
    if (err) throw err;
    else
    console.log(file);
});
