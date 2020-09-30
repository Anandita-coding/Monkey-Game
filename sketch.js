var monkey, monkey_running
var ground;
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(500, 500);
  monkey = createSprite(100, 333, 100, 10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.2

  ground = createSprite(500, 430, 9000000, 200);
  ground.velocityX = -81
  ground.x = ground.width / 2;



}






function draw() {
  colorMode(HSB);
  background(191, 30, 111);

  stroke("white");
  textSize(10);
  fill("white")
  text("Score :" + score, 400, 50)

  stroke("black");
  textSize(10);
  fill("black")
  survivalTime = Math.ceil(frameCount / frameRate())

  text("Survival Time: " + survivalTime, 100, 50)
  food();

   if (ground.x < 0){
      ground.x = ground.width/2;
   }



  

  monkey.collide(ground);

  if(keyDown("space")){
    monkey.velocityY = -20;
  }  

  monkey.velocityY = monkey.velocityY+0.8

  obstacles();
  drawSprites();
}

function obstacles() {

  if (frameCount % 100 === 0) {
    var obstacle = createSprite(500, 280, 10, 10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.3
    obstacle.velocityX = -10
    obstacle.liftime = 250


  }


}



function food() {

  if (frameCount % 80 === 0) {
    banana = createSprite(430, 40, 10, 10);
    banana.y = Math.round(random(100, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = Math.round(random(-7));
    banana.lifeTime = 250;














  }
}
