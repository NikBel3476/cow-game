class Render {
    constructor(ui) {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }
    createCowHtmlElements(cows) {
        let count = 0;
        const htmlElements = [];
        Object.values(cows).forEach((cow) => {
            const divCow = document.createElement("div");
            divCow.className = `cow-wrapper cow-${count++}`;
            divCow.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1)}px`;
            divCow.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1)}px`;
            divCow.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
            divCow.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
            divCow.style.zIndex = '20';
            htmlElements.push(divCow);
            document.getElementById("game-table-wrapper").appendChild(divCow);
        });
        this.cowHtmlElements = htmlElements;
    }
    drawStaticObjects(fields, mapArrows, goblet) {
        Object.values(fields).forEach((field) => {
            const elem = this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild;
            elem.style.background = `url("../../${field.imgUrl}") center/contain no-repeat`;
        });
        Object.values(mapArrows).forEach((arrow) => {
            const elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild;
            elem.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
            elem.style.zIndex = '10';
        });
        const gobletElem = this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild;
        gobletElem.style.background = `url("../../${goblet.imgUrl}") no-repeat center`;
    }
    drawGameObjects(gameObjects) {
        if (gameObjects.mobileFields) {
            gameObjects.mobileFields.forEach((field) => {
                field.linkedHtmlElement.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (field.coordinates.y - 1)}px`;
                field.linkedHtmlElement.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (field.coordinates.x - 1)}px`;
                field.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                field.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                field.linkedHtmlElement.style.background = `url("../../${field.imgUrl}") no-repeat center`;
            });
        }
        Object.values(gameObjects.cows).forEach((cow) => {
            const cssTop = cow.layer === 2 ?
                this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1) - 30 :
                this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1);
            const cssLeft = this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1);
            cow.linkedHtmlElement.style.top = `${cssTop}px`;
            cow.linkedHtmlElement.style.left = `${cssLeft}px`;
            cow.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
            cow.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
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
                td.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
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