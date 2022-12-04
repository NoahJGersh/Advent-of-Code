// AoC 2022 - Day 4A

async function run4A(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let contained = 0;

  for await (const line of lines) {
    const ranges = /(\d+)-(\d+),(\d+)-(\d+)/.exec(line);
    if (!ranges) {
      console.log('Bad range on line:', line);
      continue;
    }

    const startA = ranges[1];
    const startB = ranges[3];
    const endA = ranges[2];
    const endB = ranges[4];


    if ((startA >= startB && endA >= startB && endA <= endB) || (startB >= startA && endB >= startA && endB <= endA)) contained++;
  }

  console.log('Contained:', contained);
}

exports.runDay = run4A