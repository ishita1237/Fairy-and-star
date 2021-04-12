var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(600, 500);

	// fairyVoice.play();

	fairy = createSprite(130, 350);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.15;

	star = createSprite(350,30);
	star.addImage(starImg);
	star.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(350 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if (star.y>470 && starBody.position.y>470)
  {
	  Matter.Body.setStatic(starBody,true);
  }
  drawSprites();

}

function keyPressed() {
	if (keyCode === LEFT_ARROW)
	{
		fairy.x=fairy.x-20;
	}
	if (keyCode === RIGHT_ARROW)
	{
		fairy.x=fairy.x+20;
	}
	if (keyCode === DOWN_ARROW)
	{
	 Matter.Body.setStatic(starBody,false);
	}
}

