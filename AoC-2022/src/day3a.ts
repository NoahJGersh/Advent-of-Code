// AoC 2022 - Day 3A

async function run3A(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let sum = 0;

  for await (const line of lines) {
    const compartmentSize = line.length / 2;
    let first = line.slice(0, compartmentSize);
    let second = line.slice(-compartmentSize);
    console.log(`${first},${second}`);

    first  =  first.split('').sort();
    second = second.split('').sort();

    let f = 0, s = 0;
    let shared;
    while (f < first.length && s < second.length) {
      const fCur = first[f].charCodeAt();
      const sCur = second[s].charCodeAt();
      if (fCur > sCur) {
        s++;
      } else if (fCur < sCur) {
        f++;
      } else {
        shared = fCur;
        break;
      }
    }

    console.log('Shared', shared);

    if (shared >= 'a'.charCodeAt()) shared -= 'a'.charCodeAt() - 1;
    else shared = (shared - 'A'.charCodeAt()) + 27;

    console.log('Shared', shared);

    sum += shared;
  }

  console.log('Sum', sum);
}

exports.runDay = run3A