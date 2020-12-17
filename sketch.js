var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");

}



function setup() {
  createCanvas(600, 200);
  mario = createSprite(50, 180, 20, 50);
  mario.addAnimation("running", monkey_running);
  mario.scale = 0.1;
  

  ground = createSprite(0, 190, 1200, 10);
  ground.x = ground.width / 2;
  ground.velocityX = -6;


  foodGroup = new Group();
  obstacleGroup = new Group();

  score = 0;

}


function draw() {
  background("blue");
  textSize(20);
  fill(255);
  text("Score: " + score, 500, 40);



  if (keyDown("space") && mario.y >= 139) {
    mario.velocityY = -12;
  }

  mario.velocityY = mario.velocityY + 0.8;


  mario.collide(ground);

  spawnBanana();
  spawnObstacles();


  drawSprites();

}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(80, 120));
    banana.addImage(bananaImage);
    banana.scale = 1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;

    

    //add each cloud to the group
    foodGroup.add(banana);
  }

}

function spawnObstacles() {
  if (frameCount % 60 === 0) {
    var obstacle = createSprite(600, 165, 10, 40);
    //generate random obstacles
    var rand = Math.round(random(1, 3));
    obstacle.addImage(obstacleImage);

    obstacle.velocityX = -6;

    //assign scale and lifetime to the obstacle           
    obstacle.scale = 2;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstacleGroup.add(obstacle);
  }
}