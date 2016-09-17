// Define snake body property
var snakeProperty = {
    size: 3,
    textureHead: 'images/snake_skin_1.jpg',
    textureBody: 'images/snake_skin_3.jpg',
    z: 5,
    y: 0,
    moviments: ['right', 'left', 'up', 'down'],
    xMax: groundSettings.width / 2,
    zMax: groundSettings.height / 2
};

// Create a method to render each sphere of snake body.
function createSnakeBody(x, y, z, head) {
    var SphereGeo = new THREE.SphereGeometry(snakeProperty.size, 20,10);
    var SphereMat = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(head ? snakeProperty.textureHead : snakeProperty.textureBody)});
    var Sphere = new THREE.Mesh(SphereGeo, SphereMat);
    Sphere.position.set(x, y, z);
    Sphere.castShadow = true;
    scenarioSettings.add(Sphere);
    return Sphere;
}

// Start the snake with a body of three spheres.
function initSnake() {
    var Snake = [];
    var head = true;
    for(var i = 0; i < 3; i++) {
        Snake.push(createSnakeBody( (snakeProperty.size * 2) * i, snakeProperty.y, snakeProperty.z, head));
        head = false;
    }
    return Snake;  
}

// Methos to move the snake
function moveAllSnake() {
    for(var inc = Snake.length - 1; inc >= 1; inc--) {
        Snake[inc].position.z = Snake[inc - 1].position.z;
        Snake[inc].position.x = Snake[inc - 1].position.x;
    }
}

function moveSnakeToRight() {
    if(!gameStatus.paused && !gameStatus.lose) {
        if(Snake[0].position.x < (snakeProperty.xMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.x += snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[0];
        } else {
            gameStatus.lose = true;
        }
    }
}

function moveSnakeToLeft() {
    if(!gameStatus.paused && !gameStatus.lose) { 
        if(-Snake[0].position.x < (snakeProperty.xMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.x -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[1];
        } else {
            gameStatus.lose = true;
        }
    }
    console.log(Snake[0].position.x) 
}

function moveSnakeToUp() {
    if(!gameStatus.paused && !gameStatus.lose) { 
        if(-Snake[0].position.z < (snakeProperty.zMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.z -= snakeProperty.size * 2; 
            Snake[0].lastMoviment = snakeProperty.moviments[2];
        } else {
            gameStatus.lose = true;
        }
    }
}

function moveSnakeToDown() {
    if(!gameStatus.paused && !gameStatus.lose) { 
        if(Snake[0].position.z < (snakeProperty.zMax - snakeProperty.size)) {
            moveAllSnake();
            Snake[0].position.z += snakeProperty.size * 2;  
            Snake[0].lastMoviment = snakeProperty.moviments[3];
        } else {
            gameStatus.lose = true;
        }
    }
}

function autoMoveSnake(speed) {
    setTimeout(function() {
        moveSnakeToLeft()
        autoMoveSnake(speed);
    }, speed);
}

var Snake = initSnake();