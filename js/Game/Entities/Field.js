class Field extends Entity {
    Coordinates;
    Impassable; // true - непроходимый

    constructor(coordinates = {x: null, y: null}, impassable = true, imgURL = "") {
        super(imgURL);
        this.Coordinates = coordinates;
        this.Impassable = impassable;
    }
}