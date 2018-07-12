// print process.argv
process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
  });

console.log(process.argv[2]); // get the 2nd index value

console.log(process.argv0);

