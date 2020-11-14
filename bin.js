class Bin {
    constructor(x,y,width,height) {
      this.image=loadImage("dustbingreen.png")
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  };