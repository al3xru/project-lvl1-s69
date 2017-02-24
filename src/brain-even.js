import * as lib from './lib';

export const brainEven = (name) => {
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

export const showRules = () => console.log('Answer "yes" if number even otherwise answer "no".\n');
