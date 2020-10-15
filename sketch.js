
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var box1;
var floor;
var log1;
var log2;
var log3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(100,380,70);
	
  
  log1 = new ground(510,450,20,140);
  log2 = new ground(780,450,20,140);
  log3 = new ground(645,520,285,20);
  //box1 = new bin(650,500,200,140);

	floor = new ground(400,540,800,30);

  Engine.run(engine);
  
  
}


function draw() {
  rectMode(CENTER);
  background(rgb(221,160,221));
  Engine.update(engine);

  ball.display();
  floor.display();

  log1.display();
  log2.display();
  log3.display();
  //box1.display();

  drawSprites();

 // if(ball.x<=550){
//Text("yay!you did it",200,200);
 // }
 
}
function keyPressed() {
    if(keyCode === UP_ARROW){
      Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-90});
    }
  }


