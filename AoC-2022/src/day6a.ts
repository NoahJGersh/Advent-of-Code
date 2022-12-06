// AoC 2022 - Day 6A

async function run6A(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  for await (const line of lines) {
    for (let i = 0; i < line.length; ++i) {
      const markers = line.substring(i, i+4);
      const unique = new Set(markers.split(''));
      if (unique.size === 4) {
        console.log(i+4);
        return;
      }
    }
  }

  
}

exports.runDay = run6A