import CONF from '../Conf';

class UI {
    htmlGameTable: HTMLTableElement;
    htmlArrowsTable: HTMLTableElement;
    gameTable: HTMLTableCellElement[][];
    arrowsTable: HTMLTableCellElement[][];

    constructor(gameContainerCssSelector: string, arrowsTableCssSelector: string) {
        this.htmlGameTable = this.createGameTable();
        document.querySelector(gameContainerCssSelector)?.appendChild(this.htmlGameTable);
        this.htmlArrowsTable = this.createArrowsTable();
        document.querySelector(arrowsTableCssSelector)?.appendChild(this.htmlArrowsTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
        this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
    }

    htmlTableToArray(htmlTable: HTMLTableElement): HTMLTableCellElement[][] {
        return Array.from(htmlTable.rows).map((row: HTMLTableRowElement) => Array.from(row.cells));
    }

    createGameTable(): HTMLTableElement {
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
                td.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
                const div = document.createElement("div");
                div.className = `arrow-field x-${j + 1} y-${i + 1}`;
                div.style.zIndex = '10';
                div.style.top = "0";
                div.style.left = "0";
                td.appendChild(div);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    }

    getMapElementIndex(htmlElement: HTMLElement): [number, number] | undefined {
        for (let i = 0; i < CONF.Map.height; i++) {
            for (let j = 0; j < CONF.Map.width; j++) {
                if (this.gameTable[i][j].firstChild === htmlElement) {
                    return [i, j];
                }
            }
        }
        return undefined;
    }
}

export const ui = new UI("#game-table-wrapper", "#ui-table-wrapper");
