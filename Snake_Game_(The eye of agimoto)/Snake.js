class Snake{
  constructor(){
    this.len=1;
    this.body=[];
    this.body[0]=createVector(0,0)
    //this.body[0]=createVector(random(0,15),random(0,50));
    this.xdir=0;
    this.ydir=0;
  }
  
  setDir(x,y){
    this.xdir=x;
    this.ydir=y;
  }
  
  
  
  update(){
   let head =this.body[this.body.length-1].copy();
    this.body.shift();
    head.x+=this.xdir;
    head.y+=this.ydir;
    this.body.push(head);
    
  }
  grow(){
    let head =this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
     
    
    
  }
  
  endGame(){
    
     let x=  this.body[this.body.length-1].x;
    let y=  this.body[this.body.length-1].y;
     if(x>w-1|| x<0 || y>h-1 || y<0 ){
      return true;
    }
    for (let i=0;i<this.body.length-1;i++){
      if((this.body[i].x==x && this.body[i].y==y) )
         {
        fill(5*i,10+i,10*i);
        return  true;
      }
    }
   return false;
  }
  eat(pos){
    let x=  this.body[this.body.length-1].x;
    let y=  this.body[this.body.length-1].y;
    if( x== pos.x && y == pos.y){
      //print("food eat") was used for verifying whether the food was missing after the snake eats
      this.grow();
      return true;
    }else{
      return false;
    }
  }
  show(){
    for (let i=0;i<this.body.length;i++){
    fill(20*i,20*i,i);
    rect(this.body[i].x,this.body[i].y,1,1); 
     //circle(this.body[i].x,this.body[i],1)
    }
    
  }
}