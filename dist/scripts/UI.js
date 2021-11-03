"use strict";
class UI {
    constructor(gameContainerCssSelector, arrowsTableCssSelector) {
        var _a, _b;
        this.selectedItem = null;
        this.htmlGameTable = this.createGameTable();
        (_a = document.querySelector(gameContainerCssSelector)) === null || _a === void 0 ? void 0 : _a.appendChild(this.htmlGameTable);
        this.htmlArrowsTable = this.createArrowsTable();
        (_b = document.querySelector(arrowsTableCssSelector)) === null || _b === void 0 ? void 0 : _b.appendChild(this.htmlArrowsTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
        this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
        document.addEventListener("mousedown", (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });
        document.addEventListener("mousemove", (e) => {
            if (this.selectedItem) {
                this.selectedItem.style.top = `${-this.mouseY + e.clientY}px`;
                this.selectedItem.style.left = `${-this.mouseX + e.clientX}px`;
            }
        });
        document.addEventListener("mouseup", (e) => {
            if (this.selectedItem) {
                if (e.target.className.includes("game-field")) {
                    if (!game.findFieldByHtmlElement(e.target) &&
                        !game.findGameObjectByHtmlElement(e.target)) {
                        const coordinates = e.target.className.split(" ")
                            .filter(str => str.match(/^(x|y)-\d+$/g)).map(str => Number(str.slice(2)));
                        const arrow = game.findArrowByHtmlElement(this.selectedItem);
                        let selectedArrow;
                        if (arrow) {
                            selectedArrow = game.arrows.splice(game.arrows.indexOf(arrow), 1)[0];
                            game.mapArrows.push(selectedArrow);
                        }
                        else {
                            selectedArrow = game.mapArrows.find((arrow) => this.selectedItem === arrow.linkedHtmlElement);
                        }
                        if (selectedArrow) {
                            selectedArrow.coordinates.x = coordinates[0];
                            selectedArrow.coordinates.y = coordinates[1];
                            selectedArrow.linkedHtmlElement = e.target;
                            selectedArrow.linkedHtmlElement.addEventListener("mousedown", (e) => {
                                this.selectedItem = e.target;
                                this.selectedItem.style.pointerEvents = "none";
                            });
                        }
                    }
                }
                else if (e.target.className.includes("arrow-field")) {
                    const arrow = game.mapArrows.find(arrow => this.selectedItem === arrow.linkedHtmlElement);
                    if (arrow) {
                        const selectedArrow = game.mapArrows.splice(game.mapArrows.indexOf(arrow), 1)[0];
                        selectedArrow.coordinates.x = 0;
                        selectedArrow.coordinates.y = 0;
                        selectedArrow.linkedHtmlElement = e.target;
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
        });
    }
    htmlTableToArray(htmlTable) {
        return [...htmlTable.rows].map((row) => [...row.cells]);
    }
    createGameTable() {
        const table = document.createElement("table");
        table.id = "game-table";
        const tBody = document.createElement("tbody");
        for (let i = 0; i < CONF.Map.height; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < CONF.Map.width; j++) {
                const td = document.createElement("td");
                const div = document.createElement("div");
                div.className = `game-field x-${j + 1} y-${i + 1}`;
                td.appendChild(div);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    }
    createArrowsTable() {
        var _a, _b;
        const table = document.createElement("table");
        table.id = "ui-table";
        const tBody = document.createElement("tbody");
        for (let i = 0; i < CONF.ArrowsTable.height; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < CONF.ArrowsTable.width; j++) {
                const td = document.createElement("td");
                td.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
                td.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
                const div = document.createElement("div");
                div.className = `arrow-field x-${j + 1} y-${i + 1}`;
                div.style.zIndex = '10';
                div.style.top = "0";
                div.style.left = "0";
                div.addEventListener("mousedown", (e) => {
                    this.selectedItem = e.target;
                    this.selectedItem.style.pointerEvents = "none";
                });
                td.appendChild(div);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    }
}
//# sourceMappingURL=UI.js.map