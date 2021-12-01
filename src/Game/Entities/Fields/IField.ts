import { IEntity } from "../IEntity";
import { Coordinates } from "../../../types";

export interface IField extends IEntity {
    coordinates: Coordinates;
    impassable: boolean;
    movable: boolean;
}
