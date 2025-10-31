import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";
import { Player } from "./Player.js";

export class Alien extends GameObject {
  private speed: number = 1;

  // Initialisation de l'alien
  protected start(): void {
    this.setImage(Assets.getAlienImage());
    this.setPosition({
      x: Math.random() * this.getGame().CANVAS_WIDTH,
      y: Math.random() * this.getGame().CANVAS_HEIGHT,
    });
  }

  // Mise à jour de l'alien
  protected update(): void {
    this.setPosition({
      x: this.getPosition().x,
      y: this.getPosition().y + this.speed,
    });
  }

  // Gestion de la collision avec le player
  protected collide(other: GameObject): void {
    if (other instanceof Player) {
      console.log("Miam Miam");
      this.getGame().over();
    }
  }
}
