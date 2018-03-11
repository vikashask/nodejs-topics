/* 
The Node.js path module is used to handle and transform files paths. 

*/

var path = require("path");  
// Normalization  
console.log('normalization : ' + path.normalize('/sssit/javatpoint//node/newfolder/tab/..'));  
// Join  
console.log('joint path : ' + path.join('/sssit', 'javatpoint', 'node/newfolder', 'tab', '..'));  
// Resolve  
console.log('resolve : ' + path.resolve('path_example.js'));  
// Extension   
console.log('ext name: ' + path.extname('path_example.js'));    