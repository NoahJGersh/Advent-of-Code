// AoC 2022 - index.ts
const src = './src';
const fs = require('fs');

async function runAoC() {
  const args = process.argv;
  if (args.length !== 3) {
    console.log('Usage: node index.ts <day number>');
    process.exit();
  }

  const days = fs.readdirSync(src).length;
  if (args[2] > days) {
    console.error(`Error: <day> must be between 1 and ${days} (inclusive)`);
    process.exit();
  }

  const day = require(`${src}/day${args[2]}.ts`);
  await day.runDay(fs);
}

runAoC();
