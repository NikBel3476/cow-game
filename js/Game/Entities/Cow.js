class Cow extends Entity {
    coordinates;
    direction;
    type;

    constructor(name = "mainCow", { coordinates = {x: null, y: null}, direction = "right", type = "main" }, linkedHtmlElement = "" ) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.direction = direction;
        this.type = type;
        try {
            this.imgUrl = this.getImgUrl();
        } catch(e) {
            console.log(e);
        }
    }

    // TODO: change ImgPath.CowGrey... to ImgPath.CowBrown after "?" in every case
    getImgUrl(direction = this.direction) {
        switch(direction) {
            case "up":
                return this.type === "main" ? CONF.ImgPath.CowGreyUp : CONF.ImgPath.CowGreyUp;
                break;
            case "right":
                return this.type === "main" ? CONF.ImgPath.CowGreyRight : CONF.ImgPath.CowGreyRight;
                break;
            case "down":
                return this.type === "main" ? CONF.ImgPath.CowGreyDown : CONF.ImgPath.CowGreyDown;
                break;
            case "left":
                return this.type === "main" ? CONF.ImgPath.CowGreyLeft : CONF.ImgPath.CowGreyLeft;
                break;
            default:
                throw new Error("Wrong cow direction");
                break;
        }
    }

    move(direction = this.direction) {
        switch(direction) {
            case "up":
                this.coordinates.y = Math.round((this.coordinates.y - 0.1) * 100) / 100;
                if (this.direction !== "up") {
                    this.direction = "up";
                    this.imgUrl = this.getImgUrl();
                }
                break;
            case "right":
                this.coordinates.x = Math.round((this.coordinates.x + 0.1) * 100) / 100;
                if (this.direction !== "right") {
                    this.direction = "right";
                    this.imgUrl = this.getImgUrl();
                }
                break;
            case "down":
                this.coordinates.y = Math.round((this.coordinates.y + 0.1) * 100) / 100;
                if (this.direction !== "down") {
                    this.direction = "down";
                    this.imgUrl = this.getImgUrl();
                }
                break;
            case "left":
                this.coordinates.x = Math.round((this.coordinates.x - 0.1) * 100) / 100;
                if (this.direction !== "left") {
                    this.direction = "left";
                    this.imgUrl = this.getImgUrl();
                }
                break;
        }
    }

    setDirection(direction = "") {
        switch(direction.toLowerCase()) {
            case "up":
                this.direction = "up";
                this.imgUrl = this.getImgUrl();
                break;
            case "right":
                this.direction = "right";
                this.imgUrl = this.getImgUrl();
                break;
            case "down":
                this.direction = "down";
                this.imgUrl = this.getImgUrl();
                break;
            case "left":
                this.direction = "left";
                this.imgUrl = this.getImgUrl();
                break;
        }
    }
}