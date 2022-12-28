import { IField } from '../../IField';
import { Coordinates, MAPPED_SPRITES } from '../../../../../types';
import { DoorOrientation } from './DoorOrientation';

export class AutoDoor implements IField {
	private readonly _id: number;
	private readonly _coordinates: Coordinates;
	private _img: string;
	private readonly _orientation: DoorOrientation;
	private readonly _linkedHtmlElement: HTMLElement;
	private _impassable: boolean = true;
	private readonly _movable: boolean = false;
	private readonly _activated: boolean = false;

	constructor(
		id: number,
		coordinates: Coordinates,
		orientation: DoorOrientation,
		linkedHtmlElement: HTMLElement
	) {
		this._id = id;
		this._coordinates = coordinates;
		this._orientation = orientation;
		this._linkedHtmlElement = linkedHtmlElement;
		this._img =
			this._orientation === 'Horizontal'
				? MAPPED_SPRITES.AutoDoorH
				: MAPPED_SPRITES.AutoDoorV;
	}

	get id(): number {
		return this._id;
	}

	get coordinates(): Coordinates {
		return this._coordinates;
	}

	get img(): string {
		return this._img;
	}

	get linkedHtmlElement(): HTMLElement {
		return this._linkedHtmlElement;
	}

	get impassable(): boolean {
		return this._impassable;
	}

	get movable(): boolean {
		return this._movable;
	}

	get activated(): boolean {
		return this._activated;
	}

	activate(): void {
		this._impassable = false;
		this._img =
			this._orientation === 'Horizontal'
				? MAPPED_SPRITES.AutoDoorHActivated
				: MAPPED_SPRITES.AutoDoorVActivated;
	}
}
