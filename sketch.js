var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var boats, green, blue

var ocean, greenP_img, greenS_img, blueS_img, blueP_img;

function preload(){
  //track = loadImage("images/track.jpg");
 
  greenS_img = loadImage("images/greenS.png");
  greenP_img = loadImage("images/greenP.png");
  blueS_img = loadImage("images/blueS.png");
  blueP_img =loadImage("images/blueP.png");

 ocean =loadImage("images/ocean.png");
 //wind_img =loadImage("images/wind.png");
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
