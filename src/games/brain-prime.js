import { cons } from 'hexlet-pairs';
import { getRandom } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'Answer "yes" if number is simple.';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const question = getRandom(0, 100);
  const answer = (expression) => {
    if (expression % 2 === 0 && expression > 1) return 'no';
    return 'yes';
  };
  return cons(question, answer(question));
};

export default () => startGame(gameRules, makeQuestionAnswer);
