import { Direction, ArrowColor, Coordinates, MAPPED_SPRITES } from '../../../../types';
import { IArrow } from './IArrow';

export class Arrow implements IArrow {
	private _coordinates?: Coordinates;
	private _direction: Direction;
	private _impassable: boolean = false;
	private _color: ArrowColor;
	private _img: string;
	private _linkedHtmlElement: HTMLElement;

	constructor(
		direction: Direction,
		color: ArrowColor,
		linkedHtmlElement: HTMLElement,
		coordinates?: Coordinates
	) {
		this._coordinates = coordinates;
		this._direction = direction;
		this._color = color;
		this._img = this.setImg();
		this._linkedHtmlElement = linkedHtmlElement;
	}

	public get coordinates(): Coordinates | undefined {
		return this._coordinates;
	}

	public set coordinates(coordinates: Coordinates | undefined) {
		this._coordinates = coordinates;
	}

	public get direction(): Direction {
		return this._direction;
	}

	public set direction(direction: Direction) {
		this._direction = direction;
	}

	get impassable(): boolean {
		return this._impassable;
	}

	public get color(): ArrowColor {
		return this._color;
	}

	public set color(color: ArrowColor) {
		this._color = color;
	}

	get img(): string {
		return this._img;
	}

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	set linkedHtmlElement(htmlElement: HTMLElement) {
		this._linkedHtmlElement = htmlElement;
	}

	setImg() {
		switch (this._direction) {
			case 'Up':
				return this._color === 'Red'
					? MAPPED_SPRITES.ArrowRedUp
					: MAPPED_SPRITES.ArrowBlueUp;
			case 'Right':
				return this._color === 'Red'
					? MAPPED_SPRITES.ArrowRedRight
					: MAPPED_SPRITES.ArrowBlueRight;
			case 'Down':
				return this._color === 'Red'
					? MAPPED_SPRITES.ArrowRedDown
					: MAPPED_SPRITES.ArrowBlueDown;
			case 'Left':
				return this._color === 'Red'
					? MAPPED_SPRITES.ArrowRedLeft
					: MAPPED_SPRITES.ArrowBlueLeft;
		}
	}
}
