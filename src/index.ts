import { Game } from "./Game";
import { render } from "./Render";
import rescriptString from "./Demo.gen";

console.log(rescriptString);

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
