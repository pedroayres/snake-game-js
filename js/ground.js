var groundSettings = {
	width: 100,
	height: 100,
	color: 0xE8EAF6,
	texture: 'images/skin_ground_1.jpg'
};

var groundTHREE = new THREE.Mesh(
	new THREE.PlaneGeometry(groundSettings.width, groundSettings.height), 
	new THREE.MeshLambertMaterial({ map: new THREE.TextureLoader().load(groundSettings.texture)}));

groundTHREE.rotation.x = -0.5 * Math.PI;
groundTHREE.receiveShadow = true;
scenarioSettings.add(groundTHREE);
