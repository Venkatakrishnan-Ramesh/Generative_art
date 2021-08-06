// Venkatakrishnan.R  6/8/21
// Inspired by Daniel Shiffman

import java.lang.Object;
import java.util.Random;
Random generator;

public void settings() {
  size(600, 400);
}
void setup() {
  generator = new Random();
  background(0);
}
void draw() {
//Asking for a Gaussian random number.Note nextGaussian() returns a double and
//must be converted to float.)
// Type casting 
float num = (float) generator.nextGaussian();
float sd = random(0,250);
float mean = random(0,250);
//Multiply by the standard deviation and add the mean.
float x = sd * num + mean;
stroke(255,10);
fill(random(0,255),random(0,255),random(0,255));
// fix your own y coordinate for the color pallete
ellipse(x,mouseY,10,10);
 if(mousePressed==true){
 // to refresh the screen click on the mouse
   background(0);
}
}
