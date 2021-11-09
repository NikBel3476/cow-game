import CONF from '../../Conf';
import { Entity } from "./Entity";
import { Coordinates, Direction, CowColor, EntityName} from "../../types";

export class Cow extends Entity {
    public coordinates: Coordinates;
    private _direction: Direction;
    public color: CowColor;
    public layer: 1 | 2;

    constructor(name: EntityName, coordinates: Coordinates, direction: Direction, color: CowColor, linkedHtmlElement: HTMLElement) {
        super(name, linkedHtmlElement);
        this.coordinates = coordinates;
        this._direction = direction;
        this.color = color;
        this.imgUrl = this.generateImgUrl();
        this.layer = 1;
    }

    public get direction(): Direction {
        return this._direction;
    }

    public set direction(direction: Direction) {
        this._direction = direction;
        this.imgUrl = this.generateImgUrl();
    }

    generateImgUrl(): string {
        return CONF.ImgPath[`CowGrey${this._direction}`];
    }

    move(direction: Direction = this._direction) {
        switch(direction) {
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
        }
    }
}