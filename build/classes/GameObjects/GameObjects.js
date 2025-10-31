import { Assets } from "../Assets.js";
var GameObject = /** @class */ (function () {
    // Constructeur
    function GameObject(game) {
        this.position = {
            x: 0,
            y: 0,
        };
        this.image = Assets.getDefaultImage();
        this.game = game;
        this.start();
    }
    GameObject.prototype.start = function () { };
    GameObject.prototype.update = function () { };
    GameObject.prototype.callUpdate = function () {
        this.update();
    };
    // Méthode de détection de collision
    GameObject.prototype.overlap = function (other) {
        return !(this.right() < other.left() ||
            this.left() > other.right() ||
            this.bottom() < other.top() ||
            this.top() > other.bottom());
    };
    // Méthode de gestion de la collision
    GameObject.prototype.collide = function (other) { };
    // Méthode d'appel de la collision
    GameObject.prototype.callCollide = function (other) {
        this.collide(other);
    };
    /** Méthodes utilitaires pour la position du GameObject */
    GameObject.prototype.top = function () {
        return this.position.y;
    };
    GameObject.prototype.bottom = function () {
        return this.position.y + this.image.height;
    };
    GameObject.prototype.left = function () {
        return this.position.x;
    };
    GameObject.prototype.right = function () {
        return this.position.x + this.image.width;
    };
    // Getters
    GameObject.prototype.getImage = function () {
        return this.image;
    };
    GameObject.prototype.getPosition = function () {
        return this.position;
    };
    GameObject.prototype.getGame = function () {
        return this.game;
    };
    // Setters
    GameObject.prototype.setImage = function (image) {
        this.image = image;
    };
    GameObject.prototype.setPosition = function (position) {
        this.position = position;
    };
    return GameObject;
}());
export { GameObject };
