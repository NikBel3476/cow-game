import { Game } from "./Game";
import { render } from "./Render";

export const game = new Game();

document.ondragstart = function () {
  return false;
};

export function startGame() {
  game.startGame();
}

export function endGame() {
  game.reloadLevel();
}

export function restartGame() {
  game.restartGame();
}

window.onload = () => {
  game.renderScene();
};

window.onresize = () => {
  game.renderScene();
  render.scaleArrowsTable();
};
