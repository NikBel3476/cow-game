class Game {
    loop;
    fields;
    arrows;
    render;
    mapArrows;
    goblet;

    constructor({ mapObjects: { fields = {}, mapArrows = {}, goblet = {} } , gameObjects = {}, arrows = {} }, render = {}) {
        this.fields = fields;
        this.gameObjects = this.createObjClasses(gameObjects);
        this.arrows = arrows;
        this.mapArrows = mapArrows;
        this.goblet = goblet;
        this.render = render;
    }

    createObjClasses(gameObjects = {}) {
        let gameObjs = {};
        Object.keys(gameObjects).forEach((objName) => {
            gameObjs[objName] = new Cow(gameObjects[objName]);
        });
        return gameObjs;
    }

    renderScene() {
        this.clearScene();
        this.render.drawScene(this.fields, this.gameObjects, this.mapArrows, this.goblet);
    }

    clearScene() {
        this.render.clearScene();
    }

    checkArrows(cow) {
        Object.values(this.mapArrows).forEach(arrows => {
            arrows.forEach((arrow) => {
                if (cow.coordinates.x === arrow.x && cow.coordinates.y === arrow.y) {
                    cow.direction = arrow.direction;
                    arrows.splice(arrows.indexOf(arrow), 1);
                };
            });
        });
        console.log(this.mapArrows);
    }

    checkGoblet(cow) {
        if (this.goblet.x === cow.coordinates.x && this.goblet.y === cow.coordinates.y) {
            alert("YOU WIN!!!");
            this.endGame();
        }
    }

    startGame() {
        if (!this.loop) {
            this.loop = setInterval(() => {
                console.log("game is running");
                this.renderScene();
                let canmove;
                Object.values(this.gameObjects).forEach((obj) => {
                    switch (obj.direction) {
                        case "up":
                            canmove = true;
                            Object.values(this.fields).forEach(fields => {
                                fields.forEach(field => {
                                    if (obj.coordinates.x === field[0] && (obj.coordinates.y - 1) === field[1]) {
                                        canmove = false;
                                    }
                                });
                            });
                            if (canmove) {
                                this.checkArrows(obj);
                                this.checkGoblet(obj);
                                obj.move();
                            }
                            break;
                        case "right":
                            canmove = true;
                            Object.values(this.fields).forEach(fields => {
                                fields.forEach(field => {
                                    if ((obj.coordinates.x + 1) === field[0] && obj.coordinates.y === field[1]) {
                                        canmove = false;
                                    }
                                });
                            });
                            if (canmove) {
                                this.checkArrows(obj);
                                this.checkGoblet(obj);
                                obj.move();
                            }
                            break;
                        case "down":
                            canmove = true;
                            Object.values(this.fields).forEach(fields => {
                                fields.forEach(field => {
                                    if (obj.coordinates.x === field[0] && (obj.coordinates.y + 1) === field[1]) {
                                        canmove = false;
                                    }
                                });
                            });
                            if (canmove) {
                                this.checkArrows(obj);
                                this.checkGoblet(obj);
                                obj.move();
                            }
                            break;
                        case "left":
                            canmove = true;
                            Object.values(this.fields).forEach(fields => {
                                fields.forEach(field => {
                                    if ((obj.coordinates.x - 1) === field[0] && obj.coordinates.y === field[1]) {
                                        canmove = false;
                                    }
                                });
                            });
                            if (canmove) {
                                this.checkArrows(obj);
                                this.checkGoblet(obj);
                                obj.move();
                            }
                            break;
                    }
                });
            }, 700);
        }
    }

    endGame() {
        clearInterval(this.loop);
        this.loop = 0;
        this.clearScene();
        this.renderScene();
    }
}