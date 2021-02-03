const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var superHero,superHeroImage;
var backgropund,bgImage;
var monster,monsterImage;

function preload() {
//preload the images here
bgImage=loadImage("images/,GamingBackgroundImage.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here

  ground=new Ground(1500,400,3000,20);
  superHero=new Superhero(300,400,10,10);
  









}

function draw() {
  background("bgImage");

}

