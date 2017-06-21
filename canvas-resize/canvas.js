	var canvas = document.querySelector('canvas');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var c = canvas.getContext('2d');

	// c.fillStyle = "rgba(255, 0, 0, 0.5)";
	// c.fillRect(100, 100, 100, 100);
	// c.fillStyle = "rgba(0, 0, 255, 0.5)";
	// c.fillRect(400, 100, 100, 100);
	// c.fillStyle = "rgba(0, 255, 0, 0.5)";
	// c.fillRect(250, 400, 100, 100);

 // 	// Line
 // 	c.beginPath();
 // 	c.moveTo(150, 150);
 // 	c.lineTo(450, 150);
 // 	c.lineTo(300, 450);
 // 	c.lineTo(150, 150);
 // 	c.strokeStyle = "#fa34a3";
 // 	c.stroke();


 // 	// // Arc / Circle
 // 	// c.beginPath();
 // 	// c.arc(300, 275, 30, 0, Math.PI * 2, false);
 // 	// c.strokeStyle = "blue";
 // 	// c.stroke();

 // 	for (var i = 0; i < 100; i++) {
 // 		var x = Math.random() * window.innerWidth;
 // 		var y = Math.random() * window.innerHeight;
 // 		var red = Math.floor(Math.random() * 255);
 // 		var green = Math.floor(Math.random() * 255);
 // 		var blue = Math.floor(Math.random() * 255);

 // 		console.log("rgba("+red+","+green+","+blue+", 1)");

	//  	c.beginPath();
	//  	c.arc(x, y, 30, 0, Math.PI * 2, false);
	//  	c.strokeStyle = "rgba("+red+","+green+","+blue+", 1)";
	//  	c.stroke();
 // 	}

 // 	console.log(canvas);

 var x = 200;
 var dir = 1;
	// Moving Circle
	function animate() {
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		c.beginPath();
		c.arc(x, 200, 30, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();

		if(x + 30 > window.innerWidth){
			dir = 0;
		}else if(x < 30) {
			dir = 1
		}

		if(dir == 1) {
			x += 10;
		} else if (dir == 0) {
			x -=10;
		}
	}

animate();