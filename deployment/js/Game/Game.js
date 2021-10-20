class Game {
    loop;
    staticFields;
    mobileFields;
    mapArrows;
    goblet;
    cows;
    arrows;
    render;
    ui;

    constructor(
            render = {},
            ui = {}
        ) {

        this.render = render;
        this.ui = ui;
    }

    loadLevel({
      mapObjects: {
          staticFields = {},
          mobileFields = {},
          mapArrows = {},
          goblet = {}
      },
      cows = {},
      arrows = {}
    }) {
        this.render.createCowHtmlElements(cows);
        // map fields
        this.staticFields = this.initStaticFields(staticFields);
        this.mobileFields = this.initMobileFields();
        this.mapArrows = this.initMapArrows(mapArrows);
        this.goblet = new Goblet(goblet, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild);
        this.mapFields = this.getMapFields();
        // game objects
        this.cows = this.initCows(cows);
        this.arrows = this.initArrows(arrows);
    }

    initStaticFields(staticFields) {
        return Object.keys(staticFields).map(fieldName => 
            staticFields[fieldName].map(fieldCoordinates => 
                new Field(fieldName, { x: fieldCoordinates[0], y: fieldCoordinates[1]}, true, false, this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild)
            )
        );
    }

    initMapArrows(mapArrows) {
        return Object.keys(mapArrows).map(arrowTypeName => 
            mapArrows[arrowTypeName].map(arrow =>
                new Arrow(arrowTypeName, arrow, this.ui.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild)  
            )
        ).flat(Infinity);
    }

    initCows(cows) {
        let count = 0;
        return Object.keys(cows).map(cowName => 
            cows[cowName].map(cow => 
                new Cow(cowName, cow, this.render.cowHtmlElements[count++])
            )
        );
    }

    initMobileFields(mobileFields) {
        return [];
    }

    initArrows(arrows) {
        let count = 0;
        return Object.keys(arrows).map(arrowColor =>
            Object.keys(arrows[arrowColor]).map(arrowDirection => {
                const arrowsArray = [];
                for (let i = 0; i < arrows[arrowColor][arrowDirection]; i++) {
                    arrowsArray.push(
                        new Arrow(
                            `${arrowColor + arrowDirection}`,
                            { coordinates: { x: null, y: null },
                            direction: arrowDirection, color: arrowColor },
                            this.ui.arrowsTable.flat(Infinity)[count++].firstChild
                        )
                    );
                }
                return arrowsArray;
            }) 
        ).flat(Infinity);
    }

    getAllMapObjects() {
        return [
            this.staticFields,
            this.mobileFields,
            this.mapArrows,
            this.goblet,
            this.cows
        ].flat(Infinity);
    }

    getMapFields() {
        return [
            this.staticFields,
            this.mobileFields,
            this.mapArrows,
            this.goblet
        ].flat(Infinity);
    }

    getGameObjects() {
        return [
            this.cows,
            this.mapArrows
        ].flat(Infinity);
    }

    getArrows() {
        return this.arrows.flat(Infinity);
    }

    findMapFieldByHtmlElement(htmlElement) {
        if (htmlElement instanceof HTMLElement) {
            return this.mapFields.find(field => 
                htmlElement === field?.linkedHtmlElement
            );
        }
    }

    findGameObjectByHtmlElement(htmlElement) {
        return this.getGameObjects().find(obj =>
            htmlElement === obj?.linkedHtmlElement
        );
    }

    drawArrows() {
        this.render.drawArrows(this.arrows);
    }

    renderScene() {
        this.clearScene();
        this.render.drawScene(this.staticFields, this.cows, this.mapArrows, this.goblet);
    }

    clearScene() {
        this.render.clearScene();
    }

    checkArrows(cow) {
        Object.values(this.mapArrows).forEach(arrow => {
            if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                cow.setDirection(arrow.direction);
                this.mapArrows.splice(this.mapArrows.indexOf(arrow), 1);
            }
        });
    }

    checkGoblet(cow) {
        return cow.type === "main" && this.goblet.coordinates.x === cow.coordinates.x && this.goblet.coordinates.y === cow.coordinates.y;
    }

    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                console.log("game is running");
                let canmove = true;
                let isVictory = false;
                Object.values(this.cows).forEach((objArr) => {
                    objArr.forEach((obj) => {
                        switch (obj.direction) {
                            case "up":
                                this.checkArrows(obj);
                                isVictory = this.checkGoblet(obj);
                                Object.values(this.staticFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (
                                            obj.coordinates.x === field.coordinates.x &&
                                            (obj.coordinates.y - 1) === field.coordinates.y &&
                                            obj.coordinates.y > 1 && 
                                            obj.coordinates.y < 14
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    obj.move();
                                }
                                break;
                            case "right":
                                this.checkArrows(obj);
                                isVictory = this.checkGoblet(obj);
                                Object.values(this.staticFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (
                                            (obj.coordinates.x + 1) === field.coordinates.x &&
                                            obj.coordinates.y === field.coordinates.y &&
                                            obj.coordinates.x > 1 &&
                                            obj.coordinates.x < 20
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    obj.move();
                                }
                                break;
                            case "down":
                                this.checkArrows(obj);
                                isVictory = this.checkGoblet(obj);
                                Object.values(this.staticFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (
                                            obj.coordinates.x === field.coordinates.x &&
                                            (obj.coordinates.y + 1) === field.coordinates.y &&
                                            obj.coordinates.y > 1 &&
                                            obj.coordinates.y < 14
                                        ) {
                                            canmove = false;

                                        }
                                    });
                                });
                                if (canmove) {
                                    obj.move();
                                }
                                break;
                            case "left":
                                this.checkArrows(obj);
                                isVictory = this.checkGoblet(obj);
                                Object.values(this.staticFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (
                                            (obj.coordinates.x - 1) === field.coordinates.x &&
                                            obj.coordinates.y === field.coordinates.y &&
                                            obj.coordinates.x > 1 &&
                                            obj.coordinates.x < 20
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    obj.move();
                                }
                                break;
                        }
                    });
                });
                if (isVictory) {
                    this.endGame();
                    alert("YOU WIN!!!");
                } else {
                    this.renderScene();
                }
            }, 40);
        }
    }

    endGame() {
        clearInterval(this.loop);
        this.loop = null;
    }
}