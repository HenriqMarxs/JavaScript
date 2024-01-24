
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
    i=0;
    xSnowBall = 1500;
  }

  iniciaAtack() {
        if (xSnowBall >= 900 && atq == false){
          xSnowBall = 900;
          atq =true;
      } 
      if (xSnowBall <= 900){
          xSnowBall -=15;
      }
  }
reload(){
  atq = false;
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
