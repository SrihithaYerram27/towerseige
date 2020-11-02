const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,sling,box;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(650,200,6,70);

  
}

function draw() {
  background("black");  
  drawSprites();

  ground.display();

  
}