import { Field } from "./Field";

import { MAPPED_SPRITES } from "../../MappedSprites";

import { Direction, ArrowColor, Coordinates } from "../../types";

export class Arrow extends Field {
    private _direction: Direction;
    private _color: ArrowColor;

    constructor(
        coordinates: Coordinates,
        direction: Direction,
        color: ArrowColor,
        linkedHtmlElement: HTMLElement
    ) {
        super(coordinates, false, false, linkedHtmlElement);
        this._direction = direction;
        this._color = color;
        this._linkedHtmlElement = linkedHtmlElement;
        this._img = this.setImg();
    }

    public get direction(): Direction {
        return this._direction;
    }

    public set direction(direction: Direction) {
        this._direction = direction;
    }

    public get color(): ArrowColor {
        return this._color;
    }

    public set color(color: ArrowColor) {
        this._color = color;
    }

    setImg() {
        switch (this._direction) {
            case "Up":
                return this._color === 'Red' ? MAPPED_SPRITES.ArrowRedUp : MAPPED_SPRITES.ArrowBlueUp;
            case "Right":
                return this._color === 'Red' ? MAPPED_SPRITES.ArrowRedRight : MAPPED_SPRITES.ArrowBlueRight;
            case "Down":
                return this._color === 'Red' ? MAPPED_SPRITES.ArrowRedDown : MAPPED_SPRITES.ArrowBlueDown;
            case "Left":
                return this._color === 'Red' ? MAPPED_SPRITES.ArrowRedLeft : MAPPED_SPRITES.ArrowBlueLeft;
        }
    }

}
