import { IField } from '../IField';
import { Coordinates, Direction, MAPPED_SPRITES } from '../../../../types';

export class Piston implements IField {
	private readonly _id: number;
	private readonly _coordinates: Coordinates;
	private readonly _direction: Direction;
	private _img: string;

	private _impassable: boolean;
	private readonly _linkedHtmlElement: HTMLElement;
	private _activated: boolean;
	private readonly _movable: boolean = false;

	constructor(
		coordinates: Coordinates,
		id: number,
		direction: Direction,
		activated: boolean,
		linkedHtmlElement: HTMLElement
	) {
		this._coordinates = coordinates;
		this._id = id;
		this._direction = direction;
		this._activated = activated;
		this._linkedHtmlElement = linkedHtmlElement;
		this._impassable = activated;
		this._img = this.getImg();
	}

	get coordinates(): Coordinates {
		return this._coordinates;
	}

	get impassable(): boolean {
		return this._impassable;
	}

	get movable(): boolean {
		return this._movable;
	}

	get id(): number {
		return this._id;
	}

	get direction(): Direction {
		return this._direction;
	}

	get img(): string {
		return this._img;
	}

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	get activated(): boolean {
		return this._activated;
	}

	private set activated(activated: boolean) {
		this._activated = activated;
		this._impassable = activated;
	}

	getImg(): string {
		switch (this._direction) {
			case 'Up':
				return (this._img = MAPPED_SPRITES.PistonUp);
			case 'Right':
				return (this._img = MAPPED_SPRITES.PistonRight);
			case 'Down':
				return (this._img = MAPPED_SPRITES.PistonDown);
			case 'Left':
				return (this._img = MAPPED_SPRITES.PistonLeft);
		}
	}

	activate(): void {
		this.activated = !this.activated;
	}
}
