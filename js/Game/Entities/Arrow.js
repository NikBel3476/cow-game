class Arrow extends Field {
    direction;
    color;

    constructor(name = "", { coordinates = { x: null, y: null}, direction = "", color = "" }, linkedHtmlElement = "") {
        super(name, coordinates, false, false, linkedHtmlElement);
        this.direction = direction;
        this.color = color;
        this.linkedHtmlElement = linkedHtmlElement;
        this.imgUrl = CONF.ImgPath[`Arrow${this.name}`];
    }
}