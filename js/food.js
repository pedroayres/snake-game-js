function FOOD() {
  this.size = 4;
  this.x = 24 //randomPosition(-snakeProperty.xMax, snakeProperty.xMax);
  this.y = 0;
  this.z = 24 //randomPosition(-snakeProperty.zMax, snakeProperty.zMax);
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

function randomPosition(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function destroyFood() {
  scenarioSettings.remove(food);
}