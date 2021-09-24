class Render {
    gameTable;

    constructor(level = {}) {
        const htmlTable = document.getElementById("game-table");
        const rows = Array.from(htmlTable.getElementsByTagName("tr"));
        this.gameTable = rows.map((row) => Array.from(row.getElementsByTagName("td")));
    }

    drawStaticObjects(fields = {}, mapArrows = {}) {
        Object.keys(fields).forEach((fieldName) => {
            fields[fieldName].forEach((coordinates) => {
                this.gameTable[coordinates[0] - 1][coordinates[1] - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });

        Object.keys(mapArrows).forEach((fieldName) => {
            mapArrows[fieldName].forEach((coordinates) => {
                this.gameTable[coordinates[0] - 1][coordinates[1] - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });
    }

    drawGameObjects(gameObjects = {}) {
        Object.entries(gameObjects).forEach((objArr) => {
            this.gameTable[objArr[1].coordinates.y - 1][objArr[1].coordinates.x - 1].style.background = `url("../../${objArr[1].imgUrl}") no-repeat center`;
        });
    }

    clearScene() {
        this.gameTable.forEach((row) => {
            row.forEach((field) => {
                field.style.background = "";
            });
        });
    }

    drawScene(fields = {}, gameObjects = {}, mapArrows = {}) {
        this.drawStaticObjects(fields, mapArrows);
        this.drawGameObjects(gameObjects);
    }
}