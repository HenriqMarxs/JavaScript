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
var i =0;

function atack() {
  let snowBall = new SnowBall(xSnowBall, ySnowBall, imgSnowBall);
  snowBall.mostraSnow();

   if(snowBall.contato()){
     vida-=1;
     snowBall.resetAtack();
 }
  else{
    if(xSnowBall<0){
      snowBall.resetAtack();
    }
    setTimeout(()=>{
      snowBall.iniciaAtack();
    }, coldow); 

    if(atq == true){
      setTimeout(function r(){
       if(i==0){
        snowBall.reload();
        i++;
       }
        setTimeout(r, coldow+2400);
        
        },coldow+2400);
    }
    
 }
}