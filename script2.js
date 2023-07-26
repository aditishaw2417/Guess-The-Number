'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number';
// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.guess').value = 13));

let number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highscore = 0;
const displayNum = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const val = Number(document.querySelector('.guess').value);
  console.log(val);
  if (!val) {
    displayNum('No number entered!');
  } else if (val === number) {
    displayNum('Correct Guess!');
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30 rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (val !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        val > number ? 'Too high!' : 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
