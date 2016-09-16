// Create a method to render each sphere of snake body.
function createSnakeBody(x, y, z) {
    var SphereGeo = new THREE.SphereGeometry(2, 20,10);
    var SphereMat = new THREE.MeshLambertMaterial({ color: 0xEEE000 });
    var Sphere = new THREE.Mesh(SphereGeo, SphereMat);
    Sphere.position.set(x, y, z);
    Sphere.castShadow = true;
    scenarioSettings.add(Sphere);
    return Sphere;
}

// Start the snake with a body of three spheres.
function initSnake() {
    var Snake = [];
    for(var i = 0; i < 3; i++) {
        Snake.push(createSnakeBody( 4 * i, 5, 0));
    }
    return Snake;  
}

function moveAllSnake() {
    for(var inc = Snake.length - 1; inc >= 1; inc--) {
        Snake[inc].position.z = Snake[inc - 1].position.z;
        Snake[inc].position.x = Snake[inc - 1].position.x;
    }
}

function moveSnakeToRight() { 
    moveAllSnake();
    Snake[0].position.x += 4; 
    Snake[0].lastMoviment = 'right'; 
}

function moveSnakeToLeft() { 
    moveAllSnake();
    Snake[0].position.x -= 4; 
    Snake[0].lastMoviment = 'left'; 
}

function moveSnakeToUp() { 
    moveAllSnake();
    Snake[0].position.z -= 4; 
    Snake[0].lastMoviment = 'up'; 
}

function moveSnakeToDown() { 
    moveAllSnake();
    Snake[0].position.z += 4;  
    Snake[0].lastMoviment = 'down'; 
}

var Snake = initSnake();