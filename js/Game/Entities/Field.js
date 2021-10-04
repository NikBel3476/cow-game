class Field extends Entity {
    coordinates;
    impassable; // true - непроходимый
    imgUrl = "";
    movable; // true - можно двигать

    constructor(name = "", coordinates = {x: null, y: null}, impassable = true, movable = false) {
        super(name);
        this.coordinates = coordinates;
        this.impassable = impassable;
        this.movable = movable;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}