
class SnowBall {
  construtor(xSnowBall, ySnowBall, imgSnowBall) {
    this.xSnowBall = xSnowBall;
    this.ySnowBall = ySnowBall;
    this.imgSnowBall = imgSnowBall;
  }
  mostraSnow() {
    image(imgSnowBall, xSnowBall, ySnowBall, 80, 80);
  }
  resetAtack() {
    atq = true;
    xSnowBall = 1500;
  }
  iniciaAtack() {
      // setTimeout(()=>{
        if (xSnowBall >= 900){
          xSnowBall = 900;
      } 
      if (xSnowBall <= 900){
          xSnowBall -=15;
      }
        // },coldow);
  }

  contato(){
  let contato = false;
  if (ySnowBall + 80 >= yAtor && ySnowBall + 40 <= yAtor + 60) {
    if (xSnowBall >= xAtor && xSnowBall <= xAtor + 30) {
        contato = true;
          return contato;
        }
    }
  } 
} 
