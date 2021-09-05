// inspired from Coding Train challenge 
// Daniel Sniffman
var tree;
function setup() {
  
 createCanvas(600,600);
   background(0);
  

  let button = createButton('Random Fill');
  button.position(0, 30);
  
  let remove = createButton('Remove Node');
  remove.position(0, 90);

   let box = createInput();
  box.attribute('type', 'number');
  box.position(0, 0);
  box.attribute('placeholder', "Write Node Value");
  
  
  let addbutton = createButton('Add Node');
  addbutton.position(0, 60);
tree=new Tree();
addbutton.mousePressed(() => {
  background(0);
  let val = parseInt(box.value());
  tree.addValue(val);
  box.value(null);
  tree.traverse();
  })
 remove.mousePressed(() => {
   background(0);
    let val = parseInt(box.value());
    if (val) tree.remove(val);
    box.value(null);
   tree.traverse();
  })

  button.mousePressed(() => {
 background(0)
    tree = new Tree();
  for (var i = 0; i < 7; i++) {
    tree.addValue(floor(random(0, 100))); 
  }
tree.traverse();
  })

   let box21 = createInput();
  box21.attribute('type', 'number');
  box21.position(500, 0);
  box21.style('width', '100px');
  box21.attribute('placeholder', "Search Node");
  let button2 = createButton('Search');
  button2.position(width - 60, 30);
  button2.mousePressed(() => {
   // background(0);
     tree.unColor();
    tree.traverse();
   
    let val = parseInt(box21.value());
   // if (val && tree.root) {
      found = (tree.root.search(val));
      if (found) {
        found.green = true;
      }
   // }
    
  })
let button3 = createButton('clear');
    button3.mousePressed(() => {
    background(0);
      noLoop()
     
  })
}

function draw() {
  textStyle(BOLDITALIC);
  textSize(45);
 textAlign(CENTER);
  strokeJoin(MITER);
  fill(125,25,22)
 text("--Vk", 500, 550);
 
}

