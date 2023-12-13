//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let x = 50,
  y = 50,
  speedX = 3,
  speedY = 3;
bounceCount = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function drawBall() {
  let randomColor = color(random(255), random(255), random(255));
  circle(x, y, 50);

  if (x < 25) {
    speedX = 3;
    fill(randomColor);
    bounceCount++;
  } else if (x > width - 25) {
    speedX = -3;
    fill(randomColor);
    bounceCount++;
  }
  if (y < 25) {
    speedY = 3;
    fill(randomColor);
    bounceCount++;
  } else if (y > height - 25) {
    speedY = -3;
    fill(randomColor);
    bounceCount++;
  }
}

function draw() {
  background(0);
  drawBall();
  textSize(30);
  textAlign(CENTER, CENTER);
  text("Bounces: " + bounceCount, width / 2, height / 2);

  x + 2;
  y + 2;
  x += speedX;
  y += speedY;
}
