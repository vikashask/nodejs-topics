var fs = require('fs');
/* --------------------------   Create Files  ---------------------------------
fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
 */

fs.appendFile('../file/mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

