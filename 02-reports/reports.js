// i am NOT proud of this code at all. imma improve it
const fs = require('node:fs');

function validateReport(report) {
  let converted_report = report.split(' ').map(item => parseInt(item));
  let is_ascending = true;

  for (let ahead = 1; ahead < converted_report.length; ahead++) {
    const behind = ahead - 1;
    const difference = converted_report[behind] - converted_report[ahead];

    if (difference == 0) return false;
    if (ahead == 1 && difference > 0) is_ascending = false;

    if (is_ascending) {
      if (difference < 0 && difference >= -3) continue;
      return false;
    } else {
      if (difference > 0 && difference <= 3) continue;
      return false;
    }
  }

  return true;
}

let safe_count = 0;
const input = fs.readFileSync('input.txt', 'utf8').split('\n');
for (const i of input) {
  if (validateReport(i)) {
    console.log(i);
    safe_count++;
  }
}

console.log(safe_count);


