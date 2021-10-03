const ui = new UI("#game-table-wrapper", "#ui-table-wrapper");
const render = new Render(ui);
const game = new Game(lvl1 , render, ui);

function startGame() {
    game.startGame();
}

function endGame() {
    game.endGame();
}

window.onload = () => { 
    game.renderScene();
    game.drawArrows();
}

window.onresize = () => {
    game.renderScene();
}