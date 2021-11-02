class UI {
    constructor(gameContainerCssSelector = "", arrowsTableCssSelector = "") {
        this.htmlGameTable = this.createGameTable();
        document.querySelector(gameContainerCssSelector).appendChild(this.htmlGameTable);
        this.htmlArrowsTable = this.createArrowsTable();
        document.querySelector(arrowsTableCssSelector).appendChild(this.htmlArrowsTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
        this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
        // EventListeners
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
        // TODO: it needs to be refactored
        document.addEventListener("mouseup", (e) => {
            if (this.selectedItem) {
                if (e.target.className.includes("game-field")) {
                    if (!game.findMapFieldByHtmlElement(e.target) &&
                        !game.findGameObjectByHtmlElement(e.target)) {
                        // можно поставить на поле
                        const coordinates = e.target.className.split(" ")
                            .filter(str => str.match(/^(x|y)-\d+$/g)).map(str => Number(str.slice(2)));
                        const arrow = game.arrows.find((arrow) => this.selectedItem === arrow.linkedHtmlElement);
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
                        selectedArrow.coordinates.x = null;
                        selectedArrow.coordinates.y = null;
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
        // одномерный массив
        // return [...htmlTable.rows].reduce((cells: HTMLTableCellElement[], row: HTMLTableRowElement) => cells.concat([...row.cells]), []);
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
        const table = document.createElement("table");
        table.id = "ui-table";
        const tBody = document.createElement("tbody");
        for (let i = 0; i < CONF.ArrowsTable.height; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < CONF.ArrowsTable.width; j++) {
                const td = document.createElement("td");
                td.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
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