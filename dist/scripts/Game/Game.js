class Game {
    constructor(render, ui) {
        this.render = render;
        this.ui = ui;
    }
    loadLevel(level) {
        const { mapObjects: { staticFields, mobileFields, mapArrows, goblet }, cows, arrows } = level;
        this.render.createCowHtmlElements(cows);
        // map fields
        this.staticFields = this.initStaticFields(staticFields);
        // this.mobileFields = this.initMobileFields(mobileFields);
        this.mapArrows = this.initMapArrows(mapArrows);
        this.goblet = new Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild);
        this.mapFields = this.getMapFields();
        // game objects
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
    /* initMobileFields(mobileFields: ILevel['mapObjects']['mobileFields']) {
         return Object.keys(mobileFields).map((objName: EntityName) =>
             mobileFields[objName].map((field: { coordinates: Coordinates }) =>
                 new HayBale(
                     objName,
                     field.coordinates,
                     <HTMLElement>
                 )
             )
         );
     }*/
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
        const mapFields = [];
        if (this.staticFields) {
            mapFields.concat(...this.staticFields);
        }
        if (this.mobileFields) {
            mapFields.concat(...this.mobileFields);
        }
        if (this.mapArrows) {
            mapFields.concat(...this.mapArrows);
        }
        if (this.goblet) {
            mapFields.concat(this.goblet);
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
        return this.staticFields.find((field) => field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y);
    }
    findFieldByHtmlElement(htmlElement) {
        return this.mapFields.find((field) => htmlElement === (field === null || field === void 0 ? void 0 : field.linkedHtmlElement));
    }
    findGameObjectByHtmlElement(htmlElement) {
        return this.getGameObjects().find((obj) => htmlElement === (obj === null || obj === void 0 ? void 0 : obj.linkedHtmlElement));
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
        return cow.color === "Brown" &&
            this.goblet.coordinates.x === cow.coordinates.x &&
            this.goblet.coordinates.y === cow.coordinates.y;
    }
    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                let canmove = true;
                let isVictory = false;
                Object.values(this.cows).forEach((cow) => {
                    switch (cow.direction) {
                        case "Up":
                            this.checkArrows(cow);
                            isVictory = this.checkGoblet(cow);
                            if (!this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 }))
                                cow.move();
                            break;
                        case "Right":
                            this.checkArrows(cow);
                            isVictory = this.checkGoblet(cow);
                            if (!this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y }))
                                cow.move();
                            break;
                        case "Down":
                            this.checkArrows(cow);
                            isVictory = this.checkGoblet(cow);
                            if (!this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 }))
                                cow.move();
                            break;
                        case "Left":
                            this.checkArrows(cow);
                            isVictory = this.checkGoblet(cow);
                            if (!this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y }))
                                cow.move();
                            break;
                    }
                });
                if (isVictory) {
                    this.endGame();
                    alert("YOU WIN!!!");
                }
                else {
                    this.renderScene();
                }
            }, 40);
        }
    }
    endGame() {
        clearInterval(this.loop);
    }
}
//# sourceMappingURL=Game.js.map