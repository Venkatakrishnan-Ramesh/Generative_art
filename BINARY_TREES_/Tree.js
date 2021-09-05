

function Tree() {
  this.root = null;
}


Tree.prototype.traverse = function() {
  this.root.visit(this.root);
}

Tree.prototype.search = function(val) {
  var found = this.root.search(val);
  return found;
}

Tree.prototype.addValue = function(val) {
  var n = new Node(val);
  if (this.root == null) {
    this.root = n;
    this.root.x=width/2;
    this.root.y=20;
  } else {
    this.root.addNode(n);
  }
}
Tree.prototype.addNodes=function(node) {
    if (node.value < this.value) {
      // go to left
      if (this.left == null) {
        this.left = node;
      } else {
        this.left.addNode(node);
      }
    } else if (node.value > this.value) {
      // go to right
      if (this.right == null) {
        this.right = node;
      } else {
        this.right.addNode(node);
      }
    }
}
Tree.prototype.remove=function(data) {
   
    this.root = this.removeNode(this.root, data);
  }
 Tree.prototype.removeNode=function(node, key) {


    if (node === null)
      return null;

    // if data to be delete is less than  
    // roots data then move to left subtree 
    else if (key < node.value) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // if data to be delete is greater than  
    // roots data then move to right subtree 
    else if (key > node.value) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // if data is similar to the root's data  
    // then delete this node 
    else {
      // deleting node with no children 
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // deleting node with one children 
      if (node.left === null) {
        node = node.right;
        return node;
      }

      else if (node.right === null) {
        node = node.left;
        return node;
      }

      // Deleting node with two children 
      // minumum node of the rigt subtree 
      // is stored in aux 
      var aux = this.findMinNode(node.right);
      node.value = aux.value;

      node.right = this.removeNode(node.right, aux.value);
      return node;
    }

  }
   Tree.prototype.findMinNode=function(node){
    if (node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }
 Tree.prototype.unColor=function() {
    if (this.left) this.left.unColor();
    this.green = null;
    if (this.right) this.right.unColor();
  }