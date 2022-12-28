import { IField } from '../IField';
import { Coordinates, Direction, MAPPED_SPRITES } from '../../../../types';

export class Slide implements IField {
	private readonly _coordinates: Coordinates;
	private readonly _direction: Direction;
	private readonly _img: string;
	private readonly _linkedHtmlElement: HTMLElement;
	private readonly _impassable: boolean = true;
	private readonly _movable: boolean = false;

	constructor(
		coordinates: Coordinates,
		direction: Direction,
		linkedHtmlElement: HTMLElement
	) {
		this._coordinates = coordinates;
		this._direction = direction;
		this._img = this.getImg();
		this._linkedHtmlElement = linkedHtmlElement;
	}

	public get coordinates(): Coordinates {
		return this._coordinates;
	}

	public get direction(): Direction {
		return this._direction;
	}

	get img(): string {
		return this._img;
	}

	get impassable(): boolean {
		return this._impassable;
	}

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	get movable(): boolean {
		return this._movable;
	}

	getImg(): string {
		switch (this.direction) {
			case 'Up':
				return MAPPED_SPRITES.SlideUp;
			case 'Right':
				return MAPPED_SPRITES.SlideRight;
			case 'Down':
				return MAPPED_SPRITES.SlideDown;
			case 'Left':
				return MAPPED_SPRITES.SlideLeft;
		}
	}
}
