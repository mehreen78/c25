const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var balls=[];

//arrays 
//  var arr=[[0,5],[1,6],[2,7]];
//  arr.pop();
//   console.log(arr);


function preload() {
  backgroundImg=loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES)
   angle=-15;

  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
 cannon= new Cannon(180,110,130,100,angle);
 cannonBall= new CannonBall(cannon.x,cannon.y)
}

function draw() {
  background(189);
  image(backgroundImg, 0 ,0 , this.width, this.height)
  Engine.update(engine);

  ground.display();
  
  tower.display();
  cannon.display();

  for(var i=0;i<balls.length;i++){
    showCannonBalls(balls[i],i)
  }
}

function keyPressed(){
  if(keyCode===DOWN_ARROW){
    var cannonBall=new CannonBall(cannon.x,cannon.y);
    balls.push(cannonBall);
  }
}
function showCannonBalls(ball , i) {
  if(ball){
    ball.display();
  }
  
}


function keyReleased(){
if(keyCode===DOWN_ARROW){
  balls[balls.length - 1].shoot();
}
}   
 