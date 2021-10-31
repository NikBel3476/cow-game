class HayBale extends Entity {
    coordinates: Coordinates;

    constructor(name: EntityName, coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.imgUrl = CONF.ImgPath.HayBale;
    }
}