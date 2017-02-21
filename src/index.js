import readlineSync from 'readline-sync';

const askMe = () => {
    return readlineSync.question('May I have your name?: ');
}

export default askMe;

