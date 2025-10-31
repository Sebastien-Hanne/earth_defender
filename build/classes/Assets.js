var Assets = /** @class */ (function () {
    function Assets() {
    }
    Assets.getDefaultImage = function () {
        var image = document.querySelector("img.asset_default");
        if (image == null) {
            throw Error("No assets found : DefaultImageObject");
        }
        return image;
    };
    // Ajout du getter d'asset player
    Assets.getPlayerImage = function () {
        var image = document.querySelector("img.asset_player");
        if (image == null) {
            throw Error("No assets found : PlayerImage");
        }
        return image;
    };
    // Ajout du getter d'asset alien
    Assets.getAlienImage = function () {
        var image = document.querySelector("img.asset_alien");
        if (image == null) {
            throw Error("No alien asset found : AlienImage");
        }
        return image;
    };
    // Ajout du getter d'asset star
    Assets.getStarImage = function () {
        var image = document.querySelector("img.asset_star");
        if (image == null) {
            throw Error("No alien asset found : StarImage");
        }
        return image;
    };
    // Ajout du getter d'asset laser
    Assets.getLaserImage = function () {
        var image = document.querySelector("img.asset_laser");
        if (image == null) {
            throw Error("No alien asset found : LaserImage");
        }
        return image;
    };
    // Ajout du getter d'asset heart
    Assets.getHeartImage = function () {
        var image = document.querySelector("img.asset_heart");
        if (image == null) {
            throw Error("No alien asset found : HeartImage");
        }
        return image;
    };
    // Ajout du getter d'asset earth
    Assets.getEarthImage = function () {
        var image = document.querySelector("img.asset_earth");
        if (image == null) {
            throw Error("No alien asset found : EarthImage");
        }
        return image;
    };
    return Assets;
}());
export { Assets };
