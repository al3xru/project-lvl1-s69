import readlineSync from 'readline-sync';

const askMe = () => readlineSync.question('May I have your name?: ');

export default askMe;
