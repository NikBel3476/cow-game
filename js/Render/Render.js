class Render {
    gameTable;

    constructor(parentCssSelector = "") {
        // this.drawGameTable("#game-table-wrapper");
        this.htmlGameTable = this.createGameTable();
        document.querySelector(parentCssSelector).appendChild(this.htmlGameTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
    }

    htmlTableToArray(htmlTable) {
        const rows = Array.from(htmlTable.getElementsByTagName("tr"));
        return rows.map((row) => Array.from(row.getElementsByTagName("td")));
    }

    createGameTable() {
        const table = document.createElement("table");
        table.id = "game-table";
        const tBody = document.createElement("tbody");
        for (let i = 0; i < CONF.Map.height; i++) {
            let tr = document.createElement("tr");
            for (let j = 0; j < CONF.Map.width; j++) {
                const td = document.createElement("td");
                td.appendChild(document.createElement("div"));
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    }

    drawStaticObjects(fields = {}, mapArrows = {}, goblet = {}) {
        Object.keys(fields).forEach(fieldName => {
            fields[fieldName].forEach(coordinates => {
                this.gameTable[coordinates[1] - 1][coordinates[0] - 1].firstChild.style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });

        Object.keys(mapArrows).forEach(fieldName => {
            mapArrows[fieldName].forEach(arrow => {
                this.gameTable[arrow.y - 1][arrow.x - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });

        this.gameTable[goblet.y - 1][goblet.x - 1].style.background = `url("../../${CONF.ImgPath.Goblet}") no-repeat center`;
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

    clearScene() {
        this.gameTable.forEach(row => {
            row.forEach((field) => {
                field.style.background = "";
            });
        });
    }

    drawScene(fixedFields = {}, gameObjects = {}, mapArrows = {}, goblet = {}) {
        this.drawStaticObjects(fixedFields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
    }
}