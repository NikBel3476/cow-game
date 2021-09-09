class Cow extends Entity {
    Coordinates;
    Direction;

    constructor(coordinates = {x: null, y: null}, direction = "right", imgURL = "") {
        super(imgURL);
        this.Coordinates = coordinates;
        this.Direction = direction;
    }
}