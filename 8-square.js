const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let B = 0; B < size; B++) {
    let row = "";
    for (let A = 0; A < size; A++) {
      row += "X";
    }
    console.log(row);
  }
}
