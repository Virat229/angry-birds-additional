const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
var backgroundImage;
var stone1;
function preload(){
    backgroundImage = loadImage("sprites/back.png");
}

function setup(){
   var canvas = createCanvas(1300,600);
   engine = Engine.create();
    world = engine.world;
    ground1 = new Ground(650,480,1300,20);
   stone1 = new Stone(200,100,400,400);

    
  

}

function draw(){
    background(backgroundImage);
    //console.log(ground.body.position.y);
    Engine.update(engine);
    console.log(stone1.body.position.x);
    ground1.display();
    stone1.display();
   // DrawSprites();

}