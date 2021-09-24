class Game {
    loop;
    fields;
    arrows;
    render;
    mapArrows;

    constructor({ fields = {}, mapArrows = {}, gameObjects = {}, arrows = {} }, render = {}) {
        this.fields = fields;
        this.gameObjects = this.createObjClasses(gameObjects);
        this.arrows = arrows;
        this.mapArrows = mapArrows;
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
        this.render.drawScene(this.fields, this.gameObjects, this.mapArrows);
    }

    clearScene() {
        this.render.clearScene();
    }

    checkArrows(coords, cow) {
        Object.values(this.mapArrows).forEach(arrows => {
            arrows.forEach(arrow => {
                if (coords[0] === arrow[1] && coords[1] === arrow[0]) {
                    cow.direction = arrow[2];
                }
            });
        });
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
                                })
                            });
                            if (canmove) {
                                this.checkArrows([(obj.coordinates.y), obj.coordinates.x], obj);
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
                                })
                            });
                            if (canmove) {
                                this.checkArrows([obj.coordinates.y, (obj.coordinates.x)], obj);
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
                                })
                            });
                            if (canmove) {
                                this.checkArrows([(obj.coordinates.y), obj.coordinates.x], obj);
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
                                })
                            });
                            if (canmove) {
                                this.checkArrows([obj.coordinates.y, (obj.coordinates.x)], obj);
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
        this.clearScene();
        this.renderScene();
    }
}