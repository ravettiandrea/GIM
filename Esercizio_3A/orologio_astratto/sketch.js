function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(RADIANS); 
    noStroke();
}

function draw() {
    background(0);

    let circleRadius = min(width, height) / 2;

    translate(width / 2, height / 2);
    rotate(-HALF_PI); 

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

    let length = circleRadius * 0.9;

    
    fill(colors.hours);
    noStroke(); 
    push();
    rotate(TAU * ((hr % 12) / 12 + mn / 720)); 
    arc(0, 0, circleRadius * 1.6, circleRadius * 1.6, 0, TAU / 2);
    pop();

    fill(colors.minutes);
    noStroke(); 
    push();
    rotate(TAU * (mn / 60));
    arc(0, 0, circleRadius * 1.2, circleRadius * 1.2, 0, TAU / 2);
    pop();

    fill(colors.seconds);
    noStroke(); 
    push();
    rotate(TAU * (sc / 60));
    arc(0, 0, circleRadius * 0.9, circleRadius * 0.9, 0, TAU / 2);
    pop();

   
    stroke(255); 
    strokeWeight(thickness.hours);
    line(0, 0, length * cos(TAU * ((hr % 12) / 12 + mn / 720)), length * sin(TAU * ((hr % 12) / 12 + mn / 720)));

    strokeWeight(thickness.minutes);
    line(0, 0, length * cos(TAU * (mn / 60)), length * sin(TAU * (mn / 60)));

    strokeWeight(thickness.seconds);
    line(0, 0, length * cos(TAU * (sc / 60)), length * sin(TAU * (sc / 60)));

    fill(255);
    circle(0, 0, 10, 10);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

