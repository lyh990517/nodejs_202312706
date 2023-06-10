const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = 'enter: ';

function ask() {
  rl.question(question, (answer) => {
    console.log(`result: ${answer}`);
    rl.close();
  });
}

ask();





