import Render from '../Render';
import UI from '../UI';
import { ILevel, ICow } from '../Interfaces';
import { ArrowColor, Direction, Coordinates, SpriteName } from '../types';
import { IField, HayBale, Arrow, Goblet, Cow, Slide, Pit, Key } from "./Entities";
import { MAPPED_SPRITES } from "../types";
import { Field } from "./Entities/Fields/Field";

export default class Game {
    private _nonInteractiveFields: Field[] = [];
    private _goblet!: Goblet;
    private _slides!: Slide[];
    private _hayBales!: HayBale[];
    private _pits!: Pit[];
    private _keys!: Key[];
    private _cows!: Cow[];
    private _arrows!: Arrow[];
    private _loop!: NodeJS.Timer;
    render: Render;
    ui: UI;

    constructor(render: Render, ui: UI) {
        this.render = render;
        this.ui = ui;
    }

    loadLevel(level: ILevel) {
        const {
            MapObjects: {
                NonInteractive,
                Interactive: {
                    Goblet,
                    Slide,
                    HayBale,
                    Pit,
                    Key,
                    ActivatingCouple
                },
            },
            GameObjects: {
                Cows,
                Arrows
            }
        } = level;
        this.render.createCowHtmlElements(Cows);
        this.render.createMovableHtmlElements(HayBale);
        this._nonInteractiveFields = this.initNonInteractiveFields(NonInteractive);
        this._goblet = this.initGoblet(Goblet);
        this._slides = this.initSlides(Slide);
        this._hayBales = this.initHayBales(HayBale);
        this._pits = this.initPits(Pit);
        this._keys = this.initKeys(Key);

        this._cows = this.initCows(Cows);
        this._arrows = this.initArrows(Arrows);
    }

    initNonInteractiveFields(staticFields?: ILevel['MapObjects']['NonInteractive']): Field[] {
        const staticFieldsArray: Field[] = [];
        if (staticFields) {
            (Object.keys(staticFields) as SpriteName[]).forEach((fieldName) =>
                staticFields[fieldName]?.forEach((fieldCoordinates) =>
                    staticFieldsArray.push(
                        new Field(
                            { x: fieldCoordinates[0], y: fieldCoordinates[1] },
                            MAPPED_SPRITES[fieldName],
                            this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild as HTMLElement
                        )
                    )
                )
            );
        }
        return staticFieldsArray;
    }

    initGoblet(goblet: ILevel['MapObjects']['Interactive']['Goblet']): Goblet {
        return new Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
    }

    initSlides(slides: ILevel['MapObjects']['Interactive']['Slide']): Slide[] {
        const slidesArr: Slide[] = [];
        if (slides) {
            (Object.keys(slides) as Direction[]).forEach((slideDirection) =>
                slides[slideDirection].forEach(coordinates => {
                    slidesArr.push(
                        new Slide(
                        { x: coordinates.x, y: coordinates.y },
                            slideDirection,
                            this.render.gameTable[coordinates.x - 1][coordinates.y - 1]
                        )
                    )
                })
            )
        }
        return slidesArr;
    }

    initHayBales(hayBales: ILevel['MapObjects']['Interactive']['HayBale']): HayBale[] {
        const hayBalesArr: HayBale[] = [];
        if (hayBales) {
            Object.values(hayBales).forEach(coordinates =>
                hayBalesArr.push(
                    new HayBale(
                        coordinates,
                        this.render.gameTable[coordinates.x - 1][coordinates.y - 1]
                    )
                )
            )
        }
        return hayBalesArr;
    }

    initPits(pits: ILevel['MapObjects']['Interactive']['Pit']): Pit[] {
        const pitsArr: Pit[] = [];
        if (pits) {
            Object.values(pits).forEach(pit =>
                new Pit(
                    pit.coordinates,
                    this.render.gameTable[pit.coordinates.x - 1][pit.coordinates.y - 1],
                    pit.activated
                )
            )
        }
        return pitsArr;
    }

    initKeys(keys: ILevel['MapObjects']['Interactive']['Key']): Key[] {
        const keysArr: Key[] = [];
        if (keys) {
            Object.values(keys).forEach(coordinates =>
                keysArr.push(
                    new Key(
                        coordinates,
                        this.render.gameTable[coordinates.x - 1][coordinates.y - 1]
                    )
                )
            )
        }
        return keysArr;
    }

    initCows(cows: ILevel['GameObjects']['Cows']) {
        let count = 0;
        return Object.values(cows).map((cow: ICow) =>
            new Cow(
                cow.coordinates,
                cow.direction,
                cow.color,
                this.render.cowHtmlElements[count++]
            )
        );
    }

    initArrows(arrows: ILevel['GameObjects']['Arrows']): Arrow[] {
        const arrowsArr: Arrow[] = [];
        let count = 0;
        (Object.keys(arrows) as ArrowColor[]).forEach(color => {
            (Object.keys(arrows[color]) as Direction[]).forEach(direction => {
                arrows[color][direction].forEach(coordinates => {
                    if (coordinates) {
                        arrowsArr.push(
                            new Arrow(
                                direction,
                                color,
                                this.render.gameTable[coordinates.x - 1][coordinates.y - 1],
                                coordinates
                            )
                        )
                    } else {
                        arrowsArr.push(
                            new Arrow(
                                direction,
                                color,
                                this.ui.arrowsTable.flat(1)[count++]
                            )
                        )
                    }
                });
            })
        })
        return arrowsArr;
    }

