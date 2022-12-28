import { IField } from '../IField';
import { Coordinates, MAPPED_SPRITES } from '../../../../types';

export class HayBale implements IField {
	private readonly _coordinates: Coordinates;
	private readonly _linkedHtmlElement: HTMLElement;
	private readonly _img: string = MAPPED_SPRITES.HayBale;
	private readonly _impassable: boolean = true;
	private readonly _movable: boolean = true;

	constructor(coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
		this._coordinates = coordinates;
		this._linkedHtmlElement = linkedHtmlElement;
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

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	get movable(): boolean {
		return this._movable;
	}
}
