import { ArrowColor, Direction, Coordinates, SpriteName, CowColor } from '../types';
import { DoorOrientation } from "../Game";

export interface ILevel {
    MapObjects: {
        NonInteractive?: {
            [k in SpriteName]?: number[][]
        }
        Interactive: {
            Goblet: {
                coordinates: Coordinates
            }
            Slide?: {
                [ k in Direction]: Coordinates[]
            }
            HayBale?: Coordinates[]
            Pit?: {
                coordinates: Coordinates,
                activated: boolean
            }[],
            Key?: Coordinates[],
            LockDoor?: {
                Horizontal: Coordinates[],
                Vertical: Coordinates[]
            }
            ActivatingTuple?: { // TODO: change structure
                Button: Coordinates[]
                InteractiveObjects: {
                    AutoDoor: {
                        [k in DoorOrientation]: Coordinates[]
                    },
                    Piston: {
                        [k in Direction]: Coordinates[]
                    }
                }
            }[]
        }
    }
    GameObjects: {
        Cows: {
            coordinates: Coordinates,
            direction: Direction,
            color: CowColor
        }[],
        Arrows: {
            [ k in ArrowColor]: {
                [ k in Direction]: { "coordinates": Coordinates | null }[]
            }
        }
    }
}
