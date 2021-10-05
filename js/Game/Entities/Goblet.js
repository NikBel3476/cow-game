class Goblet extends Field {
    constructor ({ coordinates = { x: null, y: null } }, linkedHtmlElement = "") {
        super("goblet", coordinates, false, false, linkedHtmlElement);
        this.imgUrl = CONF.ImgPath.Goblet;
    }
}