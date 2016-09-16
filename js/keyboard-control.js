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
      var tmpSnake = Snake[Snake.length -1].position;
      var newSnake = createSnakeBody(tmpSnake.x + 4, tmpSnake.y, tmpSnake.z);
      Snake.push(newSnake);
    }
}