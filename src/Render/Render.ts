import { ui } from '../UI';
import { ILevel } from "../levels";
import { Arrow, HayBale, Cow, IField, Piston, IGameObject } from "../Game";
import { Coordinates } from "../types";
import { CONF } from "../Conf";

class Render {
    htmlGameTable: HTMLElement;
    htmlArrowsTable: HTMLElement;
    gameTable: HTMLElement[][];
    arrowsTable: HTMLElement[][];
    cowHtmlElements: HTMLElement[] = [];
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
            divCow.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
            divCow.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            divCow.style.zIndex = '30';
            divCow.style.transition = `all ${CONF.loopTime / 1000}s linear`;
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
                    divField.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                    divField.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
                    divField.style.zIndex = '20';
                    divField.style.transition = `all ${CONF.loopTime / 1000}s linear`;
                    htmlElements.push(divField);
                    document.getElementById("game-table-wrapper")?.appendChild(divField);
            });
            this.movableFields = htmlElements;
        }
    }

    drawStaticElements(fields: (IField | Arrow)[]) {
        fields.forEach(object => {
            object.linkedHtmlElement.style.top = object instanceof Piston && !object.activated ?
                 `-${(this.htmlGameTable.querySelector("td") as HTMLElement)
                    .getBoundingClientRect().height}px` :
                '0px';
            object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
        });
    }

    drawNonStaticElements(objects: (Cow | HayBale)[]) {
        objects.forEach(object => {
            if (object instanceof HayBale) {
                const tdElement = this.htmlGameTable.querySelector("td") as HTMLElement;
                object.linkedHtmlElement.style.transform = `translate(
                    ${tdElement.getBoundingClientRect().width * (object.coordinates.x - 1)}px,
                    ${tdElement.getBoundingClientRect().height * (object.coordinates.y - 1)}px)`;
                object.linkedHtmlElement.style.top = '0px';
                object.linkedHtmlElement.style.left = '0px';
                object.linkedHtmlElement.style.width = `${tdElement?.clientWidth}px`;
                object.linkedHtmlElement.style.height = `${tdElement?.clientHeight}px`;
                object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
            }
            if (object instanceof Cow) {
                const tdElement = this.htmlGameTable.querySelector("td") as HTMLElement;
                const cssTranslateY = object.layer === 2 ?
                    tdElement.getBoundingClientRect().height * (object.coordinates.y - 1) - 30 :
                    tdElement.getBoundingClientRect().height * (object.coordinates.y - 1);
                const cssTranslateX = tdElement.getBoundingClientRect().width * (object.coordinates.x - 1);
                object.linkedHtmlElement.style.top = '0px';
                object.linkedHtmlElement.style.left = '0px';
                object.linkedHtmlElement.style.transform = `translate(${cssTranslateX}px, ${cssTranslateY}px)`;
                object.linkedHtmlElement.style.width = `${tdElement?.clientWidth}px`;
                object.linkedHtmlElement.style.height = `${tdElement?.clientHeight}px`;
                object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
            }
        });
    }

    drawElements(elems: (IField | IGameObject)[]): void {
        elems.forEach(elem => {
            elem.linkedHtmlElement.style.transform = elem instanceof Piston && !elem.activated ?
                `translateY(-${(this.htmlGameTable.querySelector("td") as HTMLElement).getBoundingClientRect().height}px)` :
                '';
            elem.linkedHtmlElement.style.background = `url('${elem.img}') center center / contain no-repeat`;
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

    clearArrowsTable() {
        this.arrowsTable.forEach(row =>
            row.forEach(field => (field.firstChild as HTMLElement).style.background = '')
        );
    }

    deleteScene() {
        this.clearScene();
        this.clearArrowsTable();
        this.cowHtmlElements.forEach(element => element.remove());
        this.movableFields.forEach(field => field.remove());
        this.cowHtmlElements = [];
        this.movableFields = [];
    }

    scaleArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(td => {
                td.style.width = `${this.htmlGameTable.querySelector("td")?.clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td")?.clientHeight}px`;
            });
        });
    }

    drawScene(staticElements: (IField | Arrow)[], movableElements: (Cow | HayBale)[]) {
        this.drawStaticElements(staticElements);
        this.drawNonStaticElements(movableElements);
    }
}

export const render = new Render();
