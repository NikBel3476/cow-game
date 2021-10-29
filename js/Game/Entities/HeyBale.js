class HayBale extends Entity {
    coordinates;

    constructor(name, linkedHtmlElement, coordinates) {
        super(name, linkedHtmlElement);
        this.imgUrl = CONF.ImgPath.HayBale;
        this.coordinates = coordinates;
    }
}