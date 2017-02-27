import { cons } from 'hexlet-pairs';
import { getRandom, nod } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'Find the greatest common divisor of given numbers.';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const num1 = getRandom(0, 100);
  const num2 = getRandom(0, 100);
  const answer = nod(num1, num2);
  const question = `${num1} ${num2}`;
  return cons(question, String(answer));
};

export default () => startGame(gameRules, makeQuestionAnswer);
