import * as lib from './../lib';

// Выполнение выражения
const expression = (first, second, action) => {
  switch (action) {
    case '*': return first * second;
    case '-': return first - second;
    case '+': return first + second;
    default: return 0;
  }
};

export const brainCalc = (name, i) => {
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

export const showRules = () => console.log('What is the result of the expression?\n');
