import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomLength = () => Math.floor(Math.random() * 6) + 5; // от 5 до 10

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getGameData = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const length = getRandomLength();
  const progression = generateProgression(start, step, length);
  
  const hiddenIndex = Math.floor(Math.random() * length);
  const correctAnswer = progression[hiddenIndex].toString();
  
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  
  return { question, correctAnswer };
};

const gameDescription = 'What number is missing in the progression?';

const runProgressionGame = () => runGame(gameDescription, getGameData);

export default runProgressionGame;
