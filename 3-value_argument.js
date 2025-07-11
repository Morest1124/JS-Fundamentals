const process = require('process');

const name = process.argv[2];
if (name === undefined){
  console.log('No argument')
} else {
  console.log(name)
}