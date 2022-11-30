import readlineSync from 'readline-sync';

const gameCondition = () => {
  const a = getRandomNumber(1, 25);
  const b = getRandomNumber(1, 25);
  let askQuestion = '';
  let correctAnswer = 0;
  const randomSign = getRandomNumber(1, 3);
  if (randomSign === 1) {
    askQuestion = `${a} + ${b}`;
    correctAnswer = a + b;
  }
  if (randomSign === 2) {
    askQuestion = `${a} - ${b}`;
    correctAnswer = a - b;
  }
  if (randomSign === 3) {
    askQuestion = `${a} * ${b}`;
    correctAnswer = a * b;
  }
  return [askQuestion, String(correctAnswer)];
};

////////// перемеенные для игры 

const getRandomNumber = (begin, end) => {
  const randomNum = Math.floor(Math.random() * end + begin);
  return randomNum;
};

// console.log(gameCondition()); // отладка

const gamelogic = (rules, gameCondition) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`${rules}`);

  let counter = 0;
  while (counter < 3) {
    const [askQuestion, correctAnswer] = gameCondition();
    console.log(`Question: ${askQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      counter += 1;
    } else if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (counter === 3) console.log(`Congratulations, ${userName}!`);
};


console.log(gamelogic('What is the result of the expression?', gameCondition));
