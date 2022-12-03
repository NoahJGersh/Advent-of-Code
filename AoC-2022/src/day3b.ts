// AoC 2022 - Day 3B

async function run3B(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let sum = 0;

  let curLines = [];

  for await (const line of lines) {
    if (curLines.length < 3) curLines.push(line);
    else curLines = [line];

    if (curLines.length === 3) {
      let lineA = await curLines[0];
      let lineB = await curLines[1];
      let lineC = await curLines[2];

      lineA = lineA.split('').sort();
      lineB = lineB.split('').sort();

      console.log(lineA, '\n', lineB, '\n', lineC);

      let a = 0, b = 0, c = 0;
      let abIntersect = [];
      let shared;
      while (a < lineA.length && b < lineB.length) {
        const aCur = lineA[a].charCodeAt();
        const bCur = lineB[b].charCodeAt();

        if (aCur > bCur) {
          b++;
        } else if (aCur < bCur) {
          a++;
        } else {
          abIntersect.push(lineA[a]);
          a++;
          b++;
        }
      }

      for (const ch of abIntersect) {
        if (lineC.includes(ch)) {
          shared = ch.charCodeAt();
          break;
        }
      }

      if (shared >= 'a'.charCodeAt()) shared -= 'a'.charCodeAt() - 1;
      else shared = (shared - 'A'.charCodeAt()) + 27;

      console.log('Shared', shared);
      sum += shared;
    }
  }

  console.log('Sum', sum);
}

function parseLine(line) {
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

  return shared;
}

exports.runDay = run3B