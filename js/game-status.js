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
  destroyFood();
  gameStatus = new GAMESTATUS();
  drawPoint();
  document.getElementById('lose').className = 'message';
  destroySnake();
  snakeProperty = new SNAKE();
  foodSetting = new FOOD();
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

function gainPoint() {
  gameStatus.points += 1;
  drawPoint();
}

function drawPoint() {
  document.getElementById('game-points').innerHTML = gameStatus.points;
}