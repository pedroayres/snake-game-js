var groundSettings = {
	width: 60,
	height: 60,
	color: 0xE8EAF6
};

var groundTHREE = new THREE.Mesh(
	new THREE.PlaneGeometry(60, 60), 
	new THREE.MeshLambertMaterial({ color: 0xE8EAF6 }));

groundTHREE.rotation.x = -0.5 * Math.PI;
groundTHREE.receiveShadow = true;
scenarioSettings.add(groundTHREE);
