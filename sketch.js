var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(600, 450);

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
   keyPressed();
  drawSprites();

}

function keyPressed() {
	if (keyDown("LEFT_ARROW"))
	{
		fairy.x=fairy.x-5;
	}
	if (keyDown("RIGHT_ARROW"))
	{
		fairy.x=fairy.x+5;
	}
	if (keyDown("DOWN_ARROW"))
	{
		star.x=starBody.position.x;
		star.y=starBody.position.y;
	  starBody = {isStatic:false}
	  
	}
}
