class Arrow extends Field {
    direction;

    constructor(name = "", { coordinates = { x: null, y: null}, direction = "" }, linkedHtmlElement) {
        super(name, coordinates, false, false, linkedHtmlElement);
        this.direction = direction;
        this.linkedHtmlElement = linkedHtmlElement;
        this.imgUrl = CONF.ImgPath[`Arrow${this.name}`];
    }
}