var Input = /** @class */ (function () {
    function Input() {
    }
    Input.getAxisX = function () {
        return this.axisX;
    };
    Input.listen = function () {
        document.addEventListener("keydown", function (event) {
            switch (event.key) {
                // Va a droite
                case "d":
                case "D":
                    Input.axisX = 1;
                    break;
                // Va a gauche
                case "q":
                case "Q":
                    Input.axisX = -1;
                    break;
                default:
                    break;
            }
        });
        // Lorsque la touche est relachée
        document.addEventListener("keyup", function (event) {
            switch (event.key) {
                // je m'arrête
                case "d":
                case "D":
                case "q":
                case "Q":
                    Input.axisX = 0;
                    break;
                default:
                    break;
            }
        });
    };
    Input.axisX = 0;
    return Input;
}());
export { Input };
