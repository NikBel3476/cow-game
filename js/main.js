const render = new Render("#game-table-wrapper");
const game = new Game(lvl1 , render);

function startGame() {
    game.startGame();
}

function endGame() {
    game.endGame();
}

window.onload = () => { 
    game.renderScene();
}

window.onresize = () => {
    game.renderScene();
}