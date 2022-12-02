// AoC 2022 - Day 1A

async function run1A(input) {
  let firstCalories = 0;

  const fs = require('fs');
  const readline = require('readline');

  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let currentTotal = 0;
  for await (const line of lines) {
    const cals = parseInt(line);
    if (cals) currentTotal += cals;
    else {
      if (currentTotal > firstCalories) firstCalories = currentTotal;
      currentTotal = 0;
      console.log('Greatest calories:', firstCalories);
    }
  }

  console.log('Answer:', firstCalories);
}

exports.runDay = run1A