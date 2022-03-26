import { Direction } from "../../../types";
import { IEntity } from "../IEntity";

export interface IGameObject extends IEntity {
  direction: Direction;
}
