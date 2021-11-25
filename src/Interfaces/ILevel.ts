import { ArrowColor, Direction, Coordinates, SpriteName } from '../types';
import { ICow } from './ICow';

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
        Cows: ICow[],
        Arrows: {
            [ k in ArrowColor]: {
                [ k in Direction]: (Coordinates | null)[]
            }
        }
    }
}
