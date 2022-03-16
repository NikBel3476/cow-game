import {
  ArrowColor,
  Direction,
  Coordinates,
  SpriteName,
  CowColor,
} from "../types";
import { DoorOrientation } from "../Game";

export interface ILevel {
  MapObjects: {
    NonInteractive?: {
      [k in SpriteName]?: number[][];
    };
    Interactive: {
      Goblet: {
        coordinates: Coordinates;
      };
      Slide?: {
        [k in Direction]: Coordinates[];
      };
      HayBale?: Coordinates[];
      Pit?: {
        coordinates: Coordinates;
        activated: boolean;
      }[];
      Key?: Coordinates[];
      LockDoor?: {
        [k in DoorOrientation]: Coordinates[];
      };
      Button?: {
        coordinates: Coordinates;
        linkedElementsIds: number[];
      }[];
      AutoDoor?: {
        [k in DoorOrientation]: {
          id: number;
          coordinates: Coordinates;
        }[];
      };
      Piston?: {
        [k in Direction]: {
          id: number;
          coordinates: Coordinates;
          activated: boolean;
        }[];
      };
    };
  };
  GameObjects: {
    Cows: {
      coordinates: Coordinates;
      direction: Direction;
      color: CowColor;
    }[];
    Arrows: {
      [k in ArrowColor]: {
        [k in Direction]: { coordinates: Coordinates | null }[];
      };
    };
  };
}
