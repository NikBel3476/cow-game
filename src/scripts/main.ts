const ui: UI = new UI("#game-table-wrapper", "#ui-table-wrapper");
const render: Render = new Render(ui);
const game: Game = new Game(render, ui);

document.ondragstart = function() {
    return false;
}

function startGame() {
    game.startGame();
}

function endGame() {
    game.endGame();
}

window.onload = () => {
    game.loadLevel(lvl4);
    game.renderScene();
    game.drawArrows();
}

window.onresize = () => {
    game.renderScene();
}