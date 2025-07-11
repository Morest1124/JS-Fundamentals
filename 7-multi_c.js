const args = process.argv[2];
const times = parseInt(args[0]);

if (isNaN(times) ||  0) {
  console.log("");
} else {
  for (let x = 0; x < times; x++) {
    console.log("C is fun");
  }
}
