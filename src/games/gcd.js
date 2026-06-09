import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const gcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return gcd(b, a % b);
};

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const correctAnswer = gcd(num1, num2).toString();
  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => runGame(gameDescription, getGameData);

export default runGcdGame;
