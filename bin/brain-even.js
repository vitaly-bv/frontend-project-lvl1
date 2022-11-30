#!/usr/bin/env node

import readlineSync from 'readline-sync';

const gameCondition = () => { // оставляем ф-ю
  const randomNumber = getRandomNumber(1, 50);
  let askQuestion = `${randomNumber}`;
  let correctAnswer = 0;
  if (randomNumber % 2 === 0) {
    askQuestion = `${randomNumber}`;
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [askQuestion, correctAnswer];
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


console.log(gamelogic('Answer "yes" if the number is even, otherwise answer "no".', gameCondition)); 


// на экспорт логику из индекса

// export default () => {
//   gamelogic('Answer "yes" if the number is even, otherwise answer "no".', gameCondition);
// };
