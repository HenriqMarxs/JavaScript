//VARIAVEIS ATRELADAS AO PROTAGONISTA
let xAtor = 200;
let yAtor = 610;
let vida = 5;
let pulo = false;
let pico = false;
let andouLeft = false;
let andouRight = true;
let imgAtor = imgRight;

class Persona {
  mostraAtor() {
    image(imgAtor, xAtor, yAtor, 60, 60);
  }
  mostraVida() {
    image(imgVida, 1000, 2, 25, 27);
    fill(255, 0, 0);
    text(vida, 1050, 25);
    textAlign(CENTER);
    textSize(25);
  }
  movimentaRight() {
    image(imgAtor, xAtor, yAtor, 60, 60);
    if (xAtor <= 1090) {
      xAtor += 5;
    }
  }
  movimentaLeft() {
    image(imgAtor, xAtor, yAtor, 60, 60);
    if (xAtor >= 0) {
      xAtor -= 5;
    }
  }
  jump() {
    if (yAtor <= 450) {
      pico = true;
    }
    yAtor -= 10;
  }
  queda() {
    yAtor += 10;
    if (yAtor >= 610) {
      pico = false;
      pulo = false;
    }
  }
}

function protagonista() {

  let prota = new Persona();
  if (andouRight == true) {
    imgAtor = imgRight;
  }
  if (andouLeft == true) {
    imgAtor = imgLeft;
  }
  prota.mostraVida(vida);
  if (!keyIsDown(65) && !keyIsDown(68)) {
    prota.mostraAtor(xAtor, yAtor);
  }
  if (keyIsDown(68)) {
    imgAtor = imgRight;
    prota.movimentaRight();
    andouRight = true;
    andouLeft = false;
  }
  if (keyIsDown(65)) {
    imgAtor = imgLeft;
    prota.movimentaLeft();
    andouRight = false;
    andouLeft = true;
  }
  if (keyIsDown(32) || pulo == true) {
    pulo = true;
    if (yAtor < 610 && pico == true) {
      prota.queda(yAtor);
    } else {
      prota.jump(yAtor);
    }
  }
  if(keyIsDown(81) || arremessando == true){
    if(keyIsDown(81)){
      skillPlayer(xAtor, yAtor, true);
      arremessando = true;


    }else{
      skillPlayer(xAtor, yAtor, false);
    }
  }
}
function skillPlayer(x, y, isClicked){
  let kunai = new Kunai();
  kunai.mostraKunai()
  kunai.arremessaKunai(x+20, y+30, isClicked);
  return 0;
}

function contato(yAtor, xAtor, yAtqInimigo, xAtqInimigo){
  if (yAtqInimigo + 80 >=  yAtor&& yAtqInimigo + 40 <= yAtor + 60){
    if (xAtqInimigo >= xAtor && xAtqInimigo <= xAtor + 30) {
          return true;
        }
    }
  } 

function gameover() {
  xAtor = 200;
  yAtor = 610;
  vida = 5;
  pulo = false;
  pico = false;
  andouLeft = false;
  andouRight = true;
  xBoss = 900;
  yBoss = 480;
  vidaBoss = 10;
}
