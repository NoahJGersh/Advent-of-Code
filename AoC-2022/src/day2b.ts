// AoC 2022 - Day 2B

async function run2B(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  // A = Rock
  // B = Paper
  // C = Scissors
  const refTheirs = ['A', 'B', 'C'];
  let points = 0;

  for await (const line of lines) {
    const lineMatch = /([ABC]) ([XYZ])/.exec(line);
    if (!lineMatch) continue;

    const opp = refTheirs.indexOf(lineMatch[1]);
    const guide = lineMatch[2];


    if (guide === 'Y') {
      // Draw; 3 points + value of same option
      points += 4 + opp;
    }
    else if (guide === 'Z') {
      // Win; 6 points plus value of next option
      points += 7 + (opp + 1) % 3;
    } else {
      // Loss; no points plus value of previous option
      points += (opp + 2) % 3 + 1;
    }

  }

  console.log('Points:', points);
}

exports.runDay = run2B