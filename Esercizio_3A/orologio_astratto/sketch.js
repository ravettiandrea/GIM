function setup() {
	createCanvas(windowWidth, windowHeight);
	angleMode(DEGREES);
	noStroke();
  }
  
  function draw() {
	background(0);
	
	let circleRadius = min(width, height) / 2;
	
	translate(width / 2, height / 2);
	rotate(-90);
  
	
	let hr = hour();
	let mn = minute();
	let sc = second();
  
	let bg = color(179, 151, 89);
	background(bg);
  
	
	for (let r = 0; r < min(width, height); r += 50) {
	  let c = color(255, 50); 
	  fill(c);
	  ellipse(0, 0, r, r);
	}
	

	let colors = {
	  hours: color(150, 75, 0, 127),
	  minutes: color(0, 0, 139, 127),
	  seconds: color(70, 130, 180, 127)
	};
  
	let thickness = {
	  hours: 5,
	  minutes: 3,
	  seconds: 1
	};
  
	let length = {
	  hours: circleRadius * 0.87, 
	  minutes: circleRadius * 0.87, 
	  seconds: circleRadius * 0.87,
	};
	
	
	noStroke();
	fill(colors.hours);
	push();
	rotate(map(hr % 12, 0, 12, 0, 360));
	arc(0, 0, circleRadius * 1.5, circleRadius * 1.5, 0, 180);
	pop();
  
	fill(colors.minutes);
	push();
	rotate(map(mn, 0, 60, 0, 360));
	arc(0, 0, circleRadius * 1.0, circleRadius * 1.0, 0, 180);
	pop();
	
	fill(colors.seconds);
	push();
	rotate(map(sc, 0, 60, 0, 360));
	arc(0, 0, circleRadius * 0.7, circleRadius * 0.7, 0, 180);
	pop();
  
	stroke(255);
	strokeWeight(thickness.hours);
	line(0, 0, length.hours * cos(map(hr % 12, 0, 12, 0, 360)), length.hours * sin(map(hr % 12, 0, 12, 0, 360)));
  
	strokeWeight(thickness.minutes);
	line(0, 0, length.minutes * cos(map(mn, 0, 60, 0, 360)), length.minutes * sin(map(mn, 0, 60, 0, 360)));
  
	strokeWeight(thickness.seconds);
	line(0, 0, length.seconds * cos(map(sc, 0, 60, 0, 360)), length.seconds * sin(map(sc, 0, 60, 0, 360)));
  
	fill(255);
	circle(0, 0, 10, 10);
  }
  
  function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
  }
  