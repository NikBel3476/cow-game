import { ui } from '../UI';
import { ICow, ILevel } from "../Interfaces";
import { Arrow, Goblet, HayBale, Cow, Field, IField, IGameObject } from "../Game";
import { Coordinates } from "../types";

class Render {
    htmlGameTable: HTMLElement;
    htmlArrowsTable: HTMLElement;
    gameTable: HTMLElement[][];
    arrowsTable: HTMLElement[][];
    cowHtmlElements!: HTMLElement[];
    movableFields: HTMLElement[] = [];

    constructor() {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }

    createCowHtmlElements(cows: ILevel['GameObjects']['Cows']): void {
        let count = 0;
        const htmlElements: HTMLElement[] = [];
        cows.forEach(cow => {
            const divCow = document.createElement("div");
            divCow.className = `cow-wrapper cow-${count++}`;
            divCow.style.top = `${(this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect()
                .height * (cow.coordinates.y - 1)}px`;
            divCow.style.left = `${(this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect()
                .width * (cow.coordinates.x - 1)}px`;
            divCow.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
            divCow.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            divCow.style.zIndex = '30';
            htmlElements.push(divCow);
            document.getElementById("game-table-wrapper")?.appendChild(divCow);
        });
        this.cowHtmlElements = htmlElements;
    }

    createMovableHtmlElements(hayBales: ILevel['MapObjects']['Interactive']['HayBale']): void {
        if (hayBales) {
            const htmlElements: HTMLElement[] = [];
            hayBales.forEach((coordinates: Coordinates) => {
                    const divField = document.createElement("div");
                    divField.className = `mobile-field`;
                    divField.style.top = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                        .getBoundingClientRect().height * (coordinates.x - 1)}px`;
                    divField.style.left = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                        .getBoundingClientRect().width * (coordinates.y - 1)}px`;
                    divField.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                    divField.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
                    divField.style.zIndex = '20';
                    htmlElements.push(divField);
                    document.getElementById("game-table-wrapper")?.appendChild(divField);
            });
            this.movableFields = htmlElements;
        }
    }

    drawStaticElements(fields: (IField | Arrow)[]) {
        fields.forEach(object => {
            object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
        });

        /*nonInteractive.forEach((field: Field) => {
            const elem = this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild as HTMLElement
            elem.style.background = `url('${field.img}') center center / contain no-repeat`;
        });

        Arrows.forEach(arrow => {
            if (arrow.coordinates) {
                const elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild as HTMLElement;
                elem.style.background = `url('${arrow.img}') center center / contain no-repeat`;
                elem.style.zIndex = '10';
            }
        });

        const gobletElem = this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement
        gobletElem.style.background = `url('${goblet.img}') center center / contain no-repeat`;*/
    }

    drawNonStaticElements(objects: (Cow | HayBale)[]) {
        objects.forEach(object => {
            if (object instanceof HayBale) {
                object.linkedHtmlElement.style.top = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                    .getBoundingClientRect().height * (object.coordinates.y - 1)}px`;
                object.linkedHtmlElement.style.left = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                    .getBoundingClientRect().width * (object.coordinates.x - 1)}px`;
                object.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                object.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
                object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
            }
            if (object instanceof Cow) {
                const cssTop = object.layer === 2 ?
                    (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().height * (object.coordinates.y - 1) - 30 :
                    (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().height * (object.coordinates.y - 1);
                const cssLeft = (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().width * (object.coordinates.x - 1);
                object.linkedHtmlElement.style.top = `${cssTop}px`;
                object.linkedHtmlElement.style.left = `${cssLeft}px`;
                object.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                object.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
                object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
            }
        });
    }

    clearScene() {
        this.gameTable.forEach(row =>
            row.forEach((field: HTMLElement) => (field.firstChild as HTMLElement).style.background = '')
        );
        this.arrowsTable.forEach(row =>
            row.forEach(cell => (cell.firstChild as HTMLElement).style.background = '')
        )
    }

    drawTableArrows(arrows: Arrow[]) {
        this.clearArrowsTable();
        arrows.forEach((arrow: Arrow) =>
            arrow.linkedHtmlElement.style.background = `url('${arrow.img}') center center / contain no-repeat`
        );
    }

    clearArrowsTable() {
        this.arrowsTable.forEach(row =>
            row.forEach(field =>
                (field.firstChild as HTMLElement).style.background = ""
            )
        );
    }

    scaleArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(td => {
                td.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            });
        });
    }

    drawScene(
        staticElems: (IField | Arrow)[],
        movableElems: (Cow | HayBale)[]
    ) {
        this.drawStaticElements(staticElems);
        this.drawNonStaticElements(movableElems);
    }
}

export const render = new Render();
