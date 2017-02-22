#!/usr/bin/env node
import * as lib from './lib';

lib.helloUser();
lib.gamePoint('Answer "yes" if number odd otherwise answer "no".\n');
const name = lib.askMe();

// данный цикл задает вопросы
for (let i = 0; i < 3; i += 1) {
  const question = lib.getRandom(1, 99);
  console.log(`Question: ${question}`);
  const answer = lib.askQuestion();
  if (question % 2 === 0 && answer === 'yes') console.log('Correct!');
  if ((question % 2 !== 0 && answer === 'no')) console.log('Correct!');
  if (question % 2 === 0 && answer === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
    break;
  }
  if (question % 2 !== 0 && answer === 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    break;
  }
  if (i === 2) console.log(`Congratulations, ${name}!`);
}
