class Field extends Entity {
    coordinates: { x?: number, y?: number};
    impassable: boolean; // true - непроходимый
    imgUrl: string;
    movable: boolean; // true - можно двигать

    constructor(name: EntityName, coordinates: Coordinates, impassable = true, movable = false, linkedHtmlElement: HTMLElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.impassable = impassable;
        this.movable = movable;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}