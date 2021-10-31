class Cow extends Entity {
    constructor(name, coordinates, direction, color, linkedHtmlElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this._direction = direction;
        this.color = color;
        this.imgUrl = this.generateImgUrl();
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
        this.imgUrl = this.generateImgUrl();
    }
    // TODO: replace '*Grey*' to this.color when the sprites are ready
    generateImgUrl() {
        return CONF.ImgPath[`CowGrey${this._direction}`];
    }
    move(direction = this._direction) {
        switch (direction) {
            case "Up":
                this.coordinates.y = Math.round((this.coordinates.y - 0.1) * 100) / 100;
                if (this._direction !== "Up") {
                    this._direction = "Up";
                    this.imgUrl = this.generateImgUrl();
                }
                break;
            case "Right":
                this.coordinates.x = Math.round((this.coordinates.x + 0.1) * 100) / 100;
                if (this._direction !== "Right") {
                    this._direction = "Right";
                    this.imgUrl = this.generateImgUrl();
                }
                break;
            case "Down":
                this.coordinates.y = Math.round((this.coordinates.y + 0.1) * 100) / 100;
                if (this._direction !== "Down") {
                    this._direction = "Down";
                    this.imgUrl = this.generateImgUrl();
                }
                break;
            case "Left":
                this.coordinates.x = Math.round((this.coordinates.x - 0.1) * 100) / 100;
                if (this._direction !== "Left") {
                    this._direction = "Left";
                    this.imgUrl = this.generateImgUrl();
                }
                break;
        }
    }
}
//# sourceMappingURL=Cow.js.map