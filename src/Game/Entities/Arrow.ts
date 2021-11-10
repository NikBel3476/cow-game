import CONF from '../../Conf';
import { Field } from "./Field";
import { Direction, ArrowColor, EntityName, Coordinates } from "../../types";

export class Arrow extends Field {
    direction: Direction;
    color: ArrowColor;

    constructor(
        name: EntityName,
        coordinates: Coordinates,
        direction: Direction,
        color: ArrowColor,
        linkedHtmlElement: HTMLElement
    ) {
        super(name, coordinates, false, false, linkedHtmlElement);
        this.direction = direction;
        this.color = color;
        this.linkedHtmlElement = linkedHtmlElement;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}
