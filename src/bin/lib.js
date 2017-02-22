import readlineSync from 'readline-sync';

// функция спрашивает имя
const askMe = () => readlineSync.question('May I have your name?: ');

// функция по возврату случайного целого числа в заданном диапазоне
const getRandom = (min, max) => Math.floor((Math.random() * (max - min)) + 1 + min);

// функция задает вопрос
const askQuestion = () => readlineSync.question('Your answer: ');

//  привествует пользователя
const helloUser = () => console.log('Welcome to the Brain Games!');

// объясняем суть игры
const gamePoint = (message) => {
  return console.log(message);
}

export { getRandom, askQuestion, helloUser, gamePoint, askMe };

