class Render {
    htmlGameTable: HTMLElement;
    htmlArrowsTable: HTMLElement;
    gameTable: HTMLElement[][];
    arrowsTable: HTMLElement[][];
    cowHtmlElements: HTMLElement[];

    constructor(ui: UI) {
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }

    createCowHtmlElements(cows: ILevel['cows']) {
        let count = 0;
        const htmlElements: HTMLElement[] = [];
        Object.values(cows).forEach((cow: ICow) => {
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

    drawStaticObjects(fields: Field[], mapArrows: Arrow[], goblet: Goblet) {
        Object.values(fields).forEach((field: Field) => {
            const elem = (this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild as HTMLElement)
            elem.style.background = `url("../../${field.imgUrl}") center/contain no-repeat`;
        });

        Object.values(mapArrows).forEach((arrow: Arrow) => {
                const elem = this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild as HTMLElement;
                elem.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
                elem.style.zIndex = '10';
        });

        const gobletElem = (this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
        gobletElem.style.background = `url("../../${goblet.imgUrl}") no-repeat center`;
    }

    drawGameObjects(gameObjects: { mobileFields?: Field[], cows: Cow[] }) {
        if (gameObjects.mobileFields) {
            gameObjects.mobileFields.forEach((field: Field)  => {
                field.linkedHtmlElement.style.top = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (field.coordinates.y - 1)}px`;
                field.linkedHtmlElement.style.left = `${this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (field.coordinates.x - 1)}px`;
                field.linkedHtmlElement.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                field.linkedHtmlElement.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
                field.linkedHtmlElement.style.background = `url("../../${field.imgUrl}") no-repeat center`;
            });
        }

        Object.values(gameObjects.cows).forEach((cow: Cow)  => {
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

    drawArrows(arrows: Arrow[]) {
        this.clearArrowsTable();
        arrows.forEach((arrow: Arrow) => {
            arrow.linkedHtmlElement.style.background = `url("../../${arrow.imgUrl}") no-repeat center`;
        });
    }

    clearScene() {
        this.gameTable.forEach(row => {
            row.forEach((field: HTMLElement) => {
                (field.firstChild as HTMLElement).style.background = "";
            });
        });
    }

    clearArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(field =>
                (field.firstChild as HTMLElement).style.background = ""
            )
        })
    }

    scaleArrowsTable() {
        this.arrowsTable.forEach(row => {
            row.forEach(td => {
                td.style.width = `${this.htmlGameTable.querySelector("td").clientWidth}px`;
                td.style.height = `${this.htmlGameTable.querySelector("td").clientHeight}px`;
            });
        });
    }

    drawScene(
        staticFields: Field[],
        gameObjects: {
            mobileFields?: Field[],
            cows: Cow[]
        },
        mapArrows: Arrow[],
        goblet: Goblet
    ) {
        this.drawStaticObjects(staticFields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
        this.scaleArrowsTable();
    }
}