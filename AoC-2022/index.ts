// AoC 2022 - index.ts
const src = './src';
const input = './input';

async function runAoC() {
  const fs = require('fs');
  const args = process.argv;
  if (args.length !== 4) {
    console.log('Usage: node index.ts <day> <A|B>\n\n<day>: The day number to run\n<A|B>: Whether to run the first solution or second solution');
    process.exit();
  }

  const days = fs.readdirSync(src).length;
  if (args[2] > days) {
    console.error(`Error: <day> must be between 1 and ${days} (inclusive)`);
    process.exit();
  }

  const day = require(`${src}/day${args[2]}${args[3]}.ts`);
  await day.runDay(`${input}/day${args[2]}-input.txt`);
}

runAoC();
