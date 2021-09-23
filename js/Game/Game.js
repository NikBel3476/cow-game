class Game {
    loop;
    fields;
    arrows;
    render;

    constructor({ fields = {}, gameObjects = {}, arrows = {} }, render = {}) {
        this.fields = fields;
        this.gameObjects = gameObjects;
        this.arrows = arrows;
        this.render = render;
    }

    renderScene() {
        this.render.drawScene(this.fields, this.gameObjects);
    }

    clearScene() {
        this.render.clearScene();
    }

    startGame() {
        this.loop = setInterval(() => {
            console.log("game is running");
            this.clearScene();
            this.renderScene();
            Object.keys(this.gameObjects).forEach((objName) => {
                let obj = this.gameObjects[objName];
                switch(obj.direction) {
                    case "up":
                        obj.coordinates.y = obj.coordinates.y >= 1 && obj.coordinates.y <= 14 ? obj.coordinates.y - 1 : obj.coordinates.y;
                        break;
                    case "right":
                        obj.coordinates.x = obj.coordinates.x >= 1 && obj.coordinates.x <= 20 ? obj.coordinates.x + 1 : obj.coordinates.x;
                        break;
                    case "down":
                        obj.coordinates.y = obj.coordinates.y >= 1 && obj.coordinates.y <= 14 ? obj.coordinates.y + 1 : obj.coordinates.y;
                        break;
                    case "left":
                        obj.coordinates.x = obj.coordinates.x >= 1 && obj.coordinates.x <= 20 ? obj.coordinates.x - 1 : obj.coordinates.x;
                        break;
                }
            });
            console.log(this.gameObjects);
        }, 1000);
    }

    endGame() {
        clearInterval(this.loop);
        this.clearScene();
        this.renderScene();
    }
}