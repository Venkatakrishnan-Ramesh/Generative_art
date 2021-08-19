let snake;
let rez=20;
let food;
let h;
let w;

let font;
function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}
function setup() {
  createCanvas(400, 400);
  w=floor(width/rez);
  h=floor(height/rez);
  snake = new Snake();
  foodlocation();
  fill(0)
 text('VK', 250, 300, 150, 80);
  
  frameRate(7);
}

function foodlocation(){
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x,y);
  fill(25*x,10+y,y);
  
  
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    snake.setDir(0,-1);
  } else if (keyCode == DOWN_ARROW) {
    snake.setDir(0,1);
  } else if (keyCode == LEFT_ARROW) {
    snake.setDir(-1,0);
  } else if (keyCode == RIGHT_ARROW) {
    snake.setDir(1,0);
  }else if (key == ' ') {
    snake.grow();

}
}
function draw() {
  smooth();
 //strokeWeight(12.0);
  strokeJoin(ROUND);
  strokeCap(ROUND);
  scale(rez);
   background(220);
  snake.update();
  snake.show();
 
  
  if(snake.endGame()){
    clear();
    let rez=1;
    createCanvas(400, 400);
  w=floor(width/rez);
  h=floor(height/rez);
    print("END GAME")
    background(0);
    text('Game by--', 240, 315, 150, 80);
    textSize(32);
    let s = 'GAME OVER'            
    fill(255);
    
    textAlign(CENTER, TOP);
text('VK', 250, 300, 150, 80);
     var points = font.textToPoints(s, 50, 200, 50, {
    sampleFactor: 0.75
  });
    for (var i = 0; i < points.length; i++) {
    var pt = points[i];
       stroke(random(200,255),random(150,255),random(130,255));
     strokeWeight(1.5);
     point(pt.x, pt.y);
    }
    fill(0)
    noLoop();
 }
  
   function mousePressed(){
    snake.grow();
  }
  
  if (snake.eat(food)){
    foodlocation();
  }
   
  
  rectMode("CENTRE")
  ellipse(food.x,food.y, 3,1);
  //rect(food.x,food.y,1,1);
// stroke('purple');
  stroke(random(150,200),random(150,200),0)
  //stroke(15,10,1,100)
point(food.x,food.y);
  noStroke();
}
