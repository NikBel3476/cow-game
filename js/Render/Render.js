class Render {
    gameTable;

    constructor(level = {}) {
        // this.drawGameTable("#game-table-wrapper");
        this.htmlGameTable = this.createGameTable();
        document.getElementById("game-table-wrapper").appendChild(this.htmlGameTable);
        this.divCow = this.createDivCow();
        document.getElementById("game-table-wrapper").appendChild(this.divCow);
        this.gameTable = this.getHtmlTable(this.htmlGameTable);
    }

    getHtmlTable(htmlTable) {
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

    createDivCow() {
        const divCow = document.createElement("div");
        divCow.id = "cow-wrapper";
        console.log(this.htmlGameTable.querySelector("td").clientWidth);
        divCow.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
        divCow.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
        divCow.style.top = `${this.htmlGameTable.querySelector("td")}`;
        return divCow;
    }

    drawStaticObjects(fields = {}, mapArrows = {}, goblet = {}) {
        Object.keys(fields).forEach((fieldName) => {
            fields[fieldName].forEach((coordinates) => {
                this.gameTable[coordinates[1] - 1][coordinates[0] - 1].firstChild.style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });

        Object.keys(mapArrows).forEach((fieldName) => {
            mapArrows[fieldName].forEach((arrow) => {
                this.gameTable[arrow.y - 1][arrow.x - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });

        this.gameTable[goblet.y - 1][goblet.x - 1].style.background = `url("../../${CONF.ImgPath.Goblet}") no-repeat center`;
    }

    drawGameObjects(gameObjects = {}) {
        Object.entries(gameObjects).forEach((objArr) => {
            this.gameTable[Math.round(objArr[1].coordinates.y) - 1][Math.round(objArr[1].coordinates.x) - 1].style.background = `url("../../${objArr[1].imgUrl}") no-repeat center`;
        });
    }

    clearScene() {
        this.gameTable.forEach((row) => {
            row.forEach((field) => {
                field.style.background = "";
            });
        });
    }

    drawScene(fields = {}, gameObjects = {}, mapArrows = {}, goblet = {}) {
        this.drawStaticObjects(fields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
    }
}