const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;
	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
	bob1 = new Pendulum(100,300,"black");
	bob2 = new Pendulum(200,300,"black");
	bob3 = new Pendulum(300,300,"black");
	bob4 = new Pendulum(400,300,"black");
	//sling1 = new Sling(bob1.body,1);
	Engine.run(engine);

}


function draw() {
 rectMode(CENTER);
  background(225); 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  //sling1.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(penduluml.body, {x:mouseX, y:mouseY})
}

