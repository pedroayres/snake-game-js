// Define snake body property
function SNAKE() {
    this.size = 3;
    this.textureHead = 'images/snake_skin_1.jpg';
    this.textureBody = 'images/snake_skin_3.jpg';
    this.z = 5;
    this.y = 0;
    this.moviments = ['right', 'left', 'up', 'down'];
    this.xMax = groundSettings.width / 2;
    this.zMax = groundSettings.height / 2;
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

// Start the snake with a body of three spheres.
function initSnake() {
    var Snake = [];
    var head = true;
    for(var i = 0; i < 3; i++) {
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
        if(Snake[0].position.x < (snakeProperty.xMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.x += snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[0];
        } else {
            loseGame();
        }
    }
}

function moveSnakeToLeft() {
    if(!gameStatus.paused && !gameStatus.lose && Snake[0].lastMoviment !== snakeProperty.moviments[0]) { 
        if(-Snake[0].position.x < (snakeProperty.xMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.x -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[1];
        } else {
            loseGame();
        }
    }
    console.log(Snake[0].position.x) 
}

function moveSnakeToUp() {
    if(!gameStatus.paused && !gameStatus.lose  && Snake[0].lastMoviment !== snakeProperty.moviments[3]) { 
        if(-Snake[0].position.z < (snakeProperty.zMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.z -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[2];
        } else {
            loseGame();
        }
    }
}

function moveSnakeToDown() {
    if(!gameStatus.paused && !gameStatus.lose  && Snake[0].lastMoviment !== snakeProperty.moviments[2]) { 
        if(Snake[0].position.z < (snakeProperty.zMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.z += snakeProperty.size * 2;  
            Snake[0].lastMoviment = snakeProperty.moviments[3];
        } else {
            loseGame();
        }
    }
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