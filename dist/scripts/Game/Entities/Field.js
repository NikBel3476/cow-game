"use strict";
class Field extends Entity {
    constructor(name, coordinates, impassable = true, movable = false, linkedHtmlElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.impassable = impassable;
        this.movable = movable;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}
//# sourceMappingURL=Field.js.map