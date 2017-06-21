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

 	// Circle Object
 	function Circle(x, y, dx, dy, radius, dr) {
 		this.x = x;
 		this.y = y;
 		this.dx = dx;
 		this.dy = dy;
 		this.radius = radius;
 		this.dr = dr;

 		this.draw = function () {
 			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.strokeStyle = "red";
			c.stroke();
			c.fillStyle = "black";
			c.fill();
 		}

 		this.update = function() {
 			// test is circles have hit walls
 			if(this.x + this.radius > window.innerWidth || this.x < this.radius){
				this.dx = -this.dx;
			}
			if(this.y + this.radius > window.innerHeight || this.y < this.radius){
				this.dy = -this.dy;
			}

			// move circles across screen
			this.x += this.dx;
			this.y += this.dy;

			// //test if circles have reached max or min size
			// if(this.radius > 60) {
			// 	this.radius = 59;
			// 	this.dr = -this.dr;
			// }else if (this.radius < 0){
			// 	this.radius = 1;
			// 	this.dr = -this.dr;
			// }

			// //change circle size
			// this.radius += this.dr;

			this.draw();
 		}
 	}

 	var circleArray = [];

	for(var i = 0; i < 100; i++){
		var radius = Math.floor(Math.random() * 60);
		var dr = 1;
		var x = Math.random() * (innerWidth - radius*2) + radius;
		var y = Math.random() * (innerHeight - radius*2) + radius;
		var dx = (Math.random() - 0.5) * 8;
		var dy = (Math.random() - 0.5) * 8;
		circleArray.push(new Circle(x, y, dx, dy, radius, dr));
	}


	// Moving Circle
	function animate() {
		requestAnimationFrame(animate);
		c.clearRect(0, 0, innerWidth, innerHeight);
		for (var i = 0; i < circleArray.length; i++){
			circleArray[i].update();
		}
	}

animate();