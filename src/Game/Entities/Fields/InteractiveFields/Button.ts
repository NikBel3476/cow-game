import { IField } from "../IField";
import { Coordinates, MAPPED_SPRITES } from "../../../../types";
import { AutoDoor } from "./Doors";
import { Piston } from "./Piston";

export class Button implements IField {
    private _coordinates: Coordinates;
    private _linkedHtmlElement: HTMLElement;
    private _linkedElements: (AutoDoor | Piston)[];
    private _img: string = MAPPED_SPRITES.Button;
    private _impassable: boolean = false;
    private _movable: boolean = false;

    constructor(coordinates: Coordinates, linkedElements: (AutoDoor | Piston)[], linkedHtmlElement: HTMLElement) {
        this._coordinates = coordinates;
        this._linkedHtmlElement = linkedHtmlElement;
        this._linkedElements = linkedElements;
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
        this._linkedElements.forEach(elem => elem.activate());
    }
}
