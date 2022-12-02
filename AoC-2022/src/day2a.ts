// AoC 2022 - Day 2A

async function run2A(input) {
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
  const refOurs = ['X', 'Y', 'Z'];
  let points = 0;

  for await (const line of lines) {
    const lineMatch = /([ABC]) ([XYZ])/.exec(line);
    if (!lineMatch) continue;

    const opp = refTheirs.indexOf(lineMatch[1]);
    const our = refOurs.indexOf(lineMatch[2]);

    points += our + 1;
    if (our === opp) { // Draw
      points += 3
    } else if (our === (opp + 1) % 3) { // Win
      points += 6
    }
  }

  console.log('Points:', points);
}

exports.runDay = run2A