var scenarioSettings = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
var cameraSettings = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
var lightSettings = new THREE.SpotLight(new THREE.Color(0xFFFFFF));

// Configure the render property.
renderer.setSize(window.innerWidth, 900);
renderer.setClearColor(new THREE.Color(0xEEEEEE));
renderer.shadowMapEnabled = true;
document.getElementById('view').appendChild(renderer.domElement);

// Defined light on elements and added to scenario.
lightSettings.position.set(-20, 60, -10);
lightSettings.castShadow = true;
scenarioSettings.add(lightSettings);

// Started animations and render settings.
function render() {
    requestAnimationFrame(render);
    renderer.render(scenarioSettings, cameraSettings);
}