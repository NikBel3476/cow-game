import { IField } from '../IField';
import { Coordinates, MAPPED_SPRITES } from '../../../../types';

export class Pit implements IField {
	private _activated: boolean;
	private _coordinates: Coordinates;
	private _img: string;
	private _impassable: boolean;
	private _linkedHtmlElement: HTMLElement;
	private _movable: boolean = false;

	constructor(
		coordinates: Coordinates,
		linkedHtmlElement: HTMLElement,
		activated: boolean
	) {
		this._coordinates = coordinates;
		this._linkedHtmlElement = linkedHtmlElement;
		this._activated = activated;
		this._img = this._activated
			? MAPPED_SPRITES.PitActivated
			: MAPPED_SPRITES.PitNonActivated;
		this._impassable = activated;
	}

	get activated(): boolean {
		return this._activated;
	}

	private set activated(activated: boolean) {
		this._activated = true;
		this._impassable = true;
		this._img = MAPPED_SPRITES.PitActivated;
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

	activate() {
		this.activated = true;
	}
}
