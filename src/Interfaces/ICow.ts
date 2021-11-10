import { Direction, CowColor } from "../types";

export interface ICow {
    coordinates: { x: number, y: number },
    direction: Direction,
    color: CowColor
}
