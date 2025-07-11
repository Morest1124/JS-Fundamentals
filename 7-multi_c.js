

const args = process.argv[2];
const times = parseInt(args[0]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  for (let x = 0; x < times; x++) {
    console.log("C is fun");
  }
}
