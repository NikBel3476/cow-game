import { IField } from "../IField";
import { Coordinates, MAPPED_SPRITES } from "../../../../types";
import { AutoDoor } from "./Doors";
import { Piston } from "./Piston";

export class Button implements IField {
    private _coordinates: Coordinates;
    private _linkedElementsIds: number[];
    private _linkedHtmlElement: HTMLElement;
    private _linkedElements!: (AutoDoor | Piston)[];
    private _img: string = MAPPED_SPRITES.Button;
    private _impassable: boolean = false;
    private _movable: boolean = false;

    constructor(coordinates: Coordinates, linkedElementsIds: number[], linkedHtmlElement: HTMLElement) {
        this._coordinates = coordinates;
        this._linkedElementsIds = linkedElementsIds;
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

    get linkedElementsIds(): number[] {
        return this._linkedElementsIds;
    }

    get linkedHtmlElement(): HTMLElement {
        return this._linkedHtmlElement;
    }

    get movable(): boolean {
        return this._movable;
    }

    get linkedElements(): (AutoDoor | Piston)[] {
        return this._linkedElements;
    }

    set linkedElements(fields: (AutoDoor | Piston)[]) {
        this._linkedElements = fields;
    }

    activate() {
        this._linkedElements?.forEach(elem => elem.activate());
    }
}
