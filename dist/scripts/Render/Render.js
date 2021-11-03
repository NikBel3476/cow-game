"use strict";
class Render {
    constructor(ui) {
        this.mobileFields = [];
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }
    createCowHtmlElements(cows) {
        let count = 0;
        const htmlElements = [];
        Object.values(cows).forEach((cow) => {
            var _a, _b, _c;
            const divCow = document.createElement("div");
            divCow.className = `cow-wrapper cow-${count++}`;
            divCow.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1)}px`;
            divCow.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1)}px`;
            divCow.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
            divCow.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
            divCow.style.zIndex = '30';
            htmlElements.push(divCow);
            (_c = document.getElementById("game-table-wrapper")) === null || _c === void 0 ? void 0 : _c.appendChild(divCow);
        });
        this.cowHtmlElements = htmlElements;
    }
    createMobileFieldsHtmlElements(fields) {
        if (fields) {
            const htmlElements = [];
            (Object.values(fields)).forEach((coordinatesArr) => {
                coordinatesArr.forEach((coordinates) => {
                    var _a, _b, _c;
                    const divField = document.createElement("div");
                    divField.className = `mobile-field`;
                    divField.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (coordinates[0] - 1)}px`;
                    divField.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (coordinates[1] - 1)}px`;
                    divField.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
                    divField.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
                    divField.style.zIndex = '20';
                    htmlElements.push(divField);
                    (_c = document.getElementById("game-table-wrapper")) === null || _c === void 0 ? void 0 : _c.appendChild(divField);
                });
            });
            this.mobileFields = htmlElements;
        }
    }
    drawStaticObjects(fields, mapArrows, goblet) {
        Object.values(fields).forEach((field) => {
            const elem = this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild;
            elem.style.background = `url("../../${field.imgUrl}") center/contain no-repeat`;
        });
        Object.values(mapArrows).forEach((arrow) => {
            const elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild;
            elem.style.background = `url("../../${arrow.imgUrl}") center/contain no-repeat`;
            elem.style.zIndex = '10';
        });
        const gobletElem = this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild;
        gobletElem.style.background = `url("../../${goblet.imgUrl}") center/contain no-repeat`;
    }
    drawGameObjects(gameObjects) {
        if (gameObjects.mobileFields) {
            gameObjects.mobileFields.forEach((field) => {
                var _a, _b;
                field.linkedHtmlElement.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (field.coordinates.y - 1)}px`;
                field.linkedHtmlElement.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (field.coordinates.x - 1)}px`;
                field.linkedHtmlElement.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
                field.linkedHtmlElement.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
                field.linkedHtmlElement.style.background = `url("../../${field.imgUrl}") center/contain no-repeat`;
            });
        }
        Object.values(gameObjects.cows).forEach((cow) => {
            var _a, _b;
            const cssTop = cow.layer === 2 ?
                this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1) - 30 :
                this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1);
            const cssLeft = this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1);
            cow.linkedHtmlElement.style.top = `${cssTop}px`;
            cow.linkedHtmlElement.style.left = `${cssLeft}px`;
            cow.linkedHtmlElement.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
            cow.linkedHtmlElement.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
            cow.linkedHtmlElement.style.background = `url("../../${cow.imgUrl}") no-repeat center`;
        });
    }
    drawArrows(arrows) {
        this.clearArrowsTable();
        arrows.forEach((arrow) => {
            arrow.linkedHtmlElement.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
        });
    }
    clearScene() {
        this.gameTable.forEach(row => {
            row.forEach((field) => {
                field.firstChild.style.background = "";
            });
        });
    }
    clearArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(field => field.firstChild.style.background = "");
        });
    }
    scaleArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(td => {
                var _a, _b;
                td.style.width = `${(_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth}px`;
                td.style.height = `${(_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight}px`;
            });
        });
    }
    drawScene(staticFields, gameObjects, mapArrows, goblet) {
        this.drawStaticObjects(staticFields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
        this.scaleArrowsTable();
    }
}
//# sourceMappingURL=Render.js.map