var cameraSettings = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
cameraSettings.position.x = 0;
cameraSettings.position.y = 150;
cameraSettings.position.z = 0;
cameraSettings.lookAt(scenarioSettings.position);