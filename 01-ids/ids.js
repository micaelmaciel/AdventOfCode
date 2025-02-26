const fs = require('node:fs');

let left_column = [];
let right_column = [];

try {
  const data = fs.readFileSync('input.txt', 'utf8');
  let lists = data.split('\n');

  for (let i = 0; i < lists.length - 1; i++) {
    let splitted_line = lists[i].split(/\s+/);
    left_column.push(splitted_line[0]);
    right_column.push(splitted_line[1]);
  }
} catch (err) {
  console.log(err);
}

left_column.sort((a, b) => a - b);
right_column.sort((a, b) => a - b);

let answer = 0;
for (let i = 0; i < left_column.length; i++) {
  answer += Math.abs(left_column[i] - right_column[i]);
}
console.log(answer)

