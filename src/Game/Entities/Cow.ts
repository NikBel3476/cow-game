import { Entity } from "./Entity";
import { Coordinates, Direction, CowColor } from "../../types";
import { MAPPED_SPRITES } from "../../MappedSprites";

export class Cow extends Entity {
    private _coordinates: Coordinates;
    private _direction: Direction;
    private _color: CowColor;
    private _layer: 1 | 2;

    constructor(
        coordinates: Coordinates,
        direction: Direction,
        color: CowColor,
        linkedHtmlElement: HTMLElement
    ) {
        super(linkedHtmlElement);
        this._coordinates = coordinates;
        this._direction = direction;
        this._color = color;
        this._img = this.setImg();
        this._layer = 1;
        console.log(this._img);
    }

    public get coordinates(): Coordinates {
        return this._coordinates;
    }

    public set coordinates(value: Coordinates) {
        this._coordinates = value;
    }

    public get direction(): Direction {
        return this._direction;
    }

    public set direction(direction: Direction) {
        this._direction = direction;
        this._img = this.setImg();
    }

    public get color(): CowColor {
        return this._color;
    }

    public set color(color: CowColor) {
        this._color = color;
    }

    public get layer(): 1 | 2 {
        return this._layer;
    }

    public set layer(layer: 1 | 2) {
        this._layer = layer;
    }

    setImg(): string {
        switch (this._direction) {
            case "Up":
                return MAPPED_SPRITES.CowGreyUp; /*this._color === 'Grey' : GreyUpSprite : BrownUpSprite;*/
            case "Right":
                return MAPPED_SPRITES.CowGreyRight; /*this._color === 'Grey' : GreyRightSprite : BrownRightSprite;*/
            case "Down":
                return MAPPED_SPRITES.CowGreyDown; /*this._color === 'Grey' : GreyDownSprite : BrownDownSprite;*/
            case "Left":
                return MAPPED_SPRITES.CowGreyLeft; /*this._color === 'Grey' : GreyLeftSprite : BrownLeftSprite;*/
        }
    }

    move(direction: Direction = this._direction) {
        switch (direction) {
            case "Up":
                this.coordinates.y = Math.round((this.coordinates.y - 0.1) * 100) / 100;
                if (this._direction !== "Up") {
                    this.direction = "Up";
                }
                break;
            case "Right":
                this.coordinates.x = Math.round((this.coordinates.x + 0.1) * 100) / 100;
                if (this._direction !== "Right") {
                    this.direction = "Right";
                }
                break;
            case "Down":
                this.coordinates.y = Math.round((this.coordinates.y + 0.1) * 100) / 100;
                if (this._direction !== "Down") {
                    this.direction = "Down";
                }
                break;
            case "Left":
                this.coordinates.x = Math.round((this.coordinates.x - 0.1) * 100) / 100;
                if (this._direction !== "Left") {
                    this.direction = "Left";
                }
                break;
            default:
                throw new Error("Wrong cow direction");
        }
    }
}
