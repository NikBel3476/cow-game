import Render from '../Render';
import UI from '../UI';
import { ILevel, ICow } from '../Interfaces';
import { StaticFields, EntityName, ArrowColor, MapArrow, Direction, Coordinates } from '../types';
import { Field, HayBale, Arrow, Goblet, Cow } from "./Entities";

export default class Game {
    loop!: NodeJS.Timer;
    staticFields: Field[] = [];
    mobileFields: HayBale[] = [];
    mapArrows: Arrow[] = [];
    activeFields!: Field[];
    goblet!: Goblet;
    cows!: Cow[];
    mapFields!: (Field | HayBale)[];
    arrows!: Arrow[];
    render: Render;
    ui: UI;

    constructor(render: Render, ui: UI) {
        this.render = render;
        this.ui = ui;
    }

    loadLevel(level: ILevel) {
        const {mapObjects: {staticFields, mobileFields, mapArrows, activeFields, goblet}, cows, arrows}: ILevel = level;
        this.render.createCowHtmlElements(cows);
        this.render.createMobileFieldsHtmlElements(mobileFields);
        // map fields
        this.staticFields = this.initStaticFields(staticFields);
        this.mobileFields = this.initMobileFields(mobileFields);
        this.mapArrows = this.initMapArrows(mapArrows);
        // this.activeFields = this.initActiveFields(activeFields);
        this.goblet = this.initGoblet(goblet);
        this.mapFields = this.getMapFields();
        // game objects
        this.cows = this.initCows(cows);
        this.arrows = this.initArrows(arrows);
    }

    initStaticFields(staticFields?: StaticFields): Field[] {
        if (staticFields) {
            const staticFieldsArray: Field[] = [];
            (Object.keys(staticFields) as EntityName[]).forEach((fieldName: EntityName) =>
                staticFields[fieldName]?.forEach((fieldCoordinates: [number, number]) =>
                    staticFieldsArray.push(new Field(fieldName,
                        {x: fieldCoordinates[0], y: fieldCoordinates[1]},
                        true,
                        false,
                        this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild as HTMLElement)
                    )
                )
            );
            return staticFieldsArray;
        }
        return [];
    }

    initMobileFields(mobileFields?: ILevel['mapObjects']['mobileFields']): HayBale[] {
        if (mobileFields) {
            let count = 0;
            return (Object.keys(mobileFields) as EntityName[]).reduce((mobileFieldsArr: HayBale[], objName: EntityName) =>
                mobileFieldsArr.concat(mobileFields[objName]?.map((coordinates: [number, number]) =>
                    new HayBale(
                        objName,
                        {x: coordinates[0], y: coordinates[1]},
                        this.render.mobileFields[count++] as HTMLElement
                    )
                ) ?? []
                ), []);
        }
        return [];
    }

