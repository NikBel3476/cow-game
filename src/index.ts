import { Game } from './Game';
import { EventHandler } from "./UI";
import { MAPPED_LEVELS } from "./levels";
import { render } from "./Render";

const game = new Game();
game.loadLevel(MAPPED_LEVELS[6]);
const handler = new EventHandler(game);

document.ondragstart = function() {
    return false;
}

export function startGame() {
    game.startGame();
}

export function endGame() {
    game.endGame();
}

window.onload = () => {
    game.renderScene();
}

window.onresize = () => {
    game.renderScene();
    render.scaleArrowsTable();
}
