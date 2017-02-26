import { cons } from 'hexlet-pairs';
import { getRandom } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'Balance the given number..\n';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const question = getRandom(100, 9999);

  // теперь пишем функцию которая сбалансирует данное случайное число
  const balance = (num) => {
    const normalize = (result) => {
      let number = result;
      number = number.split('').sort().join('');
      for (let i = 1; i < number.length; i += 1) {
        if ((number[i] - number[0]) > 1) {
          number = number.split('');
          number[0] = Number(number[0]) + 1;
          number[i] = Number(number[i]) - 1;
          return normalize(number.join(''));
        }
      }
      return number;
    };
    return normalize(num);
  };
  const answer = balance(String(question));
  return cons(question, String(answer));
};

export default () => startGame(gameRules, makeQuestionAnswer);
