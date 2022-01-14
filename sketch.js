var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/background.png")

balloonImg = loadAnimation("assets/41a18e025cbf3f0448e728be3c212736.png")
}

function setup(){

  createCanvas(windowWidth,windowHeight);

//background image
bg = createSprite(windowWidth/2,windowHeight/2,1,1);
bg.addImage(bgImg);
bg.scale = 4.8

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.4;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
        drawSprites();
        
}