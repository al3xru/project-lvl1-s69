import readlineSync from 'readline-sync';

// функция спрашивает имя
export const askMe = () => readlineSync.question('May I have your name?: ');

// функция по возврату случайного целого числа в заданном диапазоне
export const getRandom = (min, max) => Math.floor((Math.random() * (max - min)) + 1 + min);

// функция задает вопрос
export const askQuestion = () => readlineSync.question('Your answer: ');

//  функция спрашивает число
export const askQuestionInt = () => readlineSync.questionInt('Your answer: ');

//  привествует пользователя
export const helloUser = () => console.log('Welcome to the Brain Games!');

// объясняем суть игры
export const gamePoint = message => console.log(message);

// поздравляем с выигрышем
export const win = name => console.log(`Congratulations, ${name}!`);

// функция вычисляет НОД
export const nod = (a, b) => {
  let a1 = Math.abs(a);
  let b1 = Math.abs(b);
  while (a1 && b1) {
    if (a1 >= b1) {
      a1 %= b1;
    } else {
      b1 %= a1;
    }
  }
  return a1 || b1;
};
