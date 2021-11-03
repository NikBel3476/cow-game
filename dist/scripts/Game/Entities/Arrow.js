"use strict";
class Arrow extends Field {
    constructor(name, coordinates, direction, color, linkedHtmlElement) {
        super(name, coordinates, false, false, linkedHtmlElement);
        this.direction = direction;
        this.color = color;
        this.linkedHtmlElement = linkedHtmlElement;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}
//# sourceMappingURL=Arrow.js.map