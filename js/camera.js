var cameraSettings = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
cameraSettings.position.x = 0;
cameraSettings.position.y = 120;
cameraSettings.position.z = 70;
cameraSettings.lookAt(scenarioSettings.position);