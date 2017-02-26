import { cons } from 'hexlet-pairs';
import { getRandom } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'What number is missing in this progression?';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const first = 1;
  const step = getRandom(1, 5);
  const total = 10;
  const quiz = getRandom(0, 10);
  let answer = 0;
  let question = '';

  for (let i = 1; i <= total; i += 1) {
    if (quiz === i) {
      answer = first + (step * i);
      question += ' .. ';
    } else {
      question += ` ${first + (step * i)} `;
    }
  }
  return cons(question, String(answer));
};

export default () => startGame(gameRules, makeQuestionAnswer);
