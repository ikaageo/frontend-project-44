import runGame from '../index.js';

const getRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getGameData = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculate(num1, num2, operator).toString();
  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

const runCalcGame = () => runGame(gameDescription, getGameData);

export default runCalcGame;
