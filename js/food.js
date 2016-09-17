function FOOD() {
  this.size = 4;
  this.x = randomPosition(-snakeProperty.xMax, snakeProperty.xMax, snakeProperty.size * 2);
  this.y = 2;
  this.z = randomPosition(-snakeProperty.zMax, snakeProperty.zMax, snakeProperty.size * 2);
  this.texture = 'images/food_skin.jpg'
}

var foodSetting = new FOOD();
var foodGeometry = new THREE.CubeGeometry(foodSetting.size, foodSetting.size, foodSetting.size);
var foodTexture = new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(foodSetting.texture)});
var food = new THREE.Mesh(foodGeometry, foodTexture);

function renderFood() {
  foodSetting = new FOOD();
  food = new THREE.Mesh(foodGeometry, foodTexture);
  food.position.set(foodSetting.x, foodSetting.y, foodSetting.z);
  food.castShadow = true;
  scenarioSettings.add(food);
}



function randomPosition(min, max, matchNumber) {
  var arr = [];
  var number = 0;
  while(number < max) {
    number += matchNumber;
    arr.push(number);
  }

  number = 0;
  while(number > min) {
    number -= matchNumber;
    arr.push(number);
  }
  var idx = Math.floor( Math.random() * arr.length );
  return arr[idx]; 
}

function destroyFood() {
  scenarioSettings.remove(food);
}