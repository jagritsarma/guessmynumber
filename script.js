'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!π';
console.log(document.querySelector('.message').textContent);
*/

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //No input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!β';
    displayMessage('No number!β');
  }
  //Number bigger than 20
  else if (guess > 20) {
    // document.querySelector('.message').textContent = 'Not within rangeβ';
    displayMessage('Not within rangeβ');
  }

  //Guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Guess lower π' : 'Guess higher π';
      displayMessage(
        guess > secretNumber ? 'Guess lower π' : 'Guess higher π'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost π₯';
      displayMessage('You lost π₯');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //Number greater than the secret number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess lower π';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost π₯';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //Number smaller than the secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess higher π';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost π₯';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //When we finally guess the number
  else {
    // document.querySelector('.message').textContent = 'Correct guessπ';
    displayMessage('Correct guessπ');
    document.querySelector('body').style.backgroundColor = '#21b428fd';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
