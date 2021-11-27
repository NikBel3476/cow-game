import { endGame, startGame } from "../index";
import { Arrow, Game } from "../Game";

export class EventHandler {
    game: Game;
    private static selectedItem: HTMLElement | null = null;
    private mouseX!: number;
    private mouseY!: number;

    constructor(game: Game) {
        this.game = game;

        (document.getElementById("start-game-button") as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            startGame();
        });

        (document.getElementById("end-game-button") as HTMLElement).addEventListener('click', (e: MouseEvent) => {
            endGame();
        });

        document.addEventListener('mousedown', (e: MouseEvent) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        document.addEventListener('mousemove', (e: MouseEvent) => {
            if (EventHandler.selectedItem) {
                EventHandler.selectedItem.style.top = `${-this.mouseY + e.clientY}px`;
                EventHandler.selectedItem.style.left = `${-this.mouseX + e.clientX}px`;
            }
        });

        document.addEventListener('mouseup', (e: MouseEvent) => {
            const targetElement = e.target as HTMLElement;
            if (EventHandler.selectedItem && targetElement) {
                const gameObject = game.findMapObjectByHtmlElement(targetElement);
                if (!gameObject) {
                    const coordinates = game.getFieldCoordinates(targetElement);
                    const arrow = game.findArrowByHtmlElement(EventHandler.selectedItem);
                    if (coordinates && arrow) {
                        this.game.placeArrowToMap(arrow, coordinates, targetElement);
                        EventHandler.selectedItem.removeEventListener('mousedown', this.onArrowMousedown);
                        this.game.renderScene();
                    }
                }
                EventHandler.selectedItem.style.top = '0';
                EventHandler.selectedItem.style.left = '0';
                EventHandler.selectedItem.style.pointerEvents = "";
            }
            EventHandler.selectedItem = null;
        });

       /* this.game.arrows.forEach(arrow => {
            if (!arrow.coordinates)
                arrow.linkedHtmlElement.addEventListener('mousedown', (e: MouseEvent) => {
                    EventHandler.selectedItem = e.target as HTMLElement;
                    EventHandler.selectedItem.style.pointerEvents = "none";
                });
        });*/

        this.game.arrows.forEach(arrow => {
            if (!arrow.coordinates) {
                this.addArrowEventListener(arrow, 'mousedown', this.onArrowMousedown);
            }
        });

        /*this.htmlGameTable.addEventListener<'mouseup'>('mouseup', (e: MouseEvent) => {

        });

        this.htmlArrowsTable.addEventListener<'mouseup'>('mouseup', (e: MouseEvent) => {
            if (this.selectedItem) {

            }
        });*/

        /*document.addEventListener<'mouseup'>("mouseup", (e: MouseEvent) => {
            if (this.selectedItem) {
                if ((e.target as HTMLElement).className.includes("game-field")) {
                    if (!game.findMapObjectByHtmlElement(e.target as HTMLElement)) {
                        // можно поставить на поле
                        const coordinates = (e.target as HTMLElement).className.split(" ")
                            .filter(str => str.match(/^[xy]-\d+$/g)).map(str => Number(str.slice(2)));
                        const arrow: Arrow | undefined = game.findArrowByHtmlElement(this.selectedItem);
                        let selectedArrow: Arrow | undefined;
                        if (arrow) {
                            game.placeArrowToMap(arrow, { x: coordinates[0], y: coordinates[1]}, e.target as HTMLElement);
                            // selectedArrow = game.spliceArrow(arrow);
                            // game.mapArrows.push(selectedArrow);
                        } else {
                            selectedArrow = game.mapArrows.find((arrow: Arrow) => this.selectedItem === arrow.linkedHtmlElement);
                        }
                        if (selectedArrow) {
                            selectedArrow.coordinates.x = coordinates[0];
                            selectedArrow.coordinates.y = coordinates[1];
                            selectedArrow.linkedHtmlElement = (e.target as HTMLElement);
                            selectedArrow.linkedHtmlElement.addEventListener("mousedown", (e) => {
                                this.selectedItem = (e.target as HTMLElement);
                                this.selectedItem.style.pointerEvents = "none";
                            });
                        }
                    }
                } else if ((e.target as HTMLElement).className.includes("arrow-field")) {
                    const arrow = game.mapArrows.find(arrow => this.selectedItem === arrow.linkedHtmlElement);
                    if (arrow) {
                        const selectedArrow = game.mapArrows.splice(game.mapArrows.indexOf(arrow), 1)[0];
                        selectedArrow.coordinates.x = 0;
                        selectedArrow.coordinates.y = 0;
                        selectedArrow.linkedHtmlElement = (e.target as HTMLElement);
                        game.arrows.push(selectedArrow);
                    }
                }
                this.selectedItem.style.pointerEvents = "";
                this.selectedItem.style.top = "0";
                this.selectedItem.style.left = "0";
                this.selectedItem = null;
                game.drawArrows();
                game.renderScene();
            }
        });*/
    }

    onArrowMousedown(e: Event) {
        EventHandler.selectedItem = e.target as HTMLElement;
        EventHandler.selectedItem.style.pointerEvents = "none";
    }

    addArrowEventListener(arrow: Arrow, event: string, func: (e: Event) => void) {
        arrow.linkedHtmlElement.addEventListener(event, func);
    }
}
