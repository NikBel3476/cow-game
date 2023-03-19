import { Coordinates } from '../../../types';

export class FieldReact {
	private readonly _coordinates: Coordinates;
	private readonly _img: string;
	private readonly _impassable: boolean;
	private readonly _movable: boolean = false;

	constructor(coordinates: Coordinates, impassable: boolean, img: string) {
		this._coordinates = coordinates;
		this._impassable = impassable;
		this._img = img;
	}

	get coordinates(): Coordinates {
		return this._coordinates;
	}

	get img(): string {
		return this._img;
	}

	get impassable(): boolean {
		return this._impassable;
	}

	get movable(): boolean {
		return this._movable;
	}
}
