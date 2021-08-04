var pos;
var prev;
function setup() {
  createCanvas(400, 400);
  pos=createVector(width/2,height/2);
  prev = pos.copy();
  background(0);
}

function draw() {
  stroke(random(0, 200), random(0, 240), random(0, 250));
  strokeWeight(random(0,2));
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);
 var step = p5.Vector.random2D();
var r = random(100);
  if (r < 1.5) {
    step.mult(random(25, 100));
  } else {
    step.setMag(1);
  }
 pos.add(step);
}