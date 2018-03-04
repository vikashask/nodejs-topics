var http = require('http');
var fs = require('fs');

// reading a file
/* http.createServer(function (req, res) {
  fs.readFile('./file/test.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);
*/
// run localhost:8080

/* --------------------------   Create Files  ---------------------------------
fs.appendFile()
fs.open()
fs.writeFile()
The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
 */

/* fs.appendFile('./file/mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
}); */

// open file
/* fs.open('./file/mynewfile1.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log(file);
}); */

//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content
/* fs.writeFile('./file/mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('replace!');
  });
 */

//   ------------      Update Files      ---------------
/* 
fs.appendFile()
fs.writeFile() 
*/
// Delete Files
// To delete a file with the File System module,  use the fs.unlink() method

/* fs.unlink('mynewfile2.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });
 */
/* fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  }); */