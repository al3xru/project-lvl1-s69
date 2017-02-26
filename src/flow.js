import { car, cdr } from 'hexlet-pairs';
import * as lib from './lib';

const startGame = (game, questionAnswer) => {
  // приветствуем юзера и объясняем игру
  lib.helloUser();
  console.log(`${game}`);
  // спрашиваем имя
  const name = lib.askMe();
  // кол-во вопросов
  const totalSteps = 3;

  const iteration = (step) => {
    if (step === totalSteps) return lib.win(name);
    const actQuestion = questionAnswer();
    console.log(`Question: ${car(actQuestion)}`);
    const answer = lib.askQuestion();
    const trueAnswer = cdr(actQuestion);
    if (answer === trueAnswer) return iteration(step + 1);
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
    return console.log(`Let's try again, ${name}`);
  };

  return iteration(0);
};

export default startGame;
