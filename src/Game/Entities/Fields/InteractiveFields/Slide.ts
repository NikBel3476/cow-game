import { IField } from "../IField";
import { Coordinates, Direction, MAPPED_SPRITES } from "../../../../types";

export class Slide implements IField {
    private _coordinates: Coordinates;
    private _direction: Direction;
    private _img: string;
    private _linkedHtmlElement: HTMLElement;
    private _impassable: boolean = true;
    private _movable: boolean = false;

    constructor(coordinates: Coordinates, direction: Direction, linkedHtmlElement: HTMLElement) {
        this._coordinates = coordinates
        this._direction = direction;
        this._img = this.getImg();
        this._linkedHtmlElement = linkedHtmlElement;
    }

    public get coordinates(): Coordinates {
        return this._coordinates;
    }

    public get direction(): Direction {
        return this._direction;
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

    getImg() {
        switch(this.direction) {
            case "Up":
                return MAPPED_SPRITES.SlideUp
            case "Right":
                return MAPPED_SPRITES.SlideRight
            case "Down":
                return MAPPED_SPRITES.SlideDown
            case "Left":
                return MAPPED_SPRITES.SlideLeft
        }
    }
}
