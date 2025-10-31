var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        // Initialisation de Game canvas
        // Récupération de l'élément canvas
        var canvas = document.querySelector("canvas");
        // Récupération du context 2D
        this.context = canvas.getContext("2d");
        // Définition des dimensions du canvas
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }
    Game.prototype.start = function () {
        console.log("Youhou ça commence !");
        // Effacement du canvas
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // Remplissage du fond
        this.context.fillStyle = "#141414";
        // Dessin du fond
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
    };
    return Game;
}());
export { Game };
