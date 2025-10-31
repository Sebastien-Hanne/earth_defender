import { GameObject } from "./GameObjects/GameObjects.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";
var Game = /** @class */ (function () {
    function Game() {
        this.CANVAS_WIDTH = 900;
        this.CANVAS_HEIGHT = 600;
        this.gameObjects = [];
        this.nbAliens = 10;
        // Initialisation de Game canvas
        // Récupération de l'élément canvas
        var canvas = document.querySelector("canvas");
        // Récupération du context 2D
        this.context = canvas.getContext("2d");
        // Définition des dimensions du canvas
        canvas.height = this.CANVAS_HEIGHT;
        canvas.width = this.CANVAS_WIDTH;
    }
    Game.prototype.instanciate = function (gameObject) {
        this.gameObjects.push(gameObject);
    };
    // Méthode Game Over
    Game.prototype.over = function () {
        alert("GameOver!");
        window.location.reload();
    };
    // Getter du player
    Game.prototype.getPlayer = function () {
        return this.player;
    };
    // Méthode de destruction d'un GameObject
    Game.prototype.destroy = function (gameObject) {
        this.gameObjects = this.gameObjects.filter(function (go) { return go != gameObject; });
    };
    // La fonction start qui initialise le jeu
    Game.prototype.start = function () {
        console.log("Youhou ça commence !");
        // Effacement du canvas
        this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // Remplissage du fond
        this.context.fillStyle = "#141414";
        // Dessin du fond
        this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
        // J'instancie le Player
        this.player = new Player(this);
        // J'ajoute le player au tableau de GameObject
        this.instanciate(this.player);
        // J'instancie les aliens
        for (var i = 0; i < this.nbAliens; i++) {
            this.instanciate(new Alien(this));
        }
        // J'instancie les stars
        for (var i = 0; i < 100; i++) {
            this.instanciate(new Star(this));
        }
        // J'instancie un GameObject
        var gameObject = new GameObject(this);
        // Je le dessine
        this.draw(gameObject);
        // J'active l'écoute des inputs
        Input.listen();
        // Lancement de la boucle de jeu
        this.loop();
    };
    //  La fonction draw qui affiche un gameObject
    Game.prototype.draw = function (gameObject) {
        // Récupération des informations du gameObject
        var position = gameObject.getPosition();
        var image = gameObject.getImage();
        // Dessin de l'image du gameObject aux coordonnées x et y
        this.context.drawImage(image, position.x, position.y);
    };
    // La boucle de jeu
    Game.prototype.loop = function () {
        var _this = this;
        setInterval(function () {
            console.log("Frame!");
            // J'efface la frame précédente.
            _this.context.clearRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            _this.context.fillStyle = "#141414";
            _this.context.fillRect(0, 0, _this.CANVAS_WIDTH, _this.CANVAS_HEIGHT);
            // Je redessine le joueur à chaque frame
            // this.draw(this.player);
            // // Je mets à jour le joueur à chaque frame
            // this.player.callUpdate();
            // // Je redessine l'alien à chaque frame
            // this.alien.callUpdate();
            // // Je mets à jour l'alien à chaque frame
            // this.draw(this.alien);
            // Je parcours tous les GameObjects
            _this.gameObjects.forEach(function (go) {
                go.callUpdate();
                _this.draw(go);
                // Je vérifie les collisions entre le player et les autres GameObjects
                if (go instanceof Alien && _this.player.overlap(go)) {
                    console.log("Alien touche le joueur");
                    console.log("Deux GameObject différents se touchent");
                    go.callCollide(_this.player);
                }
            });
        }, 10);
    };
    return Game;
}());
export { Game };
