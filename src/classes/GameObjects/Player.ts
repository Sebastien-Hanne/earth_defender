import { Assets } from "../Assets.js";
import { Input } from "../Input.js";
import { GameObject } from "./GameObjects.js";

export class Player extends GameObject {
  // Propriétés
  private speed: number = 5;
  // Initialisation du player
  protected start(): void {
    this.setImage(Assets.getPlayerImage());
    this.setPosition({
      x: this.getGame().CANVAS_WIDTH / 2,
      y: this.getGame().CANVAS_HEIGHT - this.getImage().height - 10,
    });
  }
  // Mise à jour du player
  protected update(): void {
    console.log(Input.getAxisX());

    // Positionnement du player
    this.setPosition({
      x: this.getPosition().x + this.speed * Input.getAxisX(),
      y: this.getPosition().y,
    });
  }
}
