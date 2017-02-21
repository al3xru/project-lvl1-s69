#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askMe from '..';

// функция по возврату случайного целого числа в заданном диапазоне
const getRandom = (min, max) => Math.floor((Math.random() * (max - min)) + 1 + min);

// функция задает вопрос
const askQuestion = () => readlineSync.question('Your answer: ');


console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number odd otherwise answer "no".\n');

const name = askMe();

// данный цикл задает вопросы
for (let i = 0; i < 3; i += 1) {
  const question = getRandom(1, 99);
  console.log(`Question: ${question}`);
  const answer = askQuestion();
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
