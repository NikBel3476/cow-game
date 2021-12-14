import { Game } from './Game';
import { MAPPED_LEVELS } from "./levels";
import { render } from "./Render";

export let currentLevel: keyof typeof MAPPED_LEVELS = 1;

const game = new Game();

document.ondragstart = function() {
    return false;
}

export function startGame() {
    game.startGame();
}

export function endGame() {
    // game.endGame();
}

window.onload = () => {
    game.renderScene();
}

window.onresize = () => {
    game.renderScene();
    render.scaleArrowsTable();
}
