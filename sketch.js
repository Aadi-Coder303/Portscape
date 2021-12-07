//Created By Aadi golecha on 7 September
//Through Portal game 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg,bgMusic;
var click;
var gameMode = -1;
var title,branding,next,skipSound,about, controls,alert,screenAlert;
var box_side1,box_side2,box_side3, box_side4;

var level1_block1,level1_block2;
var level2_block1, level2_block2, level2_block3;
var level3_block1, level3_block2, level3_block3, level3_block4, level3_block5;

var big,bigImg, bigJump;
var tall,tallImg, tallJump;
var small,smallImg, smallJump;
var character = "BIG";

var level = 1,passed = 0;
var retry;

var indicatorImg;

var portal, portalAni, portalMusic;

var bg1;

var level3_lock, level3_key;

function preload()
{
  //loading required images 
  title = loadImage("./assets/title.png");
  next = loadImage("./assets/next.png");
  screenAlert = loadImage("./assets/screenAlert.jpg")

  bigImg  = loadImage('./assets/big.png');
  tallImg  = loadImage('./assets/tall.png');
  smallImg  = loadImage('./assets/small.png');

  retry = loadImage('./assets/retry.png');
  indicatorImg = loadImage("./assets/indicator.png")

  //loading All the background Images
  bg = loadImage("./assets/background.png");
  bg1 = loadImage('./bg/bg1.png');
  bg2 = loadImage('./bg/bg2.png');
  bg3 = loadImage('./bg/bg3.png');
  bg4 = loadImage('./bg/bg4.png');
  bg5 = loadImage('./bg/bg5.png');
  bg6 = loadImage('./bg/bg6.png');
  bg7 = loadImage('./bg/bg7.png');
  bg8 = loadImage('./bg/bg8.png');
  bg9 = loadImage('./bg/bg9.png');
  bg10 = loadImage('./bg/bg10.png');

//loading Animation for the portal
  portalAni = loadAnimation('./assets/portal_1.png','./assets/portal_2.png','./assets/portal_3.png','./assets/portal_4.png','./assets/portal_5.png','./assets/portal_6.png','./assets/portal_7.png','./assets/portal_8.png','./assets/portal_9.png','./assets/portal_10.png');

  //loading required sounds
  skipSound = loadSound("./assets/skip.mp3");
  click = loadSound("./assets/click.wav");
  bgMusic = loadSound("./assets/bgMusic.mp3");
  portalMusic = loadSound("./assets/portal.mp3");
  bigJump = loadSound('./assets/jump1.mp3');
  tallJump = loadSound('./assets/jump3.mp3');
  smallJump = loadSound('./assets/jump2.mp3');

  
}

function setup() 
{
  //Created the canvas of size 1300,620
  createCanvas(windowWidth,windowHeight);
  
  //created engine and world
  engine = Engine.create();
  world = engine.world;

  //playing background music and 0.2 volume and running in loop
  bgMusic.play();
  bgMusic.setVolume(0.2);
  bgMusic.loop();
  
  //setting jump volume
  smallJump.setVolume(5);

  //created portal with the animation
  portal = createSprite(1150,10000);
  portal.scale = 0.4;
  portal.addAnimation('rotating_portal',portalAni);

  //created the box
  box_side1 = new Block(10,height/2,20,height);
  box_side2 = new Block(width-10,height/2,20,height);
  box_side3 = new Block(width/2,10,width,20);
  box_side4 = new Block(width/2,height-5,width,20);

  //level one objects
  level1_block1 = new Block(width/5 -20,height-10,width/3,20);
  level1_block2 = new Block(width-230,height-10,width/3,20);
 
}

