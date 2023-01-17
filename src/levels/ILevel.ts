import { ArrowColor, Direction, Coordinates, SpriteName, CowColor } from '../types';
import { DoorOrientation } from '../Game';

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
			Pit?: Array<{
				coordinates: Coordinates;
				activated: boolean;
			}>;
			Key?: Coordinates[];
			LockDoor?: {
				[k in DoorOrientation]: Coordinates[];
			};
			Button?: Array<{
				coordinates: Coordinates;
				linkedElementsIds: number[];
			}>;
			AutoDoor?: {
				[k in DoorOrientation]: Array<{
					id: number;
					coordinates: Coordinates;
				}>;
			};
			Piston?: {
				[k in Direction]: Array<{
					id: number;
					coordinates: Coordinates;
					activated: boolean;
				}>;
			};
		};
	};
	GameObjects: {
		Cows: Array<{
			coordinates: Coordinates;
			direction: Direction;
			color: CowColor;
		}>;
		Arrows: {
			[k in ArrowColor]: {
				[k in Direction]: Array<{ coordinates: Coordinates | null; isStatic: boolean }>;
			};
		};
	};
}
