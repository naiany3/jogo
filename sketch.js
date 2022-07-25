var Play = 1;
var End = 0;
var gameState = PLAY;

var nave;
var ground;
var score;

function preload(){
    nave = loadAnimation("nave.png");

}

function setup() {
    createCanvas(400,400);
    nave = createspite(50,height-80,20,50);
    nave.score = 0.5;

    ground = createsprite(200,height-50,400,20);
    ground.addImage("ground",gound,png);
    ground.x = ground.width /2;

    


 
}

function draw() {
    background(180);
    Text("pontos:" + score,width-100,50);
     if(gameState === PLAY){
        gameover.visible = false;
        restart.visible =  false;
        ground.velocityX = -5;
        score = score + Math.round(getFrameRate()/60);

        if(ground.x<0){
            ground.x = ground.width/4;
        }
     }
     if((touches.lengh > 0||KeyDown("space"))&&y>=height-90){
        nave.velocity = -11;
     }
       nave.velocity =nave.velocityX + 0.10;


       else if (gameState === END) {
        // console.log("hey")
          gameOver.visible = true;
          restart.visible = true;
         
          ground.velocityX = 0;
          nave.velocityY = 0}

          if(touches.length > 0 || mousePressedOver(restart)){
            console.log("reiniciar")
            reiniciar();
            touches = [];
          }
    }