window.addEventListener('keydown', keyboard, false);

function keyboard(event) {
    // W
    if(event.keyCode === 87) {
      moveSnakeToUp();
    }
    // A
    if(event.keyCode === 65) {
      moveSnakeToLeft();
    }

    // S
    if(event.keyCode === 83) {
      moveSnakeToDown();        
    }
    // D
    if(event.keyCode === 68) {
      moveSnakeToRight(); 
    }

    // Enter
    if(event.keyCode === 13) {
      if(!gameStatus.paused && !gameStatus.lose) {
        pauseGame();
      } else if(gameStatus.paused && !gameStatus.lose){
        resumeGame();
      } else if(!gameStatus.paused && gameStatus.lose) {
        restartGame();
      }
      // var tmpSnake = Snake[Snake.length -1].position;
      // var newSnake = createSnakeBody(tmpSnake.x + 4, tmpSnake.y, tmpSnake.z);
      // Snake.push(newSnake);
    }
}