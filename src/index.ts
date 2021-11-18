import UI from './UI';
import Render from './Render';
import Game from './Game';

import { ILevel } from "./Interfaces";

import * as lvl1 from './levels/lvl1.json';
import * as lvl2 from './levels/lvl2.json';
import * as lvl4 from './levels/lvl4.json';

const ui: UI = new UI("#game-table-wrapper", "#ui-table-wrapper");
const render: Render = new Render(ui);
// FIXME: delete export
export const game: Game = new Game(render, ui);

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
    game.loadLevel(lvl4 as ILevel);
    game.renderScene();
    game.drawArrows();
}

window.onresize = () => {
    game.renderScene();
}
