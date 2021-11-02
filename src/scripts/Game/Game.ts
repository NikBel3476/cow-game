class Game {
    loop: number;
    staticFields: Field[];
    mobileFields: HayBale[];
    mapArrows: Arrow[];
    goblet: Goblet;
    cows: Cow[];
    mapFields: (Field | HayBale)[];
    arrows: Arrow[];
    render: Render;
    ui: UI;

    constructor(
            render: Render,
            ui: UI
        ) {
        this.render = render;
        this.ui = ui;
    }

    loadLevel(level : ILevel) {
        const { mapObjects: { staticFields, mobileFields, mapArrows, goblet }, cows, arrows } : ILevel = level;
        this.render.createCowHtmlElements(cows);
        this.render.createMobileFieldsHtmlElements(mobileFields);
        // map fields
        this.staticFields = this.initStaticFields(staticFields);
        this.mobileFields = this.initMobileFields(mobileFields);
        this.mapArrows = this.initMapArrows(mapArrows);
        this.goblet = new Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement);
        this.mapFields = this.getMapFields();
        // game objects
        this.cows = this.initCows(cows);
        this.arrows = this.initArrows(arrows);
    }

    initStaticFields(staticFields: StaticFields) {
        const staticFieldsArray: Field[] = [];
        Object.keys(staticFields).forEach((fieldName: keyof StaticFields) =>
            staticFields[fieldName].forEach(fieldCoordinates =>
                staticFieldsArray.push(new Field(fieldName,
                    { x: fieldCoordinates[0], y: fieldCoordinates[1]},
                    true,
                    false,
                    this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild as HTMLElement)
                )
            )
        );
        return staticFieldsArray;
    }

    initMapArrows(mapArrows: ILevel['mapObjects']['mapArrows']) {
        const mapArrowsArray: Arrow[] = [];
        Object.keys(mapArrows).forEach((arrowColor: keyof ILevel['mapObjects']['mapArrows']) =>
            mapArrows[arrowColor].forEach((arrow: MapArrow) =>
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

    initMobileFields(mobileFields: ILevel['mapObjects']['mobileFields']) {
        let count = 0;
        return Object.keys(mobileFields).reduce((mobileFieldsArr: HayBale[], objName: EntityName) =>
            mobileFieldsArr.concat(mobileFields[objName].map((coordinates: [number, number]) =>
                new HayBale(
                    objName,
                    { x: coordinates[0], y: coordinates[1] },
                    <HTMLElement>this.render.mobileFields[count++]
                )
            )
            ), []);
    }

    initArrows(arrows: ILevel['arrows']) {
        let count = 0;
        const arrowsArray: Arrow[] = [];
        Object.keys(arrows).forEach((arrowColor: keyof ILevel['arrows']) =>
            Object.keys(arrows[arrowColor]).forEach((arrowDirection: Direction) => {
                for (let i = 0; i < arrows[arrowColor][arrowDirection]; i++) {
                    arrowsArray.push(
                        new Arrow(
                            `Arrow${arrowColor + arrowDirection}` as EntityName,
                            { x: undefined, y: undefined },
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

    findFieldByHtmlElement(htmlElement: HTMLElement): (Field | HayBale) {
        return this.mapFields.find((field: Field) =>
            htmlElement === field?.linkedHtmlElement
        );
    }

    findGameObjectByHtmlElement(htmlElement: HTMLElement): Field | Cow {
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
            { mobileFields: this.mobileFields, cows: this.cows },
            this.mapArrows, this.goblet
        );
    }

    clearScene(): void {
        this.render.clearScene();
    }

    checkArrows(cow: Cow): void {
        Object.values(this.mapArrows).forEach((arrow: Arrow) => {
            if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                cow.direction = arrow.direction;
                this.mapArrows.splice(this.mapArrows.indexOf(arrow), 1);
            }
        });
    }

    checkGoblet(cow: Cow): boolean {
        return cow.color === "Grey" &&
            this.goblet.coordinates.x === cow.coordinates.x &&
            this.goblet.coordinates.y === cow.coordinates.y;
    }

    startGame(): void {
        if (!this.loop) {
            this.loop = setInterval(() => {
                let nextField: Field | HayBale;
                let isVictory = false;
                Object.values(this.cows).forEach((cow: Cow) => {
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        this.checkArrows(cow);
                        isVictory = this.checkGoblet(cow);
                        if (!isVictory) {
                            const currentField: Field | HayBale = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y});
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
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
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
                                    nextField = this.findFieldByCoordinates({ x:cow.coordinates.x + 1, y: cow.coordinates.y });
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
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
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
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y });
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
                        let nextField: Field | HayBale;
                        switch (cow.direction) {
                            case"Up":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                }
                                break;
                            case"Right":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                }
                                break;
                            case"Down":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                }
                                break;
                            case"Left":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y });
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