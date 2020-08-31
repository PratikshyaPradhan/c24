const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var Pig;
var log;
var engine, world;
var box1;
var bird;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    bird = new Bird(200,300);
    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,400,20)
    log = new Log(300,100,80,PI);
    Pig = new pig(200,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log.display();
    Pig.display();
    bird.display();
}