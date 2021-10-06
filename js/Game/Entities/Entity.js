class Entity {
    name;
    imgUrl = "";
    linkedHtmlElement = "";

    constructor(name = "", linkedHtmlElement = "") {
        this.name = name;
        this.linkedHtmlElement = linkedHtmlElement;
    }
}