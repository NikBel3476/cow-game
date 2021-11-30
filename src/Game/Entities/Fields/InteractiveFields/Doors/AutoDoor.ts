import { IField } from "../../IField";
import { Coordinates, MAPPED_SPRITES } from "../../../../../types";
import { DoorOrientation } from "./DoorOrientation";

export class AutoDoor implements IField {
    private _coordinates: Coordinates;
    private _img: string;
    private _linkedHtmlElement: HTMLElement;
    private _impassable: boolean = true;
    private _movable: boolean = false;
    private _activated: boolean = false;

    constructor(coordinates: Coordinates, orientation: DoorOrientation, linkedHtmlElement: HTMLElement) {
        this._coordinates = coordinates;
        this._linkedHtmlElement = linkedHtmlElement;
        this._img = orientation === 'Horizontal' ? MAPPED_SPRITES.AutoDoorH : MAPPED_SPRITES.AutoDoorV;
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
}
