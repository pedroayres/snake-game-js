// Define snake body property
function SNAKE() {
    this.size = 3;
    this.bodySize = 5;
    this.textureHead = 'images/snake_skin_1.jpg';
    this.textureBody = 'images/snake_skin_3.jpg';
    this.z = 6;
    this.y = 2;
    this.moviments = ['right', 'left', 'up', 'down'];
    this.xMax = (groundSettings.width / 2) - this.size;
    this.zMax = (groundSettings.height / 2) - this.size;
    this.lastMoviment = this.moviments[1];
}

var snakeProperty = new SNAKE();

// Create a method to render each sphere of snake body.
function createSnakeBody(x, y, z, head) {
    var snakeBodyGeo = new THREE.SphereGeometry(snakeProperty.size, 20,10);
    var snakeBodyMat = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(head ? snakeProperty.textureHead : snakeProperty.textureBody)});
    var snakeBody = new THREE.Mesh(snakeBodyGeo, snakeBodyMat);
    snakeBody.position.set(x, y, z);
    snakeBody.castShadow = true;
    scenarioSettings.add(snakeBody);
    return snakeBody;
}

// Create a snake with length based on bodySize.
function initSnake() {
    var Snake = [];
    var head = true;
    for(var i = 0; i < snakeProperty.bodySize; i++) {
        Snake.push(createSnakeBody( (snakeProperty.size * 2) * i, snakeProperty.y, snakeProperty.z, head));
        head = false;
    }
    Snake[0].lastMoviment = snakeProperty.moviments[1];
    return Snake;  
}

function destroySnake() {
    Snake.forEach(function(body){
        scenarioSettings.remove(body);
    });
}

// Methos to move the snake
function moveAllSnake() {
    for(var inc = Snake.length - 1; inc >= 1; inc--) {
        Snake[inc].position.z = Snake[inc - 1].position.z;
        Snake[inc].position.x = Snake[inc - 1].position.x;
    }
}

function moveSnakeToRight() {
    if(!gameStatus.paused && !gameStatus.lose && Snake[0].lastMoviment !== snakeProperty.moviments[1]) {
        if(Snake[0].position.x < snakeProperty.xMax) {
            moveAllSnake();
            Snake[0].position.x += snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[0];
        } else {
            loseGame();
        }
        eatFood();
        checkIfEatYourself();
    }
}

function moveSnakeToLeft() {
    if(!gameStatus.paused && !gameStatus.lose && Snake[0].lastMoviment !== snakeProperty.moviments[0]) { 
        if(-Snake[0].position.x < snakeProperty.xMax) {
            moveAllSnake();
            Snake[0].position.x -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[1];
        } else {
            loseGame();
        }
        eatFood();
        checkIfEatYourself();
    }
}

function moveSnakeToUp() {
    if(!gameStatus.paused && !gameStatus.lose  && Snake[0].lastMoviment !== snakeProperty.moviments[3]) { 
        if(-Snake[0].position.z < snakeProperty.zMax) {
            moveAllSnake();
            Snake[0].position.z -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[2];
        } else {
            loseGame();
        }
        eatFood();
        checkIfEatYourself();
    }
}

function moveSnakeToDown() {
    if(!gameStatus.paused && !gameStatus.lose  && Snake[0].lastMoviment !== snakeProperty.moviments[2]) { 
        if(Snake[0].position.z < snakeProperty.zMax) {
            moveAllSnake();
            Snake[0].position.z += snakeProperty.size * 2;  
            Snake[0].lastMoviment = snakeProperty.moviments[3];
        } else {
            loseGame();
        }
        eatFood();
        checkIfEatYourself();
    }
}

function eatFood() {
    if(Snake[0].position.x === food.position.x && Snake[0].position.z === food.position.z){
        var tmpSnake = Snake[Snake.length -1].position;
        var newSnake = createSnakeBody(tmpSnake.x + 4, tmpSnake.y, tmpSnake.z);
        Snake.push(newSnake);
        gainPoint();
    }       
}

function checkIfEatYourself() {
    Snake.forEach(function(body, index){
        if(index > 0 && Snake[0].position.x === body.position.x && Snake[0].position.z === body.position.z) {
            loseGame();
        }
    });
}

function autoMoveSnake(speed) {
    setTimeout(function() {
        if(!gameStatus.paused && !gameStatus.lose){
            if(Snake[0].lastMoviment === snakeProperty.moviments[0]) {
                moveSnakeToRight()
            } else if(Snake[0].lastMoviment === snakeProperty.moviments[1]) {
                moveSnakeToLeft();
            } else if(Snake[0].lastMoviment === snakeProperty.moviments[2]) {
                moveSnakeToUp();
            } else {
                moveSnakeToDown();
            }
        }
        autoMoveSnake(speed);
    }, speed);
}

var Snake = initSnake();