import { Assets } from "../Assets.js";
import { GameObject } from "./GameObjects.js";

export class Star extends GameObject {
  private speed: number = 1;

  // Initialisation de l'Star
  protected start(): void {
    this.setImage(Assets.getStarImage());
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
}
