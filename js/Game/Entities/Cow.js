class Cow extends Entity {
    coordinates;
    direction;

    constructor({ coordinates = {x: null, y: null}, direction = "right", imgUrl = "" }) {
        super(imgUrl);
        this.coordinates = coordinates;
        this.direction = direction;
    }

    move() {
        switch(this.direction) {
            case "up":
                this.coordinates.y = this.coordinates.y > 1 && this.coordinates.y < 14 ? this.coordinates.y - 1 : this.coordinates.y;
                break;
            case "right":
                this.coordinates.x = this.coordinates.x > 1 && this.coordinates.x < 20 ? this.coordinates.x + 1 : this.coordinates.x;
                break;
            case "down":
                this.coordinates.y = this.coordinates.y > 1 && this.coordinates.y < 14 ? this.coordinates.y + 1 : this.coordinates.y;
                break;
            case "left":
                this.coordinates.x = this.coordinates.x > 1 && this.coordinates.x < 20 ? this.coordinates.x - 1 : this.coordinates.x;
                break;
        }
    }
}