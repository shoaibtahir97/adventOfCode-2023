import fs from "fs";

fs.readFile("input.txt", (err, file) => {
  if (err) throw err;

  const array = [];
  file
    .toString()
    .split("\n")
    .forEach((line) => {
      let numb = line.match(/\d/g);
      numb = numb.join("");
      array.push(numb);
    });
  // console.log(array);
  const numArray = array.map((item, index) => {
    if (item.length === 1) {
      return item + item;
    } else if (item.length > 2) {
      const numsArray = item.split("");
      numsArray.splice(1, numsArray.length - 2);
      return numsArray.join("");
    } else {
      return item;
    }
  });
  let total = 0;
  for (let i = 0; i < numArray.length; i++) {
    total += Number(numArray[i]);
  }
  console.log(total);
});
