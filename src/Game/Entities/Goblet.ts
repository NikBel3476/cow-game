import { Field } from "./Field";
import { Coordinates } from "../../types";
import { MAPPED_SPRITES } from "../../MappedSprites";

export class Goblet extends Field {
    constructor(coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super(coordinates, false, false, linkedHtmlElement);
        this._img = MAPPED_SPRITES.Goblet;
    }
}
