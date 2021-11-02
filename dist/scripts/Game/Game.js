class Game {
    constructor(render, ui) {
        this.render = render;
        this.ui = ui;
    }
    loadLevel(level) {
        const { mapObjects: { staticFields, mobileFields, mapArrows, goblet }, cows, arrows } = level;
        this.render.createCowHtmlElements(cows);
        this.render.createMobileFieldsHtmlElements(mobileFields);
        this.staticFields = this.initStaticFields(staticFields);
        this.mobileFields = this.initMobileFields(mobileFields);
        this.mapArrows = this.initMapArrows(mapArrows);
        this.goblet = new Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild);
        this.mapFields = this.getMapFields();
        this.cows = this.initCows(cows);
        this.arrows = this.initArrows(arrows);
    }
    initStaticFields(staticFields) {
        const staticFieldsArray = [];
        Object.keys(staticFields).forEach((fieldName) => staticFields[fieldName].forEach(fieldCoordinates => staticFieldsArray.push(new Field(fieldName, { x: fieldCoordinates[0], y: fieldCoordinates[1] }, true, false, this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild))));
        return staticFieldsArray;
    }
    initMapArrows(mapArrows) {
        const mapArrowsArray = [];
        Object.keys(mapArrows).forEach((arrowColor) => mapArrows[arrowColor].forEach((arrow) => mapArrowsArray.push(new Arrow(`Arrow${arrowColor + arrow.direction}`, arrow.coordinates, arrow.direction, arrowColor, this.ui.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild))));
        return mapArrowsArray;
    }
    initCows(cows) {
        let count = 0;
        return Object.values(cows).map((cow) => new Cow(`Cow${cow.color + cow.direction}`, cow.coordinates, cow.direction, cow.color, this.render.cowHtmlElements[count++]));
    }
    initMobileFields(mobileFields) {
        let count = 0;
        return Object.keys(mobileFields).reduce((mobileFieldsArr, objName) => mobileFieldsArr.concat(mobileFields[objName].map((coordinates) => new HayBale(objName, { x: coordinates[0], y: coordinates[1] }, this.render.mobileFields[count++]))), []);
    }
    initArrows(arrows) {
        let count = 0;
        const arrowsArray = [];
        Object.keys(arrows).forEach((arrowColor) => Object.keys(arrows[arrowColor]).forEach((arrowDirection) => {
            for (let i = 0; i < arrows[arrowColor][arrowDirection]; i++) {
                arrowsArray.push(new Arrow(`Arrow${arrowColor + arrowDirection}`, { x: undefined, y: undefined }, arrowDirection, arrowColor, this.ui.arrowsTable.flat(1)[count++].firstChild));
            }
        }));
        return arrowsArray;
    }
    getAllMapObjects() {
        return [
            ...this.staticFields,
            ...this.mobileFields,
            ...this.mapArrows,
            this.goblet,
            ...this.cows
        ];
    }
    getMapFields() {
        const mapFields = [...this.staticFields, this.goblet];
        if (this.mobileFields) {
            mapFields.concat(...this.mobileFields);
        }
        if (this.mapArrows) {
            mapFields.concat(...this.mapArrows);
        }
        return mapFields;
    }
    getGameObjects() {
        return [
            ...this.cows,
            ...this.mapArrows
        ];
    }
    getArrows() {
        return this.arrows;
    }
    findFieldByCoordinates(coordinates) {
        return [...this.staticFields, ...this.mobileFields].find((field) => field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y);
    }
    findFieldByHtmlElement(htmlElement) {
        return this.mapFields.find((field) => htmlElement === (field === null || field === void 0 ? void 0 : field.linkedHtmlElement));
    }
    findGameObjectByHtmlElement(htmlElement) {
        return this.getGameObjects().find((obj) => htmlElement === (obj === null || obj === void 0 ? void 0 : obj.linkedHtmlElement));
    }
    findArrowByHtmlElement(htmlElement) {
        return this.arrows.find((arrow) => arrow.linkedHtmlElement === htmlElement);
    }
    drawArrows() {
        this.render.drawArrows(this.arrows);
    }
    renderScene() {
        this.clearScene();
        this.render.drawScene(this.staticFields, { mobileFields: this.mobileFields, cows: this.cows }, this.mapArrows, this.goblet);
    }
    clearScene() {
        this.render.clearScene();
    }
    checkArrows(cow) {
        Object.values(this.mapArrows).forEach((arrow) => {
            if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                cow.direction = arrow.direction;
                this.mapArrows.splice(this.mapArrows.indexOf(arrow), 1);
            }
        });
    }
    checkGoblet(cow) {
        return cow.color === "Grey" &&
            this.goblet.coordinates.x === cow.coordinates.x &&
            this.goblet.coordinates.y === cow.coordinates.y;
    }
    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                let nextField;
                let isVictory = false;
                Object.values(this.cows).forEach((cow) => {
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        this.checkArrows(cow);
                        isVictory = this.checkGoblet(cow);
                        if (!isVictory) {
                            const currentField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y });
                            if ((currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideUp" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideRight" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideDown" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideLeft") {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
                                    if (nextField) {
                                        if (nextField.name === "SlideUp")
                                            cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                                case "Right":
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y });
                                    if (cow.layer === 1) {
                                        if (nextField) {
                                            if (nextField.name === "SlideRight")
                                                cow.move();
                                            if (nextField instanceof HayBale) {
                                                nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                                cow.move();
                                            }
                                        }
                                        else {
                                            cow.move();
                                        }
                                    }
                                    else {
                                        if (nextField) {
                                            cow.move();
                                        }
                                    }
                                    break;
                                case "Down":
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
                                    if (nextField) {
                                        if (nextField.name === "SlideDown")
                                            cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                                case "Left":
                                    nextField = this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y });
                                    if (nextField) {
                                        if (nextField.name === "SlideLeft")
                                            cow.move();
                                        if (nextField instanceof HayBale) {
                                            nextField.coordinates.x = Math.round((nextField.coordinates.x - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                            }
                        }
                        else {
                            this.endGame();
                            alert("YOU WIN!!!");
                        }
                    }
                    else {
                        let nextField;
                        switch (cow.direction) {
                            case "Up":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                }
                                break;
                            case "Right":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                }
                                break;
                            case "Down":
                                nextField = this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
                                if (nextField instanceof HayBale) {
                                    nextField.coordinates.x = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                }
                                break;
                            case "Left":
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
//# sourceMappingURL=Game.js.map