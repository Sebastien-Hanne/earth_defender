export class Input{
   private static axisX : Direction = 0;
   public static getAxisX() : Direction{
        return this.axisX;
    }
     public static listen(){
        document.addEventListener("keydown",(event)=>{
    switch (event.key) {
        // Va a droite
        case "d":
        case "D":
            Input.axisX = 1;
            break;
        // Va a gauche
        case "q":
        case "Q":
            Input.axisX  = -1;
            break;
        default:
            break;
    }
    });

    // Lorsque la touche est relachée
    document.addEventListener("keyup",(event)=>{
        switch (event.key) {
        // je m'arrête
        case "d":
        case "D":
        case "q":
        case "Q":
            Input.axisX  = 0;
        break;

        default:
            break;
        }
    });
    }
}


export type Direction = 0 | 1 | -1;