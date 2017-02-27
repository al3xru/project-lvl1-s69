import { cons } from 'hexlet-pairs';
import { getRandom } from './../lib';
import startGame from './../flow';


// объясняем правила игры
const gameRules = 'Answer "yes" if number is prime.';

// создаем пару вопроса и ответа для передачи во флоу
const makeQuestionAnswer = () => {
  const question = getRandom(0, 100);
  // провереяем число на простоту
  const isPrime = (n) => {
    if (n <= 1) return 'no';
    for (let i = 2; i < Math.sqrt(n); i += 1) {
      if (n % i === 0) return 'no';
    }
    return 'yes';
  };
  // возвращаем вопрос и ответ
  return cons(question, isPrime(question));
};

export default () => startGame(gameRules, makeQuestionAnswer);
