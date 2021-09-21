class Game {
    loop;
    fields;
    arrows;
    render;

    constructor({ level = {}, render = {}}) {
        ({ fields: this.fields, gameObjects: this.gameObjects, arrows: this.arrows } = level);
        this.render = render;
    }

    renderScene() {

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