    initMapArrows(mapArrows?: ILevel['mapObjects']['mapArrows']): Arrow[] {
        if (mapArrows) {
            const mapArrowsArray: Arrow[] = [];
            (Object.keys(mapArrows) as ArrowColor[]).forEach((arrowColor: ArrowColor) =>
                mapArrows[arrowColor]?.forEach((arrow: MapArrow) =>
                    mapArrowsArray.push(
                        new Arrow(
                            `Arrow${arrowColor + arrow.direction}` as EntityName,
                            arrow.coordinates,
                            arrow.direction,
                            arrowColor,
                            this.ui.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
                )
            );
            return mapArrowsArray;
        }
        return [];
    }

    initCows(cows: ILevel['cows']) {
        let count = 0;
        return Object.values(cows).map((cow: ICow) =>
            new Cow(
                `Cow${cow.color + cow.direction}` as EntityName,
                cow.coordinates,
                cow.direction,
                cow.color,
                this.render.cowHtmlElements[count++]
            )
        );
    }

    initArrows(arrows: ILevel['arrows']) {
        let count = 0;
        const arrowsArray: Arrow[] = [];
        (Object.keys(arrows) as ArrowColor[]).forEach((arrowColor: ArrowColor) =>
            (Object.keys(arrows[arrowColor] as { [k in Direction]: number }) as Direction[]).forEach((arrowDirection: Direction) => {
                for (let i = 0; i < (arrows[arrowColor] as { [k in Direction]: number })[arrowDirection]; i++) {
                    arrowsArray.push(
                        new Arrow(
                            `Arrow${arrowColor + arrowDirection}` as EntityName,
                            {x: 0, y: 0},
                            arrowDirection,
                            arrowColor,
                            this.ui.arrowsTable.flat<HTMLElement[][]>(1)[count++].firstChild as HTMLElement
                        )
                    );
                }
            })
        );
        return arrowsArray;
    }

    /*initActiveFields(fields: ILevel['mapObjects']["activeFields"] | undefined): Field[] {
        if (fields) {
            const mobileFieldsArr: Field[] = [];
            (Object.keys(fields) as EntityName[]).forEach((fieldName: EntityName) => {
                fields[fieldName]?.forEach((coordinates: [number, number]) => {

                })
            });
        }
        return [];
    }*/

    initGoblet(goblet: ILevel['mapObjects']['goblet']): Goblet {
        return new Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
    }

    getAllMapObjects(): (Field | Cow | HayBale)[] {
        return [
            ...this.staticFields,
            ...this.mobileFields,
            ...this.mapArrows,
            this.goblet,
            ...this.cows
        ];
    }

    getMapFields(): (Field | HayBale)[] {
        const mapFields: (Field | HayBale)[] = [...this.staticFields, this.goblet];
        if (this.mobileFields) {
            mapFields.concat(...this.mobileFields)
        }
        if (this.mapArrows) {
            mapFields.concat(...this.mapArrows)
        }
        return mapFields;
    }

    getGameObjects(): (Arrow | Cow)[] {
        return [
            ...this.cows,
            ...this.mapArrows
        ];
    }

    getArrows(): Arrow[] {
        return this.arrows;
    }

    findFieldByCoordinates(coordinates: Coordinates): Field | HayBale | undefined {
        return [...this.staticFields, ...this.mobileFields].find((field: Field | HayBale) =>
            field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y);
    }

    findFieldByHtmlElement(htmlElement: HTMLElement): Field | HayBale | undefined {
        return this.mapFields.find((field: Field | HayBale) =>
            htmlElement === field?.linkedHtmlElement
        );
    }

    findGameObjectByHtmlElement(htmlElement: HTMLElement): Field | Cow | undefined {
        return this.getGameObjects().find((obj: Arrow | Cow) =>
            htmlElement === (obj?.linkedHtmlElement as HTMLElement)
        );
    }

    findArrowByHtmlElement(htmlElement: HTMLElement): Arrow | undefined {
        return this.arrows.find((arrow: Arrow) => arrow.linkedHtmlElement === htmlElement);
    }

    drawArrows(): void {
        this.render.drawArrows(this.arrows);
    }

    renderScene(): void {
        this.clearScene();
        this.render.drawScene(
            this.staticFields,
            {mobileFields: this.mobileFields, cows: this.cows},
            this.mapArrows, this.goblet
        );
    }

    clearScene(): void {
        this.render.clearScene();
    }

    checkArrows(cow: Cow): void {
        if (this.mapArrows) {
            Object.values(this.mapArrows).forEach((arrow: Arrow) => {
                if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                    cow.direction = arrow.direction;
                    this.mapArrows.splice(this.mapArrows.indexOf(arrow), 1);
                }
            });
        }
    }

    checkGoblet(cow: Cow): boolean {
        return cow.color === "Grey" &&
            this.goblet.coordinates.x === cow.coordinates.x &&
            this.goblet.coordinates.y === cow.coordinates.y;
    }

    startGame(): void {
        if (!this.loop) {
            this.loop = setInterval(() => {
                let nextField: Field | HayBale | undefined;
                let isVictory = false;
                Object.values(this.cows).forEach((cow: Cow) => {
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        this.checkArrows(cow);
                        isVictory = this.checkGoblet(cow);
                        if (!isVictory) {
                            const currentField: Field | HayBale | undefined = this.findFieldByCoordinates({
                                x: cow.coordinates.x,
                                y: cow.coordinates.y
                            });
                            if (
                                currentField?.name === "SlideUp" ||
                                currentField?.name === "SlideRight" ||
                                currentField?.name === "SlideDown" ||
                                currentField?.name === "SlideLeft"
                            ) {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextField = this.findFieldByCoordinates({
                                        x: cow.coordinates.x,
                                        y: cow.coordinates.y - 1
                                    });
                                    if (nextField) {
                                        if (nextField.name === "SlideUp") cow.move();
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
                                            if (nextField.name === "SlideRight") cow.move();
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
                                        if (nextField.name === "SlideDown") cow.move();
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
                                        if (nextField.name === "SlideLeft") cow.move();
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
                        let nextField: Field | HayBale | undefined;
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
        clearInterval(this.loop);
    }
}