    getGameObjects(): (Arrow | Cow)[] {
        return [
            ...this._cows,
            ...this._arrows
        ];
    }

    /*findFieldByCoordinates(coordinates: Coordinates): IField | HayBale | undefined {
        return [...this.staticFields, ...this.mobileFields].find((field: IField | HayBale) =>
            field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y);
    }*/

    /*findFieldByHtmlElement(htmlElement: HTMLElement): IField | Arrow | undefined {
        return this.mapFields.find((field: IField | Arrow) =>
            htmlElement === field?.linkedHtmlElement
        );
    }*/

    findGameObjectByHtmlElement(htmlElement: HTMLElement): Arrow | Cow | undefined {
        return this.getGameObjects().find((obj: Arrow | Cow) =>
            htmlElement === (obj?.linkedHtmlElement as HTMLElement)
        );
    }

    /*findArrowByHtmlElement(htmlElement: HTMLElement): Arrow | undefined {
        return this.arrows.find((arrow: Arrow) => arrow.linkedHtmlElement === htmlElement);
    }*/

    /*drawArrows(): void {
        this.render.drawArrows(this.arrows);
    }*/

    /*renderScene(): void {
        this.clearScene();
        this.render.drawScene(
            this.staticFields,
            {mobileFields: this.mobileFields, cows: this.cows},
            this.mapArrows, this.goblet
        );
    }*/

    clearScene(): void {
        this.render.clearScene();
    }

    checkArrows(cow: Cow): void {
        if (this._arrows) {
            Object.values(this._arrows).forEach((arrow: Arrow) => {
                    if (arrow?.coordinates && cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                        cow.direction = arrow.direction;
                        this._arrows.splice(this._arrows.indexOf(arrow), 1);
                    }
            });
        }
    }

    checkGoblet(cow: Cow): boolean {
        return cow.color === "Grey" &&
            this._goblet.coordinates.x === cow.coordinates.x &&
            this._goblet.coordinates.y === cow.coordinates.y;
    }

    startGame(): void {
        if (!this._loop) {
            this._loop = setInterval(() => {
                let nextField: IField | HayBale | undefined;
                let isVictory = false;
                Object.values(this._cows).forEach((cow: Cow) => {
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        this.checkArrows(cow);
                        isVictory = this.checkGoblet(cow);
                        if (!isVictory) {
                            const currentField: IField | HayBale | undefined = this.findFieldByCoordinates({
                                x: cow.coordinates.x,
                                y: cow.coordinates.y
                            });
                            if (currentField instanceof Slide) {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextField = this.findFieldByCoordinates({
                                        x: cow.coordinates.x,
                                        y: cow.coordinates.y - 1
                                    });
                                    if (nextField) {
                                        if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    } else {
                                        cow.move();
                                    }
                                    break;
                                case "Right":
                                    nextField = this.findFieldByCoordinates({
                                        x: cow.coordinates.x + 1,
                                        y: cow.coordinates.y
                                    });
                                    if (cow.layer === 1) {
                                        if (nextField) {
                                            if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                                            if (nextField instanceof HayBale) {
                                                nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                                cow.move();
                                            }
                                        } else {
                                            cow.move();
                                        }
                                    } else {
                                        if (nextField) {
                                            cow.move()
                                        }
                                    }
                                    break;
                                case "Down":
                                    nextField = this.findFieldByCoordinates({
                                        x: cow.coordinates.x,
                                        y: cow.coordinates.y + 1
                                    });
                                    if (nextField) {
                                        if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    } else {
                                        cow.move();
                                    }
                                    break;
                                case "Left":
                                    nextField = this.findFieldByCoordinates({
                                        x: cow.coordinates.x - 1,
                                        y: cow.coordinates.y
                                    });
                                    if (nextField) {
                                        if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.x = Math.round((nextField.coordinates.x - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    } else {
                                        cow.move();
                                    }
                                    break;
                            }
                        } else {
                            this.endGame();
                            alert("YOU WIN!!!");
                        }
                    } else { // FIXME: delete switch
                        let nextField: IField | HayBale | undefined;
                        switch (cow.direction) {
                            case "Up":
                                nextField = this.findFieldByCoordinates({
                                    x: cow.coordinates.x,
                                    y: cow.coordinates.y - 1
                                });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                }
                                break;
                            case "Right":
                                nextField = this.findFieldByCoordinates({
                                    x: cow.coordinates.x + 1,
                                    y: cow.coordinates.y
                                });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                }
                                break;
                            case "Down":
                                nextField = this.findFieldByCoordinates({
                                    x: cow.coordinates.x,
                                    y: cow.coordinates.y + 1
                                });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                }
                                break;
                            case "Left":
                                nextField = this.findFieldByCoordinates({
                                    x: cow.coordinates.x - 1,
                                    y: cow.coordinates.y
                                });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.x - 0.1) * 100) / 100;
                                }
                                break;
                        }
                        cow.move();
                    }
                });
                this.renderScene();
            }, 40);
        }
    }

    endGame() {
        clearInterval(this._loop);
    }
}
