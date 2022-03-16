import { IField } from "../IField";
import { Coordinates, MAPPED_SPRITES } from "../../../../types";

export class HayBale implements IField {
  private _coordinates: Coordinates;
  private _linkedHtmlElement: HTMLElement;
  private _img: string = MAPPED_SPRITES.HayBale;
  private _impassable: boolean = true;
  private _movable: boolean = true;

  constructor(coordinates: Coordinates, linkedHtmlElement: HTMLElement) {
    this._coordinates = coordinates;
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

  get linkedHtmlElement(): HTMLElement {
    return this._linkedHtmlElement;
  }

  get movable(): boolean {
    return this._movable;
  }
}
