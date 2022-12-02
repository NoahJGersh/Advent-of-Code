// AoC 2022 - Day 1B

async function run1B(input) {
  let firstCalories = 0, secondCalories = 0, thirdCalories = 0;

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
      if (currentTotal > firstCalories) {
        thirdCalories = secondCalories;
        secondCalories = firstCalories;
        firstCalories = currentTotal
      } else if (currentTotal > secondCalories) {
        thirdCalories = secondCalories;
        secondCalories = currentTotal;
      } else if (currentTotal > thirdCalories) {
        thirdCalories = currentTotal;
      }
      currentTotal = 0;
      console.log('Top 3 so far:', firstCalories, secondCalories, thirdCalories);
    }
  }

  console.log('Sum of top 3 calories:', firstCalories + secondCalories + thirdCalories);
}

exports.runDay = run1B