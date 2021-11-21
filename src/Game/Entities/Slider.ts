import { Field } from "./Field";
import { Coordinates, Direction } from "../../types";
import { MAPPED_SPRITES } from "../../MappedSprites";

export class Slider extends Field {
    private _direction: Direction;

    constructor(coordinates: Coordinates, direction: Direction, linkedHtmlElement: HTMLElement) {
        super(coordinates, true, false, linkedHtmlElement);
        this._direction = direction;
        this._img = this.setImg();
    }

    public get direction(): Direction {
        return this._direction;
    }

    setImg() {
        switch (this._direction) {
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