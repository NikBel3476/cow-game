import { ArrowColor, Direction, Coordinates, SpriteName, CowColor } from '../types';
import { ICow } from '../Game/Entities/GameObjects/Cow/ICow';

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
            Key?: Coordinates[]
            ActivatingCouple?: { // TODO: change structure
                "InteractiveObjects": { coordinates: Coordinates } // door | piston secondary
                "Button": { coordinates: Coordinates }[] // button | lever firstly
            }[]
        }
    }
    GameObjects: {
        Cows: {
            "coordinates": Coordinates,
            "direction": Direction,
            "color": CowColor
        }[],
        Arrows: {
            [ k in ArrowColor]: {
                [ k in Direction]: { "coordinates": Coordinates | null }[]
            }
        }
    }
}
