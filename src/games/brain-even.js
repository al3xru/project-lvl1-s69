import * as lib from './../lib';
import startGame from './../flow';

const gameRules = 'Answer "yes" if number odd otherwise answer "no".';
const newQuestion = () => lib.getRandom(1, 100);

const trueQuestion = (question) => {
  if (Number(question) % 2 === 0) return 'yes';
  return 'no';
};

export default () => startGame(gameRules, newQuestion, trueQuestion);
