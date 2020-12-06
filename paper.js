class Paper {
    constructor(x, y,radius,{options},{maxSides} ) {

      var options={
        isStatic=false,
        restitution=0.3,
        friction=0.5,
        density=1.2
        
      }
      
      Matter.Bodies.circle(x,y,radius,{options},{maxSides});
      this.width = width;
      this.height = height;
      
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      fill("white");
      circle(pos.x,pos.y, this.width, this.height);
      circleMode(CENTER);
    }
  };
  