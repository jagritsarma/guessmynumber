'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!🎉';
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
    // document.querySelector('.message').textContent = 'No number!⛔';
    displayMessage('No number!⛔');
  }
  //Number bigger than 20
  else if (guess > 20) {
    // document.querySelector('.message').textContent = 'Not within range⛔';
    displayMessage('Not within range⛔');
  }

  //Guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Guess lower 🙂' : 'Guess higher 🙂';
      displayMessage(
        guess > secretNumber ? 'Guess lower 🙂' : 'Guess higher 🙂'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost 💥';
      displayMessage('You lost 💥');
      document.querySelector('.score').textContent = 0;
    }
  }
  // //Number greater than the secret number
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess lower 🙂';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //Number smaller than the secret number
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Guess higher 🙂';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  //When we finally guess the number
  else {
    // document.querySelector('.message').textContent = 'Correct guess🎉';
    displayMessage('Correct guess🎉');
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
