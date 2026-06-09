import runGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { question, correctAnswer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => runGame(gameDescription, getGameData);

export default runEvenGame;
