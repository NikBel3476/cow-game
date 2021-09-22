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

    startGame() {
        this.loop = setInterval(() => {
            console.log("game is running");
        }, 1000);
    }

    endGame() {
        clearInterval(this.loop);
    }
}