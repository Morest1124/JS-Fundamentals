const args = process.argv.slice(2);

if (args.length === 0 || isNaN(parseInt(args[0])) || parseInt(args[0]) <= 0) {
  if (args.length === 0 || isNaN(parseInt(args[0]))) {
    console.log("Missing number of occurrences");
  }
} else {
  const times = parseInt(args[0]);
  let output = "";
  for (let i = 0; i < times; i++) {
    output += "C is fun\n";
  }
  console.log(output.trim());
}