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
  let golem = new boss(xBoss, yBoss, imgBoss);
  golem.mostraBoss();
  atack();
}

let xSnowBall = 1500;
let ySnowBall = 540;
let atq = false;
var endAtack = false;
var coldow = 2100;

function atack() {
  let snowBall = new SnowBall(xSnowBall, ySnowBall, imgSnowBall)
  snowBall.mostraSnow();
  if(atq == false){
    snowBall.iniciaAtack();
  }
   if(snowBall.contato()){
     vida-=1;
   snowBall.resetAtack();
 }
  else{
    if(xSnowBall<0){
      snowBall.resetAtack();
    }
   
 }
}

//  function contato(){
//  let contato = false;
//  if (ySnowBall + 80 >= yAtor && ySnowBall + 40 <= yAtor + 60) {
//    if (xSnowBall >= xAtor && xSnowBall <= xAtor + 30) {
//        contato = true;
//         return contato;
//        }
//    }
//  }