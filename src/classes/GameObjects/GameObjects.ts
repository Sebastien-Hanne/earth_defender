import { Position } from "../Positions.js";
import { Assets } from "../Assets.js";
import { Game } from "../Game.js";

export class GameObject {
  // Propriétés
  private position: Position;
  private image: HTMLImageElement;
  private game: Game;
  protected start(): void {}
  protected update() {}
  public callUpdate() {
    this.update();
  }
  // Constructeur
  constructor(game: Game) {
    this.position = {
      x: 0,
      y: 0,
    };
    this.image = Assets.getDefaultImage();
    this.game = game;
    this.start();
  }

  // Méthode de détection de collision
  public overlap(other: GameObject): boolean {
    return !(
      this.right() < other.left() ||
      this.left() > other.right() ||
      this.bottom() < other.top() ||
      this.top() > other.bottom()
    );
  }

  // Méthode de gestion de la collision
  protected collide(other: GameObject) {}
  // Méthode d'appel de la collision
  public callCollide(other: GameObject): void {
    this.collide(other);
  }

  /** Méthodes utilitaires pour la position du GameObject */
  public top(): number {
    return this.position.y;
  }
  public bottom(): number {
    return this.position.y + this.image.height;
  }
  public left(): number {
    return this.position.x;
  }
  public right(): number {
    return this.position.x + this.image.width;
  }

  // Getters
  public getImage(): HTMLImageElement {
    return this.image;
  }
  public getPosition(): Position {
    return this.position;
  }
  public getGame(): Game {
    return this.game;
  }
  // Setters
  public setImage(image: HTMLImageElement) {
    this.image = image;
  }
  public setPosition(position: Position) {
    this.position = position;
  }
}
