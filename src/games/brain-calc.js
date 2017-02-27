import { cons } from 'hexlet-pairs';
import { getRandom } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'What is the result of the expression?';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const operator = getRandom(0, 3);
  let answer = 0;
  let question = '';
  switch (operator) {
    case 1:
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 3:
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
      question = 'no question';
      answer = 0;
      break;
  }
  return cons(question, String(answer));
};

export default () => startGame(gameRules, makeQuestionAnswer);
