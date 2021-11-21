export class Entity {
    protected _img!: string;
    protected _linkedHtmlElement: HTMLElement;

    constructor(linkedHtmlElement: HTMLElement) {
        this._linkedHtmlElement = linkedHtmlElement;
    }

    public get img() {
        return this._img;
    }

    public set img(img: string) {
        this._img = img;
    }

    public get linkedHtmlElement(): HTMLElement {
        return this._linkedHtmlElement
    }

    public set linkedHtmlElement(htmlElem: HTMLElement) {
        this._linkedHtmlElement = htmlElem;
    }
}
