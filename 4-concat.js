const process = require('process');

const firstArgv = process.argv[2];
const secondArgv =process.argv[3]

console.log(`${firstArgv}`, 'is', `${secondArgv}`)