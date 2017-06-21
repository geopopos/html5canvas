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

 	var mouse = {
 		x: undefined,
 		y: undefined
 	}

 	var maxRadius = 40;
 	// var minRadius = 2;

 	var colorArray = [
 		'#ffaa33',
 		'#99ffaa',
 		'#00ff00',
 		'#4411aa',
 		'#ff1100',
 	];

 	// Interactivity
 	// Creating an event listener
 	window.addEventListener('mousemove', 
 		function(event){
 			mouse.x = event.clientX;
 			mouse.y = event.clientY;
 		}
 	);

 	// Circle Object
 	function Circle(x, y, dx, dy, radius, color) {
 		this.x = x;
 		this.y = y;
 		this.dx = dx;
 		this.dy = dy;
 		this.radius = radius;
 		this.minRadius = radius;
 		this.color = color;

 		this.draw = function () {
 			c.beginPath();
			c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
			c.fillStyle = color;
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

			// interactivity
			if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
				if(this.radius < maxRadius){
					this.radius += 1;
				}
			} else if (this.radius > this.minRadius) {
				this.radius -= 1;
			}

			this.draw();
 		}
 	}

 	var circleArray = [];

	for(var i = 0; i < 1000; i++){
		var radius = Math.random() * 3 + 1;
		console.log(radius);
		var color = colorArray[Math.floor(Math.random() * colorArray.length)];
		var x = Math.random() * (innerWidth - radius*2) + radius;
		var y = Math.random() * (innerHeight - radius*2) + radius;
		var dx = (Math.random() - 0.5) * 2;
		var dy = (Math.random() - 0.5) * 2;
		circleArray.push(new Circle(x, y, dx, dy, radius, color));
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