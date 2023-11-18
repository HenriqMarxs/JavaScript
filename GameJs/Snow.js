let disparo = false;
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
    atacando = false;
    endAtack = true;
    disparo = false;
    xSnowBall = 1500;
  }
  iniciaAtack() {
    if (xSnowBall != 900 && disparo == false) {
      xSnowBall = 900;
      atacando = true;
      endAtack = false;
    }
  }
  voa() {
    if (atacando == true && endAtack == false) {
      disparo = true;
      xSnowBall -= 15;
    }
  }
  contato() {
    let contato = false;
    if (ySnowBall + 80 >= yAtor && ySnowBall + 40 <= yAtor + 60) {
      if (xSnowBall >= xAtor && xSnowBall <= xAtor + 30) {
        contato = true;
        return contato;
      }
    }
  }
}
