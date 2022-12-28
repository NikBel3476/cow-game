import { IField } from './IField';
import { Coordinates } from '../../../types';

export class Field implements IField {
	private _coordinates: Coordinates;
	private _img: string;
	private _linkedHtmlElement: HTMLElement;
	private _impassable: boolean;
	private _movable: boolean = false;

	constructor(
		coordinates: Coordinates,
		impassable: boolean,
		img: string,
		linkedHtmlElement: HTMLElement
	) {
		this._coordinates = coordinates;
		this._impassable = impassable;
		this._img = img;
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
