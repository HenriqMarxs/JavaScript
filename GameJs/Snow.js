let xSnowBall = 1500;
let ySnowBall = 540;
let atq = false;
let coldow = 2100;

class SnowBall {
  mostraSnow() {
    image(imgSnowBall, xSnowBall, ySnowBall, 80, 80);
  }

  resetAtack() {
    atq = false;
    xSnowBall = 1500;
  }

  iniciaAtack() {
        if (xSnowBall >= 900 && atq == false){
          xSnowBall = 900;
          
      } 
      if (xSnowBall<= 900){
          atq =true;
          xSnowBall-=15;
      }
  }
  
}

