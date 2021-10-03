class Game {
    loop;
    fixedFields;
    arrows;
    render;
    ui;
    mapArrows;
    goblet;
    count = 0;

    constructor({ mapObjects: { fixedFields = {}, mapArrows = {}, goblet = {} } , gameObjects = {}, arrows = {} }, render = {}, ui = {}) {
        this.fixedFields = fixedFields;
        this.gameObjects = this.createGameObjectClasses(gameObjects);
        this.arrows = arrows;
        this.mapArrows = mapArrows;
        this.goblet = goblet;
        this.render = render;
        this.ui = ui;
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
        this.clearScene();
        this.render.drawScene(this.fixedFields, this.gameObjects, this.mapArrows, this.goblet);
    }

    clearScene() {
        this.render.clearScene();
    }

    checkArrows(cow) {
        Object.values(this.mapArrows).forEach(arrows => {
            arrows.forEach(arrow => {
                if (cow.coordinates.x === arrow.x && cow.coordinates.y === arrow.y) {
                    cow.setDirection(arrow.direction);
                    arrows.splice(arrows.indexOf(arrow), 1);
                };
            });
        });
    }

    checkGoblet(cow) {
        return cow.type === "main" && this.goblet.x === cow.coordinates.x && this.goblet.y === cow.coordinates.y ?
            true :
            false;
    }

    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                console.log("game is running");
                let canmove;
                let isVictory = false;
                Object.values(this.gameObjects).forEach((objArr) => {
                    objArr.forEach((obj) => {
                        switch (obj.direction) {
                            case "up":
                                canmove = true;
                                Object.values(this.fixedFields).forEach(fields => {
                                    fields.forEach(field => {
                                        if (obj.coordinates.x === field[0] &&
                                            (obj.coordinates.y - 1) === field[1] &&
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
                                        if ((obj.coordinates.x + 1) === field[0] &&
                                            obj.coordinates.y === field[1] &&
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
                                        if (obj.coordinates.x === field[0] &&
                                            (obj.coordinates.y + 1) === field[1] &&
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
                                        if ((obj.coordinates.x - 1) === field[0] &&
                                            obj.coordinates.y === field[1] &&
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