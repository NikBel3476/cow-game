import CONF from '../../Conf';
import { Field } from "./Field";
import { Coordinates } from "../../types";

export class Goblet extends Field {
    constructor(coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super("Goblet", coordinates, false, false, linkedHtmlElement);
        this.imgUrl = CONF.ImgPath.Goblet;
    }
}
