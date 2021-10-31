class Cow extends Entity {
    public coordinates: Coordinates;
    private _direction: Direction;
    public color: CowColor;

    constructor(name: EntityName, coordinates: Coordinates, direction: Direction, color: CowColor, linkedHtmlElement: HTMLElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this._direction = direction;
        this.color = color;
        this.imgUrl = this.generateImgUrl();
    }

    public get direction(): Direction {
        return this._direction;
    }

    public set direction(direction: Direction) {
        this._direction = direction;
        this.imgUrl = this.generateImgUrl();
    }

    // TODO: replace '*Grey*' to this.color when the sprites are ready
    generateImgUrl(): string {
        return CONF.ImgPath[`CowGrey${this._direction}`];
    }

    move(direction: Direction = this._direction) {
        switch(direction) {
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