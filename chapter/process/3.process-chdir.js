// process.chdir() method changes the current working directory of the Node.js process

console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/tmp');
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

console.log(process.env); // get all env
console.log(process.env.path); // get path

//The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code
console.log(process.memoryUsage());

console.log(process.versions,'versions');


process.exit(1);

