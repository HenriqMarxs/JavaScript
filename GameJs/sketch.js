let imgRight;
let imgLeft;

function setup() {
  createCanvas(1150, 700);
}

function preload() {
  imgBoss = loadImage('imagens/GolemSnow.gif');
  imgSnowBall = loadImage('imagens/snowball.png');
  imgVida = loadImage('imagens/vida.png');
  imgRight = loadImage('imagens/ator-right.png');
  imgLeft = loadImage('imagens/ator-left.png');
  imgAmbiente = loadImage('imagens/ambienteboss.png');
}

function draw() {
  background(imgAmbiente);
  protagonista();
  boss1();
  if (vida <= 0) {
    gameover();
  }
}


