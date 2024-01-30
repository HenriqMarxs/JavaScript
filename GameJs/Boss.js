//variaveis Golem de Neve
let xBoss = 900;
let yBoss = 480;
let vidaBoss = 10;

class boss {
  mostraBoss() {
    image(imgBoss, xBoss, yBoss, 200, 200);
  }
}

function boss1() {
  let golem = new boss();
  golem.mostraBoss(); 
}

function atack() {
  let snowBall = new SnowBall();
  snowBall.mostraSnow();
  snowBall.iniciaAtack();
    if(xSnowBall<=0){
      snowBall.resetAtack();
    }else{
      if(contato(yAtor, xAtor, ySnowBall, xSnowBall)){
        vida -=1;
        snowBall.resetAtack();
      }
    }
    
}  
     



