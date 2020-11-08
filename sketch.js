var fixedrect, movrect;

function setup() {
  createCanvas(800,400);
 movrect = createSprite(300,200,80,50);
 movrect.shapeColor= "red";
 movrect.debug= true;
 fixedrect = createSprite(400, 200, 50, 80);
 fixedrect.shapeColor= "red";
 fixedrect.debug= true;
}

function draw() {
  background(0,0,0);  
  movrect.x= mouseX;
  movrect.y= mouseY;
  if(movrect.x - fixedrect.x <= fixedrect.width/2 + movrect.width/2
    && fixedrect.x - movrect.x <= fixedrect.width/2 + movrect.width/2
    &&movrect.y - fixedrect.y <= fixedrect.height/2 + movrect.height/2
    && fixedrect.y - movrect.y <= fixedrect.height/2 + movrect.height/2){
    movrect.shapeColor ="blue"
    fixedrect.shapeColor= "blue";
  }
  else{
    movrect.shapeColor ="red"
    fixedrect.shapeColor= "red";

  }
  drawSprites();
}