const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    log2= new Log(810,180,PI/2,300)
    ground = new Ground(width/2,height,width,20)
    log1= new Log(810,260,PI/2,300)
    pigo1= new Pigo(810,350)
    log3= new Log(770,120,PI/7,150)
    log4= new Log(850,120,-PI/7,150)
    box5= new Box(810,160,70,70)
    pigo2= new Pigo(810,220)
    birdo1= new Birdo(515,361)
    
}

function draw(){
    background(0);                                                                      
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    pigo1.display();
    birdo1.display();
    box3.display();
    log2.display();
    box4.display();
    log3.display();
    log4.display();
    box5.display();
    pigo2.display();
    ground.display();
}