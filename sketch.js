var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createOrange();
  createRed();
  

  drawSprites();
  
}
function createApples(){
  apple=createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg)
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;
}
function createOrange(){
  OrangeL=createSprite(random(50,350),40,10,10);
  OrangeL.addImage(orangeImg)
  OrangeL.scale=0.08;
  OrangeL.velocityY=3;
  OrangeL.lifetime=150;
}
function createRed(){
  redL=createSprite(random(50,350),40,10,10);
  redL.addImage(redImg)
  redL.scale=0.06;
  redL.velocityY=3;
  redL.lifetime=150;
}
var select_Sprites = Math.round(random(1,3));

if (framecount % 80 == 0){
  if (select_Sprites == 1) {
    createApples();
  } else if (select_Sprites == 2){
    createOrange();
  } else {
    createRed();
  }
}