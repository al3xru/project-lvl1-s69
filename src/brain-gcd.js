import * as lib from './lib';

export const nod = (a, b) => {
  let a1 = Math.abs(a);
  let b1 = Math.abs(b);
  while (a1 && b1) {
    if (a1 >= b1) {
      a1 %= b1;
    } else {
      b1 %= a1;
    }
  }
  return a1 || b1;
};

export const brainGcd = (name) => {
  const question = lib.getRandom(1, 99);
  const question2 = lib.getRandom(1, 99);
  console.log(`Question: ${question} ${question2}`);
  const answer = lib.askQuestionInt();
  const trueNod = nod(question, question2);
  // тут ищем общий делитель
  if (trueNod === answer) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueNod}'.\n Let's try again, ${name}!`);
    return 0;
  }
  return 1;
};

export const showRules = () => console.log('Find the greatest common divisor of given numbers.\n');
