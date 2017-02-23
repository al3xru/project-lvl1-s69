import readlineSync from 'readline-sync';

// функция спрашивает имя
const askMe = () => readlineSync.question('May I have your name?: ');

// функция по возврату случайного целого числа в заданном диапазоне
const getRandom = (min, max) => Math.floor((Math.random() * (max - min)) + 1 + min);

// функция задает вопрос
const askQuestion = () => readlineSync.question('Your answer: ');

//  функция спрашивает число
const askQuestionInt = () => readlineSync.questionInt('Your answer: ');

//  привествует пользователя
const helloUser = () => console.log('Welcome to the Brain Games!');

// объясняем суть игры
const gamePoint = message => console.log(message);

// поздравляем с выигрышем
const win = name => console.log(`Congratulations, ${name}!`);

// Выполнение выражения
const expression = (first, second, action) => {
  switch (action) {
    case '*': return first * second;
    case '-': return first - second;
    case '+': return first + second;
    default: return 0;
  }
};

const brainEven = (name) => {
  const question = getRandom(1, 99);
  console.log(`Question: ${question}`);
  const answer = askQuestion();
  if (question % 2 === 0 && answer === 'yes') console.log('Correct!');
  if ((question % 2 !== 0 && answer === 'no')) console.log('Correct!');
  if (question % 2 === 0 && answer === 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
    return 0;
  }
  if (question % 2 !== 0 && answer === 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const brainCalc = (name, i) => {
  const question1 = getRandom(1, 99);
  const question2 = getRandom(1, 99);
  let exp = '+';

  switch (i) {
    case 3:
      exp = '+';
      break;
    case 2:
      exp = '-';
      break;
    default:
      exp = '*';
  }

  console.log(`Question: ${question1} ${exp} ${question2}`);
  const answer = askQuestionInt();
  const result = expression(question1, question2, exp);
  if (answer === result) console.log('Correct!');
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.\n Let's try again, ${name}!`);
    return 0;
  }
  return 1;
};

const iteration = (game, total, name) => {
  if (total === 0) {
    return win(name);
  }
  if (total > 0) {
    switch (game) {
      case 'even':
        if (brainEven(name) === 1) iteration('even', total - 1, name);
        break;
      case 'calc':
        if (brainCalc(name, total) === 1) iteration('calc', total - 1, name);
        break;
      default:
        return console.log('Game not found');
    }
  }
  return 0;
};

const startGame = (gameType, total, rules) => {
  helloUser();
  gamePoint(rules);
  const name = askMe();
  iteration(gameType, total, name);
};
export default startGame;