function draw() 
{
  //!updated the engine
  Engine.update(engine); 

  //background
  image(bg,0,0,width, height);

  //setting each gameMode according to the need and images

  if(gameMode === -1)
  {
    console.log(width,height);
    if(width > 1280 && height > 670)
    {
      gameMode = 0;
    } else
    {
      image(screenAlert,0,0,width,height);

      if(keyCode == 32)
      {
        location.reload();
      }
    }
    //1281 – 673
  }

  if(gameMode === 0)
  {
    imageMode(CENTER);
    image(title,width/2,height/4,width/1.5,height/3);
    image(next,width/2,height/1.6,width/3.5,height/6.5);
  }


  //level one
  if(gameMode === 1)
  {
    if(level === 1)
    {
      box_side4.remove();
      box_side4 = null;
      console.log(portal.position.x,portal.position.y)

      big = Bodies.rectangle(250,500,80,100,{restitution: -100});
      World.add( world,big);
    
      tall = Bodies.rectangle(150,500,50,100,{restitution: -100});
      World.add( world,tall);
    
      small = Bodies.rectangle(80,500,50,80,{restitution: -100});
      World.add(world,small);

      level += 1;
    }
    image(bg1,0,25,width, height);
    portal.position.y = height - 100;


    if(collide(big, portal, 100)==true)
    {
      console.log("Big removed");

      World.remove(world,big);
      big = null;
    }

    if(collide(tall, portal, 100)==true)
    {
      console.log("tall removed");
      
      World.remove(world,tall);
      tall = null;
    }

    if(collide(small, portal, 100)==true)
    {
      console.log("small removed");
      
      World.remove(world,small);
      small = null;
    }

  }

  //level two
  if(gameMode === 2)
  {
    if(level === 2)
    {
      level1_block2.remove();
      level1_block2 = null;

      level1_block1.remove();
      level1_block1 = null;
    
      level2_block1 = new Block(width/4 ,height/1.1,width/2,20);
      level2_block2 = new Block(1070,height/2,width/2 ,20);
      level2_block3 = new Block(240 ,height/4.5,500,20);

      big = Bodies.rectangle(250,500,80,100,{restitution: 0});
      World.add( world,big);

      tall = Bodies.rectangle(150,500,50,100,{restitution: 0});
      World.add( world,tall);

      small = Bodies.rectangle(80,500,50,80,{restitution: 0});
      World.add(world,small);

      level += 1
    }

    if(collide(big, portal, 100)==true)
    {
      console.log("Big removed");

      World.remove(world,big);
      big = null;
    }

    if(collide(tall, portal, 100)==true)
    {
      console.log("tall removed");
      
      World.remove(world,tall);
      tall = null;
    }

    if(collide(small, portal, 100)==true)
    {
      console.log("small removed");
      
      World.remove(world,small);
      small = null;
    }

    image(bg2,0,0,width, height);
    portal.position.y = 300;
  }

  //level three
  if(gameMode === 3)
  { 
    if(level === 3)
    {
      level2_block2.remove();
      level2_block2 = null;

      level2_block1.remove();
      level2_block1 = null;
       
      level2_block3.remove();
      level2_block3 = null;
    
      level3_block1 = new Block(240 ,600,width/2,20);
      level3_block2 = new Block(1070,400,width/2 ,20);
      level3_block3 = new Block(160 ,300,300,20);
      level3_block4 = new Block(1070 ,200,width/2,20);

      level3_key = new Key(60,100,100,150);
      level3_lock = new Lock(900,200,100,200);

      big = Bodies.rectangle(250,500,80,100,{restitution: 0});
      World.add( world,big);

      tall = Bodies.rectangle(150,500,50,100,{restitution: 0});
      World.add( world,tall);

      small = Bodies.rectangle(80,500,50,80,{restitution: 0});
      World.add(world,small);

      level += 1
    }

    if(collide(big, portal, 100)==true)
    {
      console.log("Big removed");

      World.remove(world,big);
      big = null;
    }

    if(collide(tall, portal, 100)==true)
    {
      console.log("tall removed");
      
      World.remove(world,tall);
      tall = null;
    }

    if(collide(small, portal, 100)==true)
    {
      console.log("small removed");
      
      World.remove(world,small);
      small = null;
    }

    image(bg3,0,25,width, height);
    
  }

  //level four
  if(gameMode === 4)
  {
    image(bg4,0,25,width, height);
    portal.position.y = 300;
  }

  if(gameMode === 5)
  {
    image(bg5,0,25,width, height);
    portal.position.x = 600;
  }

  if(gameMode === 6)
  {
    image(bg6,0,25,width, height);
    portal.position.x = 1200;
    portal.position.y = 450;
  }

  if(gameMode === 7)
  {
    image(bg7,0,25,width, height);
    portal.position.y = 300;
  }

  if(gameMode === 8)
  {
    image(bg8,0,25,width, height);
    portal.position.y = 300;
  }

  if(gameMode === 9)
  {
    image(bg9,0,25,width, height);
  }

  if(gameMode === 10)
  {
    image(bg10,0,25,width, height);
  }


  //if any character goes under the canvas the gamever!!
  if(gameMode > 0)
  {
    indicator();

    if(big !== null && big.position.y > height+50)
    {
      gameOver() ;
    }

    if(tall !== null &&  tall.position.y > height+50)
    {
      gameOver() ;
    }

    if(small !== null && small.position.y > height+50)
    {
      gameOver() ;
    }
  }

  //showing everything
  show_();

  //changing levels
  level_changer ();
}

