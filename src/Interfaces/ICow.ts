import { Direction, CowColor, Coordinates } from "../types";
import { IEntity } from "../Game/Entities";

export interface ICow extends IEntity {
    coordinates: Coordinates,
    direction: Direction,
    color: CowColor
}
