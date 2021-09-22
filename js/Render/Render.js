class Render {
    fields;
    gameObjects;
    gameTable;

    constructor(level = {}) {
        const htmlTable = document.getElementById("game-table");
        const rows = Array.from(htmlTable.getElementsByTagName("tr"));
        this.gameTable = rows.map((row) => Array.from(row.getElementsByTagName("td")));
    }

    drawScene(fields = {}, gameObjects = {}) {
        console.log(this.gameTable);
        // example
        // rows[6].getElementsByTagName("td")[6].style.background = 'url("../../src/sprites/svg/CowGreyRight.svg") no-repeat center';
        Object.keys(fields).forEach((fieldName) => {
            // fill fields in the table
            fields[fieldName].forEach((coordinates) => {
                console.log(`../../js/${CONF.ImgPath[fieldName]}`);
                this.gameTable[coordinates[0] - 1][coordinates[1] - 1].style.background = `url("../../${CONF.ImgPath[fieldName]}") no-repeat center`;
            });
            // gameTable[];
        });
    }
}