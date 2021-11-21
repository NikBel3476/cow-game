import { Field } from "./Field";

import { MAPPED_SPRITES } from "../../MappedSprites";

import { Coordinates } from "../../types";

export class HayBale extends Field {
    constructor(coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super(coordinates, true, true, linkedHtmlElement);
        this._img = MAPPED_SPRITES.HayBale;
    }
}
