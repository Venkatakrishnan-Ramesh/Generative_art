let classifier;
let label;
function modelReady() {
    textSize(42) 
    fill(0,200,0); 
    text("Image Classification using Mobilenet",50,50);     
fill(150,2,250);  
textSize(24)    
text("Model is ready",10,100);  
text("Model is predicting...",10,120);  
fill(150,2,250);
console.log("Model is ready");
console.log();
classifier.predict(lion, gotResults);
}
function gotResults(error, results) {
if (error) {
    console.error(error);
} else {
    console.log(results);
    label =results[0].label;
    console.log("label",label);
    textSize(32);
    text("Predicted outcome is ",10,160);  
    fill(0,200,195);
    textSize(48);
    text(label,10,200);
    
}
}
function setup() {
    
    lion = createCapture(VIDEO);
    createCanvas(1000, 250);
    background(0)
    
    classifier = ml5.imageClassifier('MobileNet', modelReady);
}
function draw() {
    VIDEO(lion,0,0,770, 517);
}

