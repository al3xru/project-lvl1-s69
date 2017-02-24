import * as lib from './lib';

const brainEven = (name) => {
  const question = lib.getRandom(1, 99);
  console.log(`Question: ${question}`);
  const answer = lib.askQuestion();
  if (question % 2 === 0 && answer === 'yes') console.log('Correct!');
  if ((question % 2 !== 0 && answer === 'no')) console.log('Correct!');
  if (question % 2 === 0 && answer === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
    return 0;
  }
  if (question % 2 !== 0 && answer === 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    return 0;
  }
  return 1;
};

// Выполнение выражения
const iteration = (total, name) => {
  if (total === 0) {
    return lib.win(name);
  }
  if (total > 0) {
    if (brainEven(name, total) === 1) iteration(total - 1, name);
  }
  return 0;
};

const startGame = () => {
  lib.helloUser();
  lib.gamePoint('Answer "yes" if number odd otherwise answer "no".\n');
  const name = lib.askMe();
  iteration(3, name);
};

export default startGame;
