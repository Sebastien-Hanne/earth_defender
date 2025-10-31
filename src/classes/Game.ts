import { GameObject } from "./GameObjects/GameObjects.js";
import { Player } from "./GameObjects/Player.js";
import { Input } from "./Input.js";
import { Alien } from "./GameObjects/Alien.js";
import { Star } from "./GameObjects/Star.js";

export class Game {
  // Propriétés
  private context: CanvasRenderingContext2D;
  public readonly CANVAS_WIDTH: number = 900;
  public readonly CANVAS_HEIGHT: number = 600;

  constructor() {
    // Initialisation de Game canvas
    // Récupération de l'élément canvas
    const canvas: HTMLCanvasElement = document.querySelector("canvas");
    // Récupération du context 2D
    this.context = canvas.getContext("2d");
    // Définition des dimensions du canvas
    canvas.height = this.CANVAS_HEIGHT;
    canvas.width = this.CANVAS_WIDTH;
  }

  // GameObjects
  private player: Player;
  private gameObjects: GameObject[] = [];
  public instanciate(gameObject: GameObject): void {
    this.gameObjects.push(gameObject);
  }
  private alien: Alien;
  private nbAliens: number = 10;
  // Méthode Game Over
  public over(): void {
    alert("GameOver!");
    window.location.reload();
  }

  // Getter du player
  public getPlayer(): Player {
    return this.player;
  }
  // Méthode de destruction d'un GameObject
  public destroy(gameObject: GameObject): void {
    this.gameObjects = this.gameObjects.filter((go) => go != gameObject);
  }

  // La fonction start qui initialise le jeu
  public start(): void {
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
    for (let i = 0; i < this.nbAliens; i++) {
      this.instanciate(new Alien(this));
    }

    // J'instancie les stars
    for (let i = 0; i < 100; i++) {
      this.instanciate(new Star(this));
    }
    // J'instancie un GameObject
    const gameObject = new GameObject(this);
    // Je le dessine
    this.draw(gameObject);
    // J'active l'écoute des inputs
    Input.listen();
    // Lancement de la boucle de jeu
    this.loop();
  }

  //  La fonction draw qui affiche un gameObject
  private draw(gameObject: GameObject) {
    // Récupération des informations du gameObject
    const position = gameObject.getPosition();
    const image = gameObject.getImage();
    // Dessin de l'image du gameObject aux coordonnées x et y
    this.context.drawImage(image, position.x, position.y);
  }

  // La boucle de jeu
  private loop() {
    setInterval(() => {
      console.log("Frame!");
      // J'efface la frame précédente.
      this.context.clearRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
      this.context.fillStyle = "#141414";
      this.context.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);

      // Je redessine le joueur à chaque frame
      // this.draw(this.player);
      // // Je mets à jour le joueur à chaque frame
      // this.player.callUpdate();

      // // Je redessine l'alien à chaque frame
      // this.alien.callUpdate();
      // // Je mets à jour l'alien à chaque frame
      // this.draw(this.alien);

      // Je parcours tous les GameObjects
      this.gameObjects.forEach((go) => {
        go.callUpdate();
        this.draw(go);
        // Je vérifie les collisions entre le player et les autres GameObjects
        if (go instanceof Alien && this.player.overlap(go)) {
          console.log("Alien touche le joueur");
          console.log("Deux GameObject différents se touchent");
          go.callCollide(this.player);
        }
      });
    }, 10);
  }
}
