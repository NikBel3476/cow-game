class Entity {
    name: EntityName;
    imgUrl!: string;
    linkedHtmlElement: HTMLElement;

    constructor(name: EntityName, linkedHtmlElement: HTMLElement) {
        this.name = name;
        this.linkedHtmlElement = linkedHtmlElement;
    }
}