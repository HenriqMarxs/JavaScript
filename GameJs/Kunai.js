let xKunai;
let yKunai;
let arremessando = false;
class Kunai{
    mostraKunai(){
        image(imgKunai, xKunai, yKunai, 70, 20);
    }

    arremessaKunai(xInitialPosition, yInitialPosition, isClicked){
        if(isClicked){
            xKunai = xInitialPosition;
            yKunai = yInitialPosition;
        }
        
        if(xKunai < 1150){
            xKunai+=15;
        }
    }
}