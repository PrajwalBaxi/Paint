
function setup (){
  createCanvas(500,500);
  box = createSprite(10,10,20,20);
  box.shapeColor="red";
   box2 = createSprite(50,10,20,20);
  box2.shapeColor="blue";
  box3 = createSprite(90,10,20,20);
  box3.shapeColor="black";
  
}

function draw(){
//background(200);
text("Press r to choose red color,b for black and space bar for blue , Press the key and drag your \n mouse slowly for better output",10,390);
text.velocityX=1;
box.display();
box2.display();
box3.display();
}

function mouseDragged(){
 if(keyIsDown(82)){
    fill("red");
    stroke('red');
    strokeWeight(4);
    rect(mouseX,mouseY , 5, 5);
    
 }
 if(keyIsDown(66)){
  stroke('black');
strokeWeight(4);
fill("black");
  rect(mouseX,mouseY , 5, 5);
}
if(keyIsDown(32)){
  fill("blue");
  stroke('blue');
  strokeWeight(4);
  rect(mouseX,mouseY , 5, 5);
}
}
