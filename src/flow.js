import * as calc from './brain-calc';
import * as even from './brain-even';
import * as gcd from './brain-gcd';
import * as lib from './lib';

const iteration = (game, total, name) => {
  if (total === 0) {
    return lib.win(name);
  }
  if (total > 0) {
    switch (game) {
      case 'even':
        if (even.brainEven(name) === 1) iteration(game, total - 1, name);
        break;
      case 'calc':
        if (calc.brainCalc(name, total) === 1) iteration(game, total - 1, name);
        break;
      case 'gcd':
        if (gcd.brainGcd(name, total) === 1) iteration(game, total - 1, name);
        break;
      default:
        console.log('game not found');
        return 0;
    }
  }
  return 0;
};

const startGame = (game, total) => {
  // тут мы выбираем игру и количество шагов
  lib.helloUser();
  switch (game) {
    case 'even':
      even.showRules();
      break;
    case 'calc':
      calc.showRules();
      break;
    case 'gcd':
      gcd.showRules();
      break;
    default:
      console.log('Game not found');
      return 0;
  }
  // спрашиваем имя
  const name = lib.askMe();
  // итератор игр
  iteration(game, total, name);
  return 0;
};

export default startGame;
