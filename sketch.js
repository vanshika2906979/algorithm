var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(400,200,50,80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
//  movingRect.debug = true;
  movingRect = createSprite(200,200,80,30);
  movingRect.shapeColor = "green"
  
}

function draw() {
  background("black");  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x <fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y <fixedRect.width/2 + movingRect.width/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }



  drawSprites();
}