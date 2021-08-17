
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3;
var ball;
function setup() {
	createCanvas(800, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,610,800,10);
	ground2 = new Ground(600,545,20,120);
	ground3 = new Ground(750,545,20,120);
	
	var ball_options={
		restitution : 0.75,
		
	}
	  
	  ball=Bodies.circle(100,100,20,ball_options)
	  World.add(world,ball)
	  
	
	Engine.run(engine);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(51);
 
  ground1.show();
  ground2.show();
  ground3.show();
  ellipse(ball.position.x,ball.position.y,20)




}


function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.03})
}

}

