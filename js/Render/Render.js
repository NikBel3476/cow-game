class Render {
    htmlGameTable;
    htmlArrowsTable;
    gameTable;
    arrowsTable;

    constructor(ui = {}) {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
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

    drawGameObjects(gameObjects = {}) {
        const cowDivArr = Array.from(document.getElementsByClassName("cow-wrapper"));
        if (cowDivArr.length !== 0) { // если div-ы уже есть, то передвигаем их
            let count = 0;
            Object.values(gameObjects).forEach(objArr => {
                objArr.forEach(obj => {
                    let cowDiv = document.getElementsByClassName(`cow-${count++}`);
                    cowDiv[0].style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (obj.coordinates.y - 1)}px`;
                    cowDiv[0].style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (obj.coordinates.x - 1)}px`;
                    cowDiv[0].style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                    cowDiv[0].style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                    cowDiv[0].style.background = `url("../../${obj.imgUrl}") no-repeat center`;
                })
            });
        } else { // иначе добавляем div-ы
            let count = 0;
            Object.values(gameObjects).forEach(objArr => {
                objArr.forEach(obj => {
                    let divCow = document.createElement("div");
                    divCow.className = `cow-wrapper cow-${count++}`;
                    divCow.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (obj.coordinates.y - 1)}px`;
                    divCow.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (obj.coordinates.x - 1)}px`;
                    divCow.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                    divCow.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                    divCow.style.background = `url("../../${obj.imgUrl}") no-repeat center`;
                    document.getElementById("game-table-wrapper").appendChild(divCow);
                });
            });
        }
    }

    drawArrows(arrows = {}) {
        let index = 0;
        Object.keys(arrows).forEach(type => {
            for (let count = 0 ; count < arrows[type]; count++) {
                if (index < CONF.ArrowsTable.width * CONF.ArrowsTable.height) {
                    this.arrowsTable[Math.floor(index / CONF.ArrowsTable.width)][index % CONF.ArrowsTable.width]
                        .firstChild.style.background = `url("../../src/sprites/svg/Arrow${type}.svg") no-repeat center`;
                    index++;
                }
            }
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