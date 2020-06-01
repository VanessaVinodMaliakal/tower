const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,constraint;
var block,shooter,ground;

function setup(){

    var canvas = createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

    block = new Block(300,200,30,30)

    block1 = new Block(550,325,30,30)
    block2= new Block(535,325,30,30)
    block3 = new Block(510,325,30,30)
    block4 = new Block(575,325,30,30)
    block5 = new Block(600,325,30,30)
    block6 = new Block(615,325,30,30)
    block7 = new Block(485,325,30,30)

    block8 = new Block(590,310,30,30)
    block9= new Block(540,310,30,30)
    block10 = new Block(500,310,30,30)
    block11 = new Block(570,310,30,30)
    block12 = new Block(595,310,30,30)
    block13 = new Block(600,310,30,30)
    
    block14= new Block(540,295,30,30)
    block15 = new Block(500,295,30,30)
    block16= new Block(570,295,30,30)
    block17= new Block(595,295,30,30)
    block18 = new Block(600,295,30,30)


   slingshot = new SlingShot(block.block,{x:120,y:50});
   
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(550,350,250,20,ground_options);
    World.add(world,ground)

}

function draw(){

    background(0);

    Engine.update(engine);
    block.display()

    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()

    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()

    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()

    slingshot.display()
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,250,20)
}

function mouseDragged(){
    Matter.Body.setPosition(block.block,{x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

