var gameStatus = {
  points: 0,
  lose: false,
  paused: false
};

function loseGame() {
  gameStatus.lose = true;
  document.getElementById('lose').className += ' show';
}

function restartGame() {
  gameStatus.lose = false;
  document.getElementById('lose').className = 'message';
  destroySnake();
  snakeProperty = new SNAKE();
  Snake = initSnake();
}

function pauseGame() {
  document.getElementById('pause').className += ' show';
  gameStatus.paused = true;
}

function resumeGame() {
  document.getElementById('pause').className = 'message';
  gameStatus.paused = false;
}