import { Coordinates, Direction, CowColor, MAPPED_SPRITES } from '../../../../types';
import { ICow } from './ICow';
import { gameConfig } from '../../../../Config.gen';

export class Cow implements ICow {
	private readonly _coordinates: Coordinates;
	private _direction: Direction;
	private readonly _color: CowColor;
	private _layer: 1 | 2;
	private _img: string;
	private readonly _linkedHtmlElement: HTMLElement;
	private readonly images: {
		Up: string;
		Right: string;
		Down: string;
		Left: string;
	};

	constructor(
		coordinates: Coordinates,
		direction: Direction,
		color: CowColor,
		linkedHtmlElement: HTMLElement
	) {
		this._coordinates = coordinates;
		this._direction = direction;
		this._color = color;
		this.images = this.getImages();
		this._img = this.getCurrentImg();
		this._layer = 1;
		this._linkedHtmlElement = linkedHtmlElement;
	}

	public get coordinates(): Coordinates {
		return this._coordinates;
	}

	public get direction(): Direction {
		return this._direction;
	}

	public set direction(direction: Direction) {
		this._direction = direction;
		this._img = this.getCurrentImg();
	}

	public get color(): CowColor {
		return this._color;
	}

	public get layer(): 1 | 2 {
		return this._layer;
	}

	public set layer(layer: 1 | 2) {
		this._layer = layer;
	}

	get img(): string {
		return this._img;
	}

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	// TODO: remove this method due to image set via className
	getImages(): { Up: string; Right: string; Down: string; Left: string } {
		return {
			Up: this._color === 'Grey' ? MAPPED_SPRITES.CowGreyUp : MAPPED_SPRITES.CowBrownUp,
			Right:
				this._color === 'Grey'
					? MAPPED_SPRITES.CowGreyRight
					: MAPPED_SPRITES.CowBrownRight,
			Down:
				this._color === 'Grey' ? MAPPED_SPRITES.CowGreyDown : MAPPED_SPRITES.CowBrownDown,
			Left:
				this._color === 'Grey' ? MAPPED_SPRITES.CowGreyLeft : MAPPED_SPRITES.CowBrownLeft
		};
	}

	// TODO: remove this method due to image set via className
	getCurrentImg(): string {
		switch (this._direction) {
			case 'Up':
				return this.images.Up;
			case 'Right':
				return this.images.Right;
			case 'Down':
				return this.images.Down;
			case 'Left':
				return this.images.Left;
		}
	}

	move(direction: Direction = this._direction): void {
		switch (direction) {
			case 'Up':
				this._coordinates.y =
					this._coordinates.y > 1
						? Math.round((this._coordinates.y - 1) * 100) / 100
						: this._coordinates.y;
				if (this._direction !== 'Up') {
					this._direction = 'Up';
				}
				break;
			case 'Right':
				this._coordinates.x =
					this._coordinates.x < gameConfig.map.width
						? Math.round((this._coordinates.x + 1) * 100) / 100
						: this._coordinates.x;
				if (this._direction !== 'Right') {
					this._direction = 'Right';
				}
				break;
			case 'Down':
				this._coordinates.y =
					this._coordinates.y < gameConfig.map.height
						? Math.round((this._coordinates.y + 1) * 100) / 100
						: this._coordinates.y;
				if (this._direction !== 'Down') {
					this._direction = 'Down';
				}
				break;
			case 'Left':
				this._coordinates.x =
					this._coordinates.x > 1
						? Math.round((this._coordinates.x - 1) * 100) / 100
						: this._coordinates.x;
				if (this._direction !== 'Left') {
					this._direction = 'Left';
				}
				break;
			default:
				throw new Error('Wrong cow direction');
		}
	}
}
