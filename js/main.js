const render = new Render();
const game = new Game(lvl1 , render);

game.renderScene();

function startGame() {
    game.startGame();
}

function endGame() {
    game.endGame();
}

console.log();