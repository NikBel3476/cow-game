class Render {
    htmlGameTable;
    htmlArrowsTable;
    gameTable;
    arrowsTable;
    cowHtmlElements;

    constructor(ui = {}) {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }

    createCowHtmlElements(cows = {}) {
        let count = 0;
        const htmlElements = [];
        Object.values(cows).forEach(objArr => {
            objArr.forEach(obj => {
                const divCow = document.createElement("div");
                divCow.className = `cow-wrapper cow-${count++}`;
                divCow.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (obj.coordinates.y - 1)}px`;
                divCow.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (obj.coordinates.x - 1)}px`;
                divCow.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                divCow.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                htmlElements.push(divCow);
                document.getElementById("game-table-wrapper").appendChild(divCow);
            });
        });
        this.cowHtmlElements = htmlElements;
    }

    drawStaticObjects(fields = {}, mapArrows = {}, goblet = {}) {
        Object.values(fields).forEach(fieldsArray => {
            fieldsArray.forEach(field => {
                this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild.style.background = `url("../../${field.imgUrl}") no-repeat center`;
            });
        });

        Object.values(mapArrows).forEach(arrowArr => {
            arrowArr.forEach(arrow => {
                let elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1];
                elem.className += `${arrow.name}`;
                elem.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
            });
        });

        this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild.style.background = `url("../../${goblet.imgUrl}") no-repeat center`;
    }

    // draw cows only
    drawGameObjects(gameObjects = {}) {
        Object.values(gameObjects).forEach(objArr => {
            objArr.forEach(obj => {
                obj.linkedHtmlElement.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (obj.coordinates.y - 1)}px`;
                obj.linkedHtmlElement.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (obj.coordinates.x - 1)}px`;
                obj.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                obj.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                obj.linkedHtmlElement.style.background = `url("../../${obj.imgUrl}") no-repeat center`;
            })
        });
    }

    drawArrows(arrows = {}) {
        arrows.flat(Infinity).forEach(arrow => {
            arrow.linkedHtmlElement.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
        });
    }

    clearScene() {
        this.gameTable.forEach(row => {
            row.forEach((field) => {
                field.style.background = "";
            });
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

    drawScene(fixedFields = {}, gameObjects = {}, mapArrows = {}, goblet = {}) {
        this.drawStaticObjects(fixedFields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
        this.scaleArrowsTable();
    }
}