class Game {
    loop;
    fixedFields;
    arrows;
    render;
    ui;
    mapArrows;
    goblet;

    constructor({ mapObjects: { fixedFields = {}, mapArrows = {}, goblet = {} } , gameObjects = {}, arrows = {} }, render = {}, ui = {}) {
        this.render = render;
        this.ui = ui;
        this.fixedFields = Object.keys(fixedFields).map(fieldName => 
            fixedFields[fieldName].map(fieldCoordinates => 
                new Field(fieldName, { x: fieldCoordinates[0], y: fieldCoordinates[1]}, true, false, this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild)
            )
        );
        this.gameObjects = this.createGameObjectClasses(gameObjects);
        this.mapArrows = Object.keys(mapArrows).map(arrowTypeName => 
            mapArrows[arrowTypeName].map(arrow =>
                new Arrow(arrowTypeName, arrow, this.ui.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild)  
            )
        );
        this.arrows = arrows;
        this.goblet = new Goblet(goblet, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1]);
    }

    createGameObjectClasses(gameObjects = {}) {
        let gameObjs = {};
        Object.keys(gameObjects).forEach((objName) => {
            gameObjs[objName] = gameObjects[objName].map(obj => new Cow(obj));
        });
        return gameObjs;
    }

    drawArrows() {
        this.render.drawArrows(this.arrows);
    }

    renderScene() {
        // this.clearScene();
        this.render.drawScene(this.fixedFields, this.gameObjects, this.mapArrows, this.goblet);
    }

    clearScene() {
        this.render.clearScene();
    }

    checkArrows(cow) {
        Object.values(this.mapArrows).forEach(arrows => {
            arrows.forEach(arrow => {
                if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                    cow.setDirection(arrow.direction);
                    arrows.splice(arrows.indexOf(arrow), 1);
                };
            });
        });
    }

    checkGoblet(cow) {
        return cow.type === "main" && this.goblet.coordinates.x === cow.coordinates.x && this.goblet.coordinates.y === cow.coordinates.y ?
            true :
            false;
    }

    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                console.log("game is running");

                // логика ходьбы коровы
                let canmove;
                let isVictory = false;
                Object.values(this.gameObjects).forEach((objArr) => {
                    objArr.forEach((obj) => {
                        switch (obj.direction) {
                            case "up":
                                canmove = true;
                                Object.values(this.fixedFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (obj.coordinates.x === field.coordinates.x &&
                                            (obj.coordinates.y - 1) === field.coordinates.y &&
                                            obj.coordinates.y > 1 && 
                                            obj.coordinates.y < 14
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    this.checkArrows(obj);
                                    isVictory = this.checkGoblet(obj);
                                    obj.move();
                                }
                                break;
                            case "right":
                                canmove = true;
                                Object.values(this.fixedFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if ((obj.coordinates.x + 1) === field.coordinates.x &&
                                            obj.coordinates.y === field.coordinates.y &&
                                            obj.coordinates.x > 1 &&
                                            obj.coordinates.x < 20
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    this.checkArrows(obj);
                                    isVictory = this.checkGoblet(obj);
                                    obj.move();
                                }
                                break;
                            case "down":
                                canmove = true;
                                Object.values(this.fixedFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (obj.coordinates.x === field.coordinates.x &&
                                            (obj.coordinates.y + 1) === field.coordinates.y &&
                                            obj.coordinates.y > 1 &&
                                            obj.coordinates.y < 14
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    this.checkArrows(obj);
                                    isVictory = this.checkGoblet(obj);
                                    obj.move();
                                }
                                break;
                            case "left":
                                canmove = true;
                                Object.values(this.fixedFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if ((obj.coordinates.x - 1) === field.coordinates.x &&
                                            obj.coordinates.y === field.coordinates.y &&
                                            obj.coordinates.x > 1 &&
                                            obj.coordinates.x < 20
                                        ) {
                                            canmove = false;
                                        }
                                    });
                                });
                                if (canmove) {
                                    this.checkArrows(obj);
                                    isVictory = this.checkGoblet(obj);
                                    obj.move();
                                }
                                break;
                        }
                    });
                });
                this.renderScene();
                if (isVictory) {
                    this.endGame();
                    alert("YOU WIN!!!");
                }
            }, 40);
        }
    }

    endGame() {
        clearInterval(this.loop);
        this.loop = null;
    }
}