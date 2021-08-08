int rows, cols;
int scale=10;
float sc=0.1;
  int w=5000;
  int h=2000;
public void settings() {
  size(600, 600, P3D);
  mouseY=1;
}
 float[][] terrain;
 float flying;
void setup() {
  cols=w/scale;
  rows=h/scale;
  terrain=new float[cols][rows];
}
void draw() {
  flying+=0.001*(-(mouseY-100));
  println(mouseX,mouseY);
  float yoff=flying;
  for (int y=0; y<rows; y++) {
    float xoff=0;
      for (int x=0; x<cols; x++) {
       terrain[x][y]=map(noise(xoff,yoff),0,1,-200,100);
       xoff+=0.08;
    }
yoff+=0.09;
  }
  frameRate(1);
  smooth();
  strokeJoin(ROUND);
  background(0,0,75);
  translate(width/2+50,height/2-50);
 rotateX(PI/2.5);
   translate(-w/2-100,-h/2-150);
     fill(255,100,0);
     stroke (255,250,10,200);
     stroke(255,200);
     fill(255,200,100);
     strokeWeight(200);
      point(((-w/2+5000)),((-h/2-700)));
    stroke (255,250,10,10);
     strokeWeight(1); 
   sphereDetail(100);
  for (int y=0; y<rows-1; y++) {
    beginShape(QUAD_STRIP);
      for (int x=0; x<cols-1; x++) {
        vertex(x*scale, y*scale,terrain[x][y]);
        fill(255,250,10);
        vertex((x)*scale, (y+1)*scale,terrain[x][y+1]);
        fill(100,100,70);
      }
      endShape();
    }
  }
