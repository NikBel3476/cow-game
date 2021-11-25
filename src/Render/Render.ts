import UI from '../UI';
import { ICow, ILevel } from "../Interfaces";
import { Arrow, IField, Goblet, HayBale, Cow } from "../Game/Entities";
import { Coordinates } from "../types";

export default class Render {
    htmlGameTable: HTMLElement;
    htmlArrowsTable: HTMLElement;
    gameTable: HTMLElement[][];
    arrowsTable: HTMLElement[][];
    cowHtmlElements!: HTMLElement[];
    mobileFields: HTMLElement[] = [];

    constructor(ui: UI) {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }

    createCowHtmlElements(cows: ICow[]): void {
        let count = 0;
        const htmlElements: HTMLElement[] = [];
        cows.forEach((cow: ICow) => {
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
            this.mobileFields = htmlElements;
        }
    }

    drawStaticElements(nonInteractive: IField[], Arrows: Arrow[], goblet: Goblet) {
        nonInteractive.forEach((field: IField) => {
            const elem = (this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild as HTMLElement)
            elem.style.background = `url('${field.img}') center center / contain no-repeat`;
        });

        Arrows.forEach(arrow => {
            if (arrow.coordinates) {
                const elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild as HTMLElement;
                elem.style.background = `url('${arrow.img}') center center / contain no-repeat`;
                elem.style.zIndex = '10';
            }
        });

        const gobletElem = (this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
        gobletElem.style.background = `url('${goblet.img}') center center / contain no-repeat`;
    }

    drawNonStaticElements(hayBales: HayBale[], cows: Cow[]) {
        hayBales.forEach((field: HayBale) => {
            field.linkedHtmlElement.style.top = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                .getBoundingClientRect().height * (field.coordinates.y - 1)}px`;
            field.linkedHtmlElement.style.left = `${(this.htmlGameTable.querySelector("td") as HTMLElement)
                .getBoundingClientRect().width * (field.coordinates.x - 1)}px`;
            field.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
            field.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            field.linkedHtmlElement.style.background = `url('${field.img}') center center / contain no-repeat`;
        });

        cows.forEach((cow: Cow) => {
            const cssTop = cow.layer === 2 ?
                (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().height * (cow.coordinates.y - 1) - 30 :
                (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().height * (cow.coordinates.y - 1);
            const cssLeft = (this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().width * (cow.coordinates.x - 1);
            cow.linkedHtmlElement.style.top = `${cssTop}px`;
            cow.linkedHtmlElement.style.left = `${cssLeft}px`;
            cow.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
            cow.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            cow.linkedHtmlElement.style.background = `url('${cow.img}') center center / contain no-repeat`;
        });
    }

    drawArrows(arrows: Arrow[]) {
        this.clearArrowsTable();
        arrows.forEach((arrow: Arrow) => {
            arrow.linkedHtmlElement.style.background = `url('${arrow.img}') center center / contain no-repeat`;
        });
    }

    clearScene() {
        this.gameTable.forEach(row => {
            row.forEach((field: HTMLElement) => {
                (field.firstChild as HTMLElement).style.background = "";
            });
        });
    }

    clearArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(field =>
                (field.firstChild as HTMLElement).style.background = ""
            )
        })
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
        staticFields: IField[],
        hayBales: HayBale[],
        cows: Cow[],
        mapArrows: Arrow[],
        goblet: Goblet
    ) {
        this.drawStaticElements(staticFields, mapArrows, goblet);
        this.drawNonStaticElements(hayBales, cows);
        this.scaleArrowsTable();
    }
}
