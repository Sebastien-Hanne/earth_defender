export class Assets {
  public static getDefaultImage() {
    const image: HTMLImageElement = document.querySelector("img.asset_default");
    if (image == null) {
      throw Error("No assets found : DefaultImageObject");
    }
    return image;
  }
  // Ajout du getter d'asset player
  public static getPlayerImage() {
    const image: HTMLImageElement = document.querySelector("img.asset_player");
    if (image == null) {
      throw Error("No assets found : PlayerImage");
    }
    return image;
  }

  // Ajout du getter d'asset alien
  public static getAlienImage(): HTMLImageElement {
    const image: HTMLImageElement = document.querySelector("img.asset_alien");
    if (image == null) {
      throw Error("No alien asset found : AlienImage");
    }
    return image;
  }

  // Ajout du getter d'asset star
  public static getStarImage(): HTMLImageElement {
    const image: HTMLImageElement = document.querySelector("img.asset_star");
    if (image == null) {
      throw Error("No alien asset found : StarImage");
    }
    return image;
  }

    // Ajout du getter d'asset laser
  public static getLaserImage(): HTMLImageElement {
    const image: HTMLImageElement = document.querySelector("img.asset_laser");
    if (image == null) {
      throw Error("No alien asset found : LaserImage");
    }
    return image;
  }

    // Ajout du getter d'asset heart
  public static getHeartImage(): HTMLImageElement {
    const image: HTMLImageElement = document.querySelector("img.asset_heart");
    if (image == null) {
      throw Error("No alien asset found : HeartImage");
    }
    return image;
  }

    // Ajout du getter d'asset earth
  public static getEarthImage(): HTMLImageElement {
    const image: HTMLImageElement = document.querySelector("img.asset_earth");
    if (image == null) {
      throw Error("No alien asset found : EarthImage");
    }
    return image;
  }
}
