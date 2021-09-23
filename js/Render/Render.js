class Render {
    fields;
    gameObjects;
    gameTable;

    constructor(level = {}) {
        const htmlTable = document.getElementById("game-table");
        const rows = Array.from(htmlTable.getElementsByTagName("tr"));
        this.gameTable = rows.map((row) => Array.from(row.getElementsByTagName("td")));
    }

    drawStaticObjects(fields = {}) {
        Object.keys(fields).forEach((fieldName) => {
            fields[fieldName].forEach((coordinates) => {
                this.gameTable[coordinates[0] - 1][coordinates[1] - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
        });
    }

    drawScene(fields = {}, gameObjects = {}) {
        this.drawStaticObjects(fields);
    }
}