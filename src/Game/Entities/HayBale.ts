import CONF from '../../Conf';
import { Entity } from "./Entity";
import { Coordinates, EntityName } from "../../types";

export class HayBale extends Entity {
    coordinates: Coordinates;

    constructor(name: EntityName, coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this.imgUrl = CONF.ImgPath.HayBale;
    }
}
