class boss {
  construtor(xBoss, yBoss, vidaBoss) {
    this.xBoss = xBoss;
    this.yBoss = yBoss;
    this.vidaBoss = vidaBoss;
  }
  mostraBoss() {
    image(imgBoss, xBoss, yBoss, 200, 200);
  }

  movimentaRight() {
    xBoss += 1;
  }
  movimentaLeft() {
    xBoss -= 1;
  }
}

let xBoss = 900;
let yBoss = 480;
let vidaBoss = 10;

function boss1() {
  let snowBall = new SnowBall(xSnowBall, ySnowBall, imgSnowBall);
  let golem = new boss(xBoss, yBoss, imgBoss);
  golem.mostraBoss();
  snowBall.mostraSnow();
  atack(snowBall);
}

let xSnowBall = 1500;
let ySnowBall = 540;
let atacando = false;
var endAtack = false;
var coldow = 2100;

function atack() {
  setTimeout(function () {
    snowBall.iniciaAtack();
    snowBall.voa();
    if (snowBall.contato()) {
      vida -= 1;
      snowBall.resetAtack();
    }
    if (xSnowBall <= 0) {
      snowBall.resetAtack();
    }
  }, coldow);
}
