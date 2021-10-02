 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 var engine,world
 var ground
 var ball1,ball2


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world
  
  ball1=new Ball(200,200,50,50)
  ball2=new Ball(240,100,50,100)
  ground=new Ground(200,390,400,20)
 

}

function draw() {
  background("black");  
  Engine.update(engine)
  ball1.display();
  ball2.display();
  ground.display();
 
  
}