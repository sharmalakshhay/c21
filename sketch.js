
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var ball_options = {
		isStatic:false,
		restitution: 0.95,
		friction:0,
		density:1.2
	  }
	

	//Create the Bodies Here.
    groundObj.display();	
    groundObj=new group(width/2,670,width,20);
	leftside = new group(1100,600,20,120);
	rightside = new group(1100,600,20,120);
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



