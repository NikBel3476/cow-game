import { ArrowColor, Coordinates } from '../../../../types';
import { IGameObject } from "../IGameObject";

export interface IArrow extends IGameObject {
    coordinates?: Coordinates;
    color: ArrowColor;
}
