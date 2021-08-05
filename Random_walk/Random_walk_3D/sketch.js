
//Venkatakrishnan.R 
// Random_Walk_3D
var pos; //intial vector
function setup() {
  createCanvas(600, 500,600); // 3D CANVAS
 //inbuilt command to create vector
  pos=createVector(width/2,height/2,430); 
 // 0 is the black colour 255 represents white
  background(0);
  frameRate(10000);
}

function draw() {
  //colour 
  stroke(random(0, 20), random(0, 240), random(0, 250));
  // weight of the line
  strokeWeight((random(0.25,1)));
  // random 3d vector
  var step = p5.Vector.random3D(30,20,-500);
  step.mult(100,50,20); 
  step.setMag(3);
  // vector addition
  new1=pos.add(step);
  // addition to the random vector
  fill(255)
  ellipse(new1.x,new1.y,2,1)
  step.add(random(-150, 0),-2000, random(0, 200));

  
  //pos=new1.copy();
var r = random(100);
  if (r < 40) {
    step.add(random(0, 200), random(-150, 0), random(-250,-100));
   step.mult(100,50,20); 
    
  } else {
    step.setMag(500);
  }
   console.log(pos)
    //  drawing the line
  line(point(new1.x, new1.y),new1.z,point(pos.x , pos.y),pos.z);
}