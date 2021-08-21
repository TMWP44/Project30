const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,polygon,ground;
var stand1,stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23, block24, block25;
var polygon;
var slingShot;
var polygon_img;
var score;

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  createCanvas(900,400);
 
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  score = 0;
 
  ground = new Ground();
 
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275);
  block2 = new Block(330,275);
  block3 = new Block(360,275);
  block4 = new Block(390,275);
  block5 = new Block(420,275);
  block6 = new Block(450,275);
  block7 = new Block(480,275);
  
  //level two
  block8 = new Block(330,235);
  block9 = new Block(360,235);
  block10 = new Block(390,235);
  block11 = new Block(420,235);
  block12 = new Block(450,235);
  
  //level three
  block13 = new Block(360,195);
  block14 = new Block(390,195);
  block15 = new Block(420,195);
  
  //top
  block16 = new Block(390,155);

  //level one
  block17 = new Block(640,155);
  block18 = new Block(670,155);
  block19 = new Block(700,155);
  block20 = new Block(730,155);
  block21 = new Block(760,155);
  
  //level two
  block22 = new Block(670,115);
  block23 = new Block(700,115);
  block24 = new Block(730,115);
  
  //top
  block25 = new Block(700,75);


  //polygon holder with slings
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

}

function draw() {
  background(56,44,44); 
 
  //Engine.update(engine);
  
  textSize(20);
  fill("lightyellow");
  text("Drag the polygon to destroy the blocks",100,30);
  
  textSize(10);
  text("Press Space to get a second Chance to Play!!",650 ,350);
 
  noStroke();
  textSize(35);
  fill("grey");
  text("Score:" + score,650,300);

  ground.display();
 
  stand1.display();
  stand2.display();
 
  strokeWeight(2);
  stroke(15);
  
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
 
  fill("grey");
  block16.display();

  fill("skyblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
 
  fill("pink");
  block22.display();
  block23.display();
  block24.display();
 
  fill("turquoise");
  block25.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();
 
  fill("gold");
  imageMode(CENTER)
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed(){
  if (keyCode === 32){

    slingShot.attach(this.polygon);

  }

}
