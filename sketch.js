var bg_img,mole_img,hammer_img
var hammer
var mole


function preload(){
  bg_img= loadImage("bg.jpeg")
  mole_img= loadImage("mole.png")
  hammer_img= loadImage("hammer.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  //createSprite(400, 200, 50, 50);
  
  hammer= createSprite(windowWidth/2,windowHeight/2,20,20)
  hammer.addImage("hammer",hammer_img)
  hammer.scale = 0.25

  

}

function draw() {
  background(bg_img);  
  drawSprites();

  hammer.x=mouseX
  hammer.y=mouseY
 
  spawnMoles()

}


function spawnMoles (){
  if(frameCount % 50 == 0){
    mole= createSprite(random(50,400),random(50,400),10,10)
    mole.addImage("mole", mole_img)
    mole.scale = 0.35

  }
}