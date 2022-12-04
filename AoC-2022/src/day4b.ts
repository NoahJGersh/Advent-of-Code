// AoC 2022 - Day 4B

async function run4B(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let overlap = 0;

  for await (const line of lines) {
    const ranges = /(\d+)-(\d+),(\d+)-(\d+)/.exec(line);
    if (!ranges) {
      console.log('Bad range on line:', line);
      continue;
    }

    const startA = parseInt(ranges[1]);
    const startB = parseInt(ranges[3]);
    const endA = parseInt(ranges[2]);
    const endB = parseInt(ranges[4]);

    if ((startA <= endB && endA >= startB) || (startB <= endA && endB >= startA)) {
      overlap++;
    }
  }

  console.log('Overlap:', overlap);
}

exports.runDay = run4B