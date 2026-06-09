import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const getGameData = () => {
  const randomNumber = getRandomNumber();
  const question = randomNumber.toString();
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => runGame(gameDescription, getGameData);

export default runPrimeGame;
