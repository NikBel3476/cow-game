class Cow extends Entity {
    constructor(name, coordinates, direction, color, linkedHtmlElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this._direction = direction;
        this.color = color;
        this.imgUrl = this.generateImgUrl();
        this.layer = 1;
    }
    get direction() {
        return this._direction;
    }
    set direction(direction) {
        this._direction = direction;
        this.imgUrl = this.generateImgUrl();
    }
    generateImgUrl() {
        return CONF.ImgPath[`CowGrey${this._direction}`];
    }
    move(direction = this._direction) {
        switch (direction) {
            case "Up":
                this.coordinates.y = Math.round((this.coordinates.y - 0.1) * 100) / 100;
                if (this._direction !== "Up") {
                    this.direction = "Up";
                }
                break;
            case "Right":
                this.coordinates.x = Math.round((this.coordinates.x + 0.1) * 100) / 100;
                if (this._direction !== "Right") {
                    this.direction = "Right";
                }
                break;
            case "Down":
                this.coordinates.y = Math.round((this.coordinates.y + 0.1) * 100) / 100;
                if (this._direction !== "Down") {
                    this.direction = "Down";
                }
                break;
            case "Left":
                this.coordinates.x = Math.round((this.coordinates.x - 0.1) * 100) / 100;
                if (this._direction !== "Left") {
                    this.direction = "Left";
                }
                break;
        }
    }
}
//# sourceMappingURL=Cow.js.map