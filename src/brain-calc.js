import * as lib from './lib';

// Выполнение выражения
const expression = (first, second, action) => {
  switch (action) {
    case '*': return first * second;
    case '-': return first - second;
    case '+': return first + second;
    default: return 0;
  }
};

const brainCalc = (name, i) => {
  const question1 = lib.getRandom(1, 99);
  const question2 = lib.getRandom(1, 99);
  let exp = '+';

  switch (i) {
    case 3:
      exp = '+';
      break;
    case 2:
      exp = '-';
      break;
    default:
      exp = '*';
  }

  console.log(`Question: ${question1} ${exp} ${question2}`);
  const answer = lib.askQuestionInt();
  const result = expression(question1, question2, exp);
  if (answer === result) console.log('Correct!');
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const iteration = (total, name) => {
  if (total === 0) {
    return lib.win(name);
  }
  if (total > 0) {
    if (brainCalc(name, total) === 1) iteration(total - 1, name);
  }
  return 0;
};

const startGame = () => {
  lib.helloUser();
  lib.gamePoint('What is the result of the expression?\n');
  const name = lib.askMe();
  iteration(3, name);
};

export default startGame;
