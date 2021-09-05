
function Node(val,x,y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x=x;
  this.y=y;
}

Node.prototype.search = function(val) {
  if (this.value == val) {
    return this;
  } else if (val < this.value && this.left != null) {
    return this.left.search(val);
  } else if (val > this.value && this.right != null) {
    return this.right.search(val);
  }
  return null;
}

Node.prototype.visit = function(parent) {
  if (this.left != null) {
    this.left.visit(this);
  }
  console.log(this.value);
   fill(255,90,0);
  noStroke();
  textStyle(BOLDITALIC);
  textSize(16);
 textAlign(CENTER);
  strokeJoin(MITER);
   stroke(4);
  text(this.value, this.x, this.y);
  text(this.value, 0, 0);
   noFill();
  stroke(255);
  strokeWeight(4);
  if (this.green) fill(251,211,224);
  ellipse(this.x,this.y,40,40);
  strokeWeight(0.22);
  strokeCap(ROUND);
  line(parent.x+5,parent.y+15,this.x+20,this.y-20);
  if (this.right != null) {
    this.right.visit(this);
  }
}


Node.prototype.addNode = function(n) {
  if (n.value < this.value) {
    if (this.left == null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 80;
    } else {
      this.left.addNode(n)
     
    }
  } else if (n.value > this.value) {
    if (this.right == null) {
      this.right = n;
       this.right.x = this.x + 50;
      this.right.y = this.y + 80;
    } else {
      this.right.addNode(n);
      
    }
  }
}
