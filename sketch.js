



var cat, mouse;
var catImg, catImg2, catImg3, catImg4
var mouseImg, mouseImg2, mouseImg3, mouseImg4;


function preload() {
    backgroundImage = loadImage("images/garden.png");


    catImg = loadAnimation("images/cat1.png");
    catImg2= loadAnimation("images/cat2.png");
    catImg3 = loadAnimation( "images/cat3.png");
    catImg4 = loadAnimation( "images/cat4.png");


    mouseImg = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3= loadAnimation("images/mouse3.png");
    mouseImg4 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 cat = createSprite(870, 600);
cat.addAnimation("catSleeping", catImg);
cat.scale = 0.25;


mouse = createSprite(200, 600)
mouse.addAnimation("mouseStandong", mouseImg);
mouse.scale = 0.25;
}

function draw() {


    background(backgroundImage)
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("catLast", catImg4);
        cat.x = 300;
        cat.scale = 0.25;
        cat.changeAnimation("catLast");

        
        mouse.addAnimation("mouseEnd", mouseImg4);
        mouse.scale = 0.25;
        mouse.changeAnimation("mouseEnd");
    }

    drawSprites();
}


function keyPressed(){
if( keyCode === LEFT_ARROW){
    cat.velocityX = -5;
    cat.addAnimation("catMoving", catImg2);
    cat.changeAnimation("catMoving");
    mouse.addAnimation("mouseMoving", mouseImg2);
    mouse.changeAnimation("mouseMoving")
}
  //For moving and changing animation write code here


}
