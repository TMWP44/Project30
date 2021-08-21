class Block {
  
  constructor(x, y) {
      var options={
        restitution : 0.7,
        friction : 0.6,
        isStatic : false
      }

      this.image = loadImage("block.png")
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      World.add(world, this.body);
      this.visibility = 255
    }

    display() {
      var angle = this.body.angle;
     // translate(this.body.position.x, this.body.position.y);     
     // rotate(angle);

      if(this.body.speed < 6){
        imageMode(CENTER);     
        image(this.image,this.body.position.x, this.body.position.y,this.width,this.height)
      }else{        
        World.remove(world,this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255,this.visibility);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
        pop();
      }
    }

    score(){
      if(this.visibility < 0 && this.visibility > -55){
         score ++;
      }
    }
   
   }

   
