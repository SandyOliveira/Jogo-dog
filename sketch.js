var path, girls, cash, diamonds, jwellery, sword;

var gmoeda;

//Esttados de Jogo
var PLAY = 1;
var END = 0;
var gameState = 1;

var pontuacao =0;

function preload() {
  pathImg = loadImage("assets/13.png");
  girlsImg = loadAnimation("assets/g1.png","assets/g1.png","assets/g2.png","assets/g2.png");
  moedaImg = loadImage("assets/moeda.png")
}

function setup() {

  createCanvas(windowWidth, windowHeight);


  //plano de fundo se movendo

  path = createSprite(width / 2, windowHeight);
  path.addImage(pathImg);
  path.scale=0.8
  path.velocityY = 4;

  //crie o menino correndo
  girls = createSprite(width / 2, height - 20, 8, 20);
  girls.addAnimation("SahilRunning", girlsImg);
  girls.scale = 0.9;
  //girls.debug=true;
  girls.setCollider("rectangle",0,0,190,360)

  gmoeda = new Group();

}

function draw() {
 
  if (gameState === PLAY) {
    background(0);

   
    
    edges = createEdgeSprites();
    girls.collide(edges);

     if (path.y > height-300) {
      path.y = height/2;
    }

    if(girls.isTouching(gmoeda)){
      pontuacao+=1;
      girls.x +=8;
      gmoeda.destroyEach()
     
    }

    controles();
    recompensas();
  

   

    drawSprites();
    textSize(25)
    fill("red")
    text("Pontuacao: "+ pontuacao, 70,150);
 
  }

}
function controles(){
  if (keyDown("left_arrow")) {
    girls.x = girls.x - 5;
  }

  if (keyDown("right_arrow")) {
    girls.x = girls.x + 5;
  }

}

function recompensas(){
  if (frameCount % 240 === 0) {
    var moeda = createSprite(width / 2, 20);
    moeda.addImage(moedaImg);
    moeda.scale = 0.2;
    moeda.x = Math.round(random(width / 2, 400));
    moeda.velocityY = 3;
    //moeda.debug=true
    gmoeda.add(moeda)
  }

}
