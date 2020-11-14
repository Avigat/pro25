var bar1,bar2,bar3;
var paperObject,ground,ground2,bin,binImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	binImg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 600);
	keyPressed()

	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(200,350,50);

	ground = new Ground(width/2,500,width,20);
	//ground2 = new Ground2(width/2,485,width,15);

	bar1 = new Bin2(765, 400, 20, 180);
	bar2 = new Bin2(905, 400, 20, 180);
	bar3 = new Bin2(835, 480, 160, 20)
	
	bin=createSprite(835, 400, 100, 100);
	bin.addImage(binImg);
	bin.scale=0.6;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  
  ground.display();
  //ground2.display();
  paperObject.display();
  bar1.display();
  bar2.display();
  bar3.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:110,y:-120})
	}
}