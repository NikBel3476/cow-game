class UI {
    htmlGameTable;
    htmlArrowsTable;
    gameTable;
    arrowsTable;
    selectedItem;

    constructor(gameContainerCssSelector = "", arrowsTableCssSelector = "") {
        this.htmlGameTable = this.createGameTable();
        document.querySelector(gameContainerCssSelector).appendChild(this.htmlGameTable);
        this.htmlArrowsTable = this.createArrowsTable();
        document.querySelector(arrowsTableCssSelector).appendChild(this.htmlArrowsTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
        this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
        console.log(this.gameTable);

        // EventListeners
        this.addEventListenerToElement(document, "mouseup", (e) => {
            if (this.selectedItem) {
                console.log(e.path[0]);
                this.selectedItem.style.pointerEvents = "";
                this.selectedItem.style.top = "0";
                this.selectedItem.style.left = "0";
                this.selectedItem = null;
            }
        });
        this.addEventListenerToElement(document, "mousemove", (e) => {
            if (this.selectedItem) {
                const styleTop = this.selectedItem.style.top;
                const styleLeft = this.selectedItem.style.left;
                this.selectedItem.style.top = `${Number(styleTop.slice(0, styleTop.length - 2)) + e.movementY}px`;
                this.selectedItem.style.left = `${Number(styleLeft.slice(0, styleLeft.length - 2)) + e.movementX}px`;
            }
        });
    }

    addEventListenerToElement(htmlElement = null, eventName = "", callback = () => {}) {
        if (htmlElement instanceof (Document || HTMLElement)) {
            htmlElement.addEventListener(eventName, callback);
        } else {
            throw new Error("htmlElement if not a document or htmlElement on UI[addEventListenerToElement]");
        }
    }

    htmlTableToArray(htmlTable) {
        return [...htmlTable.rows].map(row => 
            [...row.cells]
        );
    }

    createGameTable() {
        const table = document.createElement("table");
        table.id = "game-table";
        const tBody = document.createElement("tbody");
        for (let i = 0; i < CONF.Map.height; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < CONF.Map.width; j++) {
                const td = document.createElement("td");
                const div = document.createElement("div");
                div.className = `game-field x-${j+1} y-${i+1}`;
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
            let tr = document.createElement("tr");
            for (let j = 0; j < CONF.ArrowsTable.width; j++) {
                const td = document.createElement("td");
                td.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                const div = document.createElement("div");
                div.className = `arrow-field x-${j+1} y-${i+1}`;
                div.style.top = "0";
                div.style.left = "0";
                div.addEventListener("mousedown", (e) => {
                    this.selectedItem = e.path[0];
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