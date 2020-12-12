const Engine=Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var canvas,box1,box2,ground,pig1;

function setup() {
  canvas=createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(200,390,400,10);
  box1= new Box(200,300,50,50);
  box2= new Box(240,100,50,100);
  pig1=new Pig(200,200);
}

function draw() {
  background("gold");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig1.display();
  
}