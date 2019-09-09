/* 
Built-In Modules

assert: Provides a set of assertion tests to be used during unit testing
buffer: To handle binary data
child_process: To run a child process
crypto: To handle OpenSSL cryptographic functions
dns: To do DNS lookups and name resolution functions
events: To handle events
fs: To handle the filesystem
http or https: For creating HTTP(s) servers
stream: To handle streaming data
util: To access utility functions like deprecate (for marking functions as deprecated), format (for string formatting), inspect (for object debugging)
*/

/* 
npm Commands
npm init: 
npm install <package-name> <options>
    --save-dev
    npm install <package-name>@<version>

npm list:
“npm uninstall <package-name>:”
npm outdated:
*/

/* 
Promises
*/
const sum = (a,b) => {
    return new Promise((resolve,reject)=>{
        if(a+b ===0){
            reject("not valid");
        }
        resolve(a+b);
    })
}

sum(2,0)
.then(data => console.log("ooo",data))
.catch(error=>console.log(error)
)