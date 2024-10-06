import readline from 'readline';
import { COMMAND_LIST } from './constants.js';
import { mkdir, cd, ls, pwd, touch } from './fileSystem.js';

function executeCommand(command) {
  const [cmd, arg] = command.split(' ');
  const commandMap = { pwd, ls, cd, mkdir, touch };

  if (commandMap[cmd]) {
    commandMap[cmd](arg);
  } else {
    console.log(`Command not recognized. You can try: ${COMMAND_LIST.join(', ')}`);
  }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.on('line', (input) => {
  executeCommand(input);
});