function mouseClicked() 
{
  if(gameMode > -1 && gameMode < 1)
  {
    gameMode += 1;
    click.play();
    click.setVolume(0.2);
  }
}

function show_()
{   
  drawSprites();
    
  if(level1_block1 != null)
  {
    level1_block1.show();
  }

  if(level1_block2 != null)
  {
    level1_block2.show();
  }

  if(level2_block1 != null)
  {
    level2_block1.show();
  }

  if(level2_block2 != null)
  {
    level2_block2.show();
  }

  if(level2_block3 != null)
  {
    level2_block3.show();
  }

  if(level3_block1 != null)
  {
    level3_block1.show();
  }

  if(level3_block2 != null)
  {
    level3_block2.show();
  }

  if(level3_block3 != null)
  {
    level3_block3.show();
  }

  if(level3_block4 != null)
  {
    level3_block4.show();
  }

  if(level3_block5 != null)
  {
    level3_block5.show();
  }

  if(level3_key != null)
  {
    level3_key.show();
  }

  if(level3_lock != null){
    level3_lock.show();
  }

    box_side1.show();
    box_side2.show();
    box_side3.show();
    if(box_side4 != null)
    {
      box_side4.show();
    }

    push();
    imageMode(CENTER);

    if(gameMode>0)
    {
        if(big !== null)
      {
        image(bigImg,big.position.x + 10, big.position.y,100,100);
      }

      if(tall !== null)
      { 
      image(tallImg,tall.position.x + 20, tall.position.y,100,100);
      }

      if(small !== null)
      {
      image(smallImg,small.position.x + 25, small.position.y + 5 ,100,100);
      }
    }

    pop();
}

function big_movement()
{
  if(character === 'BIG')
  {
    //key code 65 is A
    if(keyCode == 65)
    {
      big.position.x -= 3; 
    }

    //key code 68 is D
    if(keyCode == 68)
    {
      big.position.x += 3; 
    }

    //key code 32 is Space
    if(keyCode == 32)
    {
      console.log('try')
      Body.applyForce(big,{x:0,y:0}, {x:0,y:-0.3});
      bigJump.play();
  
    }
  }
}

function keyPressed()
{
  if(gameMode > 0)
  {
    console.log(character);
    if(big !== null)
    {
      big_movement();
      changer();
    }
    if(tall !== null)
    {
      tall_movement();
      changer();
    }
    if(small !== null)
    {
      small_movement();
      changer();
    }

  }
}

function tall_movement()
{
  if(character === 'TALL')
  {
   //key code 65 is A
   if(keyCode == 65)
    {
      tall.position.x -= 3; 
    }

   //key code 68 is D
   if(keyCode == 68)
    {
      tall.position.x += 3; 
    }

   //key code 32 is Space
   if(keyCode == 32)
    {
      Body.applyForce(tall,{x:0,y:0}, {x:0,y:-0.1});
      tallJump.play();
    }
  }
}

function small_movement()
{
  if(character === 'SMALL')
  {
    //key code 65 is A
   if(keyCode == 65)
    {
      small.position.x -= 3; 
    }

    //key code 68 is D
   if(keyCode == 68)
    {
      small.position.x += 3; 
    }

    //key code 32 is Space
    if(keyCode == 32)
    {
      Body.applyForce(small,{x:0,y:0}, {x:0,y:-0.1});
      smallJump.play();
    }
  }
}

function changer()
{
  if(keyCode == 49)
  {
    character = 'BIG';
  }

  if(keyCode == 50)
  {
    character = 'TALL';
  }

  if(keyCode == 51)
  {
    character = 'SMALL';
  }
}

function collide(body,sprite,distance)
{
  if(body!=null)
  {
    var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
    if(d<=distance)
    {
     // body.position.x =10000;
      passed += 1; 
      portalMusic.play();
      
      return true; 
    }
    else{
      return false;
    }
  }
}

function level_changer ()
{
  if(passed === 3)
  {
    gameMode += 1;
    passed = 0;
    character = 'BIG';
  }
}

function gameOver() 
{
  image(retry,0,0, width,height);
  location.reload();
}

function indicator()
{
  imageMode(CENTER);
  if(character === 'BIG' && big !== null)
  {
    image(indicatorImg,big.position.x + 5,big.position.y - 90,50,70);
  }

  if(character === 'TALL' && tall !== null)
  {
    image(indicatorImg,tall.position.x + 5,tall.position.y - 90,50,70);
  }

  if(character === 'SMALL' && small !== null)
  {
    image(indicatorImg,small.position.x + 5,small.position.y - 90,50,70);
  }
}
