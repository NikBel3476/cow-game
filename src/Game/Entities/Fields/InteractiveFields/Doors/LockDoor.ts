import { IField } from "../../IField";
import { Coordinates, MAPPED_SPRITES } from "../../../../../types";
import { DoorsOrientation } from "./DoorsOrientation";

export class LockDoor implements IField {
    private _coordinates: Coordinates;
    private _orientation: DoorsOrientation;
    private _linkedHtmlElement: HTMLElement;
    private _img: string;
    private _impassable: boolean = true;
    private _movable: boolean = false;

    constructor(coordinates: Coordinates, orientation: DoorsOrientation, linkedHtmlElement: HTMLElement) {
        this._coordinates = coordinates;
        this._orientation = orientation;
        this._linkedHtmlElement = linkedHtmlElement;
        this._img = orientation === 'Horizontal' ? MAPPED_SPRITES.LockDoorH : MAPPED_SPRITES.LockDoorV;
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
