import CONF from '../../Conf';
import { Entity } from "./Entity";
import { Coordinates, EntityName } from "../../types";

export class Field extends Entity {
    coordinates: Coordinates;
    impassable: boolean; // true - непроходимый
    imgUrl: string;
    movable: boolean; // true - можно двигать

    constructor(
        name: EntityName,
        coordinates: Coordinates,
        impassable = true,
        movable = false,
        linkedHtmlElement: HTMLElement
    ) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.impassable = impassable;
        this.movable = movable;
        this.imgUrl = CONF.ImgPath[this.name];
    }
}
