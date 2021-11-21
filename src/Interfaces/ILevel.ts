import { ArrowColor, StaticFields, MapArrow, Direction } from '../types';
import { ICow } from './ICow';
import { MAPPED_SPRITES } from "../MappedSprites";

export interface ILevel {
    readonly mapObjects: {
        readonly staticFields?: StaticFields,
        readonly mobileFields?: {
            [k in keyof typeof MAPPED_SPRITES]?: [number, number][]
        },
        readonly mapArrows?: {
            [k in ArrowColor]?: MapArrow[]
        },
        readonly activeFields?: {
            [k in keyof typeof MAPPED_SPRITES]?: [number, number][]
        },
        readonly goblet: {
            coordinates: { x: number, y: number }
        }
    },
    readonly cows: ICow[],
    arrows: {
        [k in ArrowColor]?: {
            [k in Direction]?: number
        }
    }
}
