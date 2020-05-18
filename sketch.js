var bug,score=0,snake,trajectory=[],bodycreate=[],snakeimg,paste=0,decoy,prevwidth=10;
var b1;
var gameState="PLAY";

function preload(){
  snakeimg=loadImage("square.png");
}

function setup() {
  createCanvas(400, 400);
  bug=createSprite(60,200,10,10);
  snake=createSprite(350,200,20,10);
  snake.shapeColor='black';
  snake.addImage(snakeimg);
  bug.shapeColor='red';

  b1=createSprite(snake.x,snake.y,10,10);
  b1.shapeColor='black';
  

}

function draw() {
  background('grey');
  b1.x=snake.x;
  b1.y=snake.y;

  edges=createEdgeSprites();
  if(gameState==="PLAY"){
    var bodycreate=[snake.x, snake.y];
    trajectory.push(bodycreate);


  if(frameCount%100===0){
    bug.x=random(20, 380);
    bug.y=random(20, 380);
  }
  //console.log(frameCount%100)
  
  if(keyDown(UP_ARROW))
  {
    snake.y=snake.y-20;
    if(width!=10){
      b1.width=10;
      b1.height=prevwidth;
    }


  }
  
  if(keyDown(DOWN_ARROW))
  {
    snake.y=snake.y+20;
    if(width!=10){
      b1.width=10;
      b1.height=prevwidth;
    }

  }
  if(keyDown(LEFT_ARROW))
  {
    snake.x=snake.x-20;
    if(width!=10){
      b1.width=prevwidth;
      b1.height=10;
    }

  }
  
  if(keyDown(RIGHT_ARROW))
  {
    snake.x=snake.x+20;
    if(width!=10){
      b1.width=prevwidth;
      b1.height=10;
    }
  }

  if(snake.isTouching(edges) || b1.isTouching(edges)){
    gameState="END"
  }
  fill('black');
  text('score:'+score, 200, 200);

  if(snake.isTouching(bug)){
    paste=1
    score=score+1;
    prevwidth=b1.width=b1.width+10;
    b1.x=b1.x+10;

    bug.x=random(20, 380);
    bug.y=random(20, 380);
  }

  


  drawSprites();
  
  }
  if(gameState==="END"){
    background("red");
    fill("skyblue")
    textSize(40);
    textFont("courier new")
    text("GAME OVER !!! ",50,220);
  }
  
}

