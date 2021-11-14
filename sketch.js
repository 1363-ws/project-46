var backImg,playerImg,monsterImg;
var player,back,edges,stone,stoneImg

function preload(){
backImg= loadImage("Images/background.jpg");
monsterImg= loadImage("Images/monster.png");
playerImg= loadAnimation("Images/player1.png","Images/player2.png");
stoneImg = loadImage("Images/stone.png")
}

function setup() {
  createCanvas(1500,750);
  back=createSprite(0,0,1500,750);
  back.addImage(backImg);
 back.scale = 2.0;

 player=createSprite(105,650,10,20);
  player.addAnimation("run",playerImg);
  player.scale = 1.0 

  edges=createEdgeSprites()
}
  

function draw() {
  background(0,0,0);  

back.velocityX= -2

if(back.x<0){
  back.x=back.width/2;
}

if(keyDown("space") ) {
player.velocityY = -10;

}

player.velocityY = player.velocityY+1.0;

player.collide(edges[3])
spawnObstacles()
  drawSprites();
}
function spawnObstacles (){
if(frameCount % 300 === 0) {

  stone =createSprite(1400,700);
stone.velocityX = -3
stone.addImage(stoneImg)
stone.scale=0.5;

}

}