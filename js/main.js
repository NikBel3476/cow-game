const render = new Render("#game-table-wrapper", "#ui-table-wrapper");
const game = new Game(lvl1 , render);

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