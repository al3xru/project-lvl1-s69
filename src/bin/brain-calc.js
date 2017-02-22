#!/usr/bin/env node
import * as lib from './lib';

lib.helloUser();
lib.gamePoint('What is the result of the expression?\n');
const name = lib.askMe();

// данный цикл задает вопросы
for (let i = 0; i < 3; i += 1) {
  const question1 = lib.getRandom(1, 99);
  const question2 = lib.getRandom(1, 99);
  let exp = '+';

  switch (i) {
    case 1:
      exp = '-';
      break;
    case 2:
      exp = '*';
      break;
    default:
      exp = '+';
  }

  console.log(`Question: ${question1} ${exp} ${question2}`);
  const answer = lib.askQuestionInt();
  const result = lib.expression(question1, question2, exp);
  if (answer === result) console.log('Correct!');
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
    break;
  }

  if (i === 2) console.log(`Congratulations, ${name}!`);
}
