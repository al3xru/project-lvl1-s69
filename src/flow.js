import * as lib from './lib';

const startGame = (game, question, getAnswer) => {
  // приветствуем юзера и объясняем игру
  lib.helloUser();
  console.log(`${game}`);
  // спрашиваем имя
  const name = lib.askMe();
  // кол-во вопросов
  const totalSteps = 3;

  const iteration = (step) => {
    if (step === totalSteps) return lib.win(name);
    const actQuestion = question();
    console.log(`Question: ${actQuestion}`);
    const answer = lib.askQuestion();
    const trueAnswer = getAnswer(actQuestion);
    if (answer === trueAnswer) return iteration(step + 1);
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${trueAnswer}".`);
    return console.log(`Let's try again, ${name}`);
  };

  return iteration(0);
};

export default startGame;
