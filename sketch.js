
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;

function preload()
{
	treeImage = loadImage("sprites/tree.png")
	boy = loadImage("sprites/boy.png")
	mango = loadImage("sprites/mango.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	treeObject = new Tree(700,580,20,20)
//treeObject.addImage(treeImage)

mango1 = new Mango(1100,100,30);
mango2 = new Mango(1170,130,30);
  mango3 = new Mango(1010,140,30);
  mango4 = new Mango(1000,70,30);
  mango5 = new Mango(1100,70,30);
  mango6 = new Mango(1000,230,30);
  mango7 = new Mango(900,230,40);
  mango8 = new Mango(1140,150,40);
  mango9 = new Mango(1100,230,40);
  mango10 = new Mango(1200,200,40);
  mango11 = new Mango(1120,50,40);
  mango12 = new Mango(900,160,40);

  launcher = new Launcher(stone.body,{x:235,y:420})

  stone = new Stone (235,420,30);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 // drawSprites();
 image(treeImage,700,580)
 image(boy,700,580);
  treeObject.display();

  stone.display();
  launcher.display();
  


  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  stoneObj.display();

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcher.fly();
}

