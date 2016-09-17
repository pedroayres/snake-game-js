function GAMESTATUS() {
  this.points = 0;
  this.lose = false;
  this.paused = false;
}

var gameStatus = new GAMESTATUS();

function loseGame() {
  gameStatus.lose = true;
  document.getElementById('lose').className += ' show';
}

function restartGame() {
  gameStatus = new GAMESTATUS();
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