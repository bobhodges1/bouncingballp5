//This is our main javascript file constituting our p5.js sketch.
//It must be loaded from index.html
//It assumes that the file "myPalettes.js" has also been loaded

let walker

function setup() {
	createCanvas(600, 400);
	background(100);
	buildWalkerObject();
	}


function draw() {
	drawWalker();
	moveWalker()
	resetWalker();
}

function buildWalkerObject() {
	walker = {
		x: random(0,width),
		y: random(0,height),
		diameter: random(50,75),
	}
}

function drawWalker(){
	fill(random(255),random(255),random(255))
	circle(walker.x,walker.y,walker.diameter)
}

function moveWalker(){
 walker.x = walker.x + random(-10,10)
	walker.y = walker.y + random(-10,10)
	walker.diameter--
}

function resetWalker(){
	if (walker.diameter < 0){
		walker.x = random(0,width)
		walker.y = random(0,height)
		walker.diameter = random(50,75)
	}
}