// TODO: What are we importing?
const fs = require('fs');
// We are import fs object from another module called fs.

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument takes the name of the file we want to write in;
// The second argument takes the data we want to write in;
// The third argument takes any error message that would result from the operation.
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
