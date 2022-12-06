// AoC 2022 - Day 5A

async function run5A(input) {
  const fs = require('fs');
  const readline = require('readline');
  const stream = fs.createReadStream(input);
  const lines = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  let contained = 0;

  let stacks = [];

  for await (const line of lines) {
    if (line.includes('move')) {
      stacks = stackInstruction(line, stacks);
      continue;
    }

    const layerMatch = /(?:\[([A-Z])\]|\s\s\s)(?:\s|$)/g;
    let match = layerMatch.exec(line);
    let stackNum = 0;
    while (match) {
      if (match[1]) {
        const stack = stacks[stackNum];
        if (stack) stack.unshift(match[1]);
        else stacks[stackNum] = [match[1]]; 
      }
      stackNum++;
      match = layerMatch.exec(line);
    }
  }

  const tops = stacks.map(stack => stack.pop());
  console.log(tops.join(''));
}

function stackInstruction(line, stacks) {
  const instr = /move (\d+) from (\d+) to (\d+)/i.exec(line);
  if (!instr) return;

  const count = instr[1];
  const src   = instr[2];
  const dest  = instr[3];

  const srcStack = stacks[src-1];
  const destStack = stacks[dest-1];

  const transfer = srcStack.slice(count * -1);
  stacks[src-1] = srcStack.slice(0, count * -1);
  stacks[dest-1] = destStack.concat(transfer.reverse());

  return stacks;
}

exports.runDay = run5A