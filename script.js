'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};

const check = () => {
  const guess = Number(document.querySelector('.guess').value);

  // When is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!'; put in a function 👆
    displayMessage('⛔ No number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the "guess" is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game');
      displayScore(0);
    }
  }
};

const again = () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayNumber('?');
  displayScore(score);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// click event for the "Check!" button
document.querySelector('.check').addEventListener('click', check);
// event listener to check when the Enter key is pressed
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Enter') {
    check();
  }
});

// click event for the "Again!" button
document.querySelector('.again').addEventListener('click', again);
// event listener to check when the Esc key is pressed
document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    again();
  }
});
