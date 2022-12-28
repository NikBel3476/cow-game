import { CowColor, Coordinates } from '../../../../types';
import { IGameObject } from '../IGameObject';

export interface ICow extends IGameObject {
	coordinates: Coordinates;
	color: CowColor;
}
