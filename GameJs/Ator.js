class Persona {
  construtor(xAtor, yAtor, vida) {
    this.xAtor = xAtor;
    this.yAtor = yAtor;
    this.vida = vida;
  }
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
    if (xAtor <= 1140) {
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
  death() {
    xAtor = 200;
    yAtor = 610;
    vida = 5;
    pulo = false;
    pico = false;
  }
}

//VARIAVEIS ATRELADAS AO PROTAGONISTA
var xAtor = 200;
var yAtor = 610;
let vida = 5;
let pulo = false;
let pico = false;
var andouLeft = false;
var andouRight = true;
let imgAtor;

function protagonista() {
  var prota = new Persona(xAtor, yAtor, vida);
  if (andouRight == true) {
    imgAtor = imgRight;
  }
  if (andouLeft == true) {
    imgAtor = imgLeft;
  }
  prota.mostraVida();
  if (!keyIsDown(65) && !keyIsDown(68)) {
    prota.mostraAtor();
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
      prota.queda();
    } else {
      prota.jump();
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
