var movingrect,fixedrect;

function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(400, 200, 50, 80);
  movingrect.shapeColor="green";
  movingrect.debug=true;
  
  fixedrect=createSprite(200, 400, 80, 50);
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
}

function draw() {
  background("white");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    && movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2){
    fixedrect.shapeColor="red";
    movingrect.shapeColor="red";
  }
  else {
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
}

  drawSprites();
}