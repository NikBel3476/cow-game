import CONF from '../../Conf';
import { Entity } from "./Entity";
import { Coordinates } from "../../types";

export class Field extends Entity {
    protected _coordinates: Coordinates;
    protected _impassable: boolean; // true - непроходимый
    protected _movable: boolean; // true - можно двигать

    constructor(
        coordinates: Coordinates,
        impassable = true,
        movable = false,
        linkedHtmlElement: HTMLElement
    ) {
        super(linkedHtmlElement);
        this._coordinates = coordinates;
        this._impassable = impassable;
        this._movable = movable;
    }

    public get coordinates(): Coordinates {
        return this._coordinates;
    }

    public set coordinates(value: Coordinates) {
        this._coordinates = value;
    }

    public get impassable(): boolean {
        return this._impassable;
    }

    public set impasable(value: boolean) {
        this._impassable = value;
    }

    public get movable(): boolean {
        return this._movable;
    }

    public set movable(value: boolean) {
        this._movable = value;
    }
}
