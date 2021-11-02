class Goblet extends Field {
    constructor (coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super("Goblet", coordinates, false, false, linkedHtmlElement);
        this.imgUrl = CONF.ImgPath.Goblet;
    }
}