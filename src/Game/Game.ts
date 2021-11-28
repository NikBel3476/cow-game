import { render } from '../Render';
import { ui } from '../UI';
import { ILevel } from '../levels/ILevel';
import { ArrowColor, Direction, Coordinates, SpriteName, MAPPED_SPRITES } from '../types';
import { IField, HayBale, Arrow, Goblet, Cow, Slide, Pit, Key, Field, IEntity, LockDoor, DoorsOrientation } from "./Entities";

export class Game {
    private _nonInteractiveFields: Field[] = [];
    private _interactiveFields: IField[] = [];
    private _staticObjects: (IField | Arrow)[] = [];
    private _movableObjects: (Cow | HayBale)[] = [];
    private _allObjects: IEntity[] = [];

    private _goblet!: Goblet;
    private _slides!: Slide[];
    private _hayBales!: HayBale[];
    private _pits!: Pit[];
    private _keys!: Key[];
    private _lockDoors!: LockDoor[];

    private _cows!: Cow[];
    private _arrows!: Arrow[];

    private _CowKeysMap: Map<Cow, Key[]> = new Map<Cow, Key[]>();

    private _loop!: NodeJS.Timer;

    constructor() {

    }

    loadLevel(level: ILevel) {
        const {
            MapObjects: {
                NonInteractive,
                Interactive: {
                    Goblet,
                    Slide,
                    HayBale,
                    Pit,
                    Key,
                    LockDoor,
                    ActivatingCouple
                },
            },
            GameObjects: {
                Cows,
                Arrows
            }
        } = level;
        render.createCowHtmlElements(Cows);
        render.createMovableHtmlElements(HayBale);
        this._nonInteractiveFields = this.initNonInteractiveFields(NonInteractive);
        this._goblet = this.initGoblet(Goblet);
        this._slides = this.initSlides(Slide);
        this._hayBales = this.initHayBales(HayBale);
        this._pits = this.initPits(Pit);
        this._keys = this.initKeys(Key);
        this._lockDoors = this.initLockDoors(LockDoor);

        this._cows = this.initCows(Cows);
        this._arrows = this.initArrows(Arrows);

        this._cows.forEach(cow => this._CowKeysMap.set(cow, []));

        this._interactiveFields = [this._goblet, ...this._slides, ...this._hayBales, ...this._pits, ...this._keys, ...this._lockDoors];
        // TODO: add activatingCouple to _staticObjects
        this._staticObjects = [...this._nonInteractiveFields, this._goblet, ...this._slides, ...this._pits, ...this._keys, ...this._lockDoors, ...this._arrows];
        this._movableObjects = [...this._cows, ...this._hayBales];
        this._allObjects = [...this._nonInteractiveFields, ...this._interactiveFields, ...this._cows, ...this._arrows];
    }

    public get arrows(): Arrow[] {
        return this._arrows;
    }

    private initNonInteractiveFields(staticFields?: ILevel['MapObjects']['NonInteractive']): Field[] {
        const staticFieldsArray: Field[] = [];
        if (staticFields) {
            (Object.keys(staticFields) as SpriteName[]).forEach((fieldName) =>
                staticFields[fieldName]?.forEach((fieldCoordinates) =>
                    staticFieldsArray.push(
                        new Field(
                            { x: fieldCoordinates[0], y: fieldCoordinates[1] },
                            MAPPED_SPRITES[fieldName],
                            render.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild as HTMLElement
                        )
                    )
                )
            );
        }
        return staticFieldsArray;
    }

    private initGoblet(goblet: ILevel['MapObjects']['Interactive']['Goblet']): Goblet {
        return new Goblet(goblet.coordinates, ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
    }

    private initSlides(slides: ILevel['MapObjects']['Interactive']['Slide']): Slide[] {
        const slidesArr: Slide[] = [];
        if (slides) {
            (Object.keys(slides) as Direction[]).forEach(slideDirection =>
                slides[slideDirection].forEach(coordinates => {
                    slidesArr.push(
                        new Slide(
                        { x: coordinates.x, y: coordinates.y },
                            slideDirection,
                            render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
                })
            )
        }
        return slidesArr;
    }

    private initHayBales(hayBales: ILevel['MapObjects']['Interactive']['HayBale']): HayBale[] {
        let count = 0;
        return Object.values(hayBales ?? {}).map(coordinates =>
            new HayBale(
                coordinates,
                render.movableFields[count++] as HTMLElement
            )
        );
    }

    private initPits(pits: ILevel['MapObjects']['Interactive']['Pit']): Pit[] {
        const pitsArr: Pit[] = [];
        if (pits) {
            Object.values(pits).forEach(pit =>
                new Pit(
                    pit.coordinates,
                    render.gameTable[pit.coordinates.y - 1][pit.coordinates.x - 1].firstChild as HTMLElement,
                    pit.activated
                )
            )
        }
        return pitsArr;
    }

    private initKeys(keys: ILevel['MapObjects']['Interactive']['Key']): Key[] {
        const keysArr: Key[] = [];
        if (keys) {
            Object.values(keys).forEach(coordinates =>
                keysArr.push(new Key(coordinates, render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement))
            )
        }
        return keysArr;
    }

    private initLockDoors(lockDoors: ILevel['MapObjects']['Interactive']['LockDoor']): LockDoor[] {
        const lockDoorsArr: LockDoor[] = [];
        if (lockDoors) {
            (Object.keys(lockDoors) as DoorsOrientation[]).forEach(lockDoorOrientation => {
               lockDoors[lockDoorOrientation].forEach(coordinates => {
                    lockDoorsArr.push(
                        new LockDoor(
                            coordinates,
                            lockDoorOrientation,
                            render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
               });
            });
        }
        return lockDoorsArr;
    }

    private initCows(cows: ILevel['GameObjects']['Cows']) {
        let count = 0;
        return Object.values(cows).map(cow =>
            new Cow(
                cow.coordinates,
                cow.direction,
                cow.color,
                render.cowHtmlElements[count++]
            )
        );
    }

    private initArrows(arrows: ILevel['GameObjects']['Arrows']): Arrow[] {
        const arrowsArr: Arrow[] = [];
        let count = 0;
        (Object.keys(arrows) as ArrowColor[]).forEach(color => {
            (Object.keys(arrows[color]) as Direction[]).forEach(direction => {
                arrows[color][direction].forEach((arrow) => {
                    const coordinates = arrow.coordinates;
                    if (coordinates) {
                        arrowsArr.push(
                            new Arrow(
                                direction,
                                color,
                                render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement,
                                coordinates
                            )
                        );
                    } else {
                        arrowsArr.push(new Arrow(direction, color, ui.arrowsTable.flat(1)[count++].firstChild as HTMLElement));
                    }
                });
            })
        })
        return arrowsArr;
    }

    getGameObjects(): (Arrow | Cow)[] {
        return [
            ...this._cows,
            ...this._arrows
        ];
    }

    getFieldCoordinates(htmlElement: HTMLElement): Coordinates | undefined {
        const indexes = ui.getMapElementIndex(htmlElement);
        if (indexes)
            return { x: indexes[1] + 1, y: indexes[0] + 1}
        return undefined;
    }

    findFieldByCoordinates(coordinates: Coordinates): IField | HayBale | undefined {
        return [...this._nonInteractiveFields, ...this._interactiveFields].find((field: IField | HayBale) =>
            field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y);
    }

    findMapObjectByHtmlElement(htmlElement: HTMLElement): IEntity | undefined {
        return this._allObjects.find(field =>
            htmlElement === field?.linkedHtmlElement
        );
    }

    findGameObjectByHtmlElement(htmlElement: HTMLElement): Arrow | Cow | undefined {
        return this.getGameObjects().find((obj: Arrow | Cow) =>
            htmlElement === (obj?.linkedHtmlElement as HTMLElement)
        );
    }

    findArrowByHtmlElement(htmlElement: HTMLElement): Arrow | undefined {
        return this._arrows.find((arrow: Arrow) => arrow.linkedHtmlElement === htmlElement);
    }

    spliceArrow(arrow: Arrow) {
        return this._arrows.splice(this._arrows.indexOf(arrow), 1)[1];
    }

    placeArrowToMap(arrow: Arrow, coordinates: Coordinates, newLinkedHtmlElement: HTMLElement): void {
        arrow.coordinates = coordinates;
        arrow.linkedHtmlElement = newLinkedHtmlElement;
    }

    // -------------------- RENDER --------------------

    renderScene(): void {
        this.clearScene();
        render.drawScene(
            this._staticObjects,
            this._movableObjects
        );
    }

    clearScene(): void {
        render.clearScene();
    }

    // -------------------- GAME --------------------

    checkArrows(cow: Cow): void {
        this._arrows.forEach((arrow: Arrow) => {
            if (cow.coordinates.x === arrow?.coordinates?.x && cow.coordinates.y === arrow.coordinates.y) {
                cow.direction = arrow.direction;
                this._staticObjects.splice(this._staticObjects.indexOf(arrow), 1);
            }
        });
    }

    checkGoblet(cow: Cow): boolean {
        return cow.color === "Grey" &&
            this._goblet.coordinates.x === cow.coordinates.x &&
            this._goblet.coordinates.y === cow.coordinates.y;
    }

    checkKeys(cow: Cow): void {
        this._keys.forEach(key => {
            if (cow.coordinates.x === key.coordinates.x && cow.coordinates.y === key.coordinates.y) {
                this._CowKeysMap.get(cow)?.push(key);
                this._staticObjects.splice(this._staticObjects.indexOf(key), 1);
            }
        });
    }

    startGame(): void {
        if (!this._loop) {
            this._loop = setInterval(() => {
                let isVictory = false;
                let nextCoordinates: Coordinates;
                Object.values(this._cows).forEach((cow: Cow) => {
                        this.checkArrows(cow);
                        isVictory = this.checkGoblet(cow);
                        this.checkKeys(cow);
                        if (!isVictory) {
                            const currentField: IField | HayBale | undefined = this.findFieldByCoordinates(cow.coordinates);
                            if (currentField instanceof Slide) {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextCoordinates = { x: cow.coordinates.x, y: cow.coordinates.y - 1 };
                                    break;
                                case "Right":
                                    nextCoordinates = { x: cow.coordinates.x + 1, y: cow.coordinates.y };
                                    break;
                                case "Down":
                                    nextCoordinates = { x: cow.coordinates.x, y: cow.coordinates.y + 1 };
                                    break;
                                case "Left":
                                    nextCoordinates = { x: cow.coordinates.x - 1, y: cow.coordinates.y };
                                    break;
                            }
                            const nextField: IField | HayBale | undefined = this.findFieldByCoordinates(nextCoordinates);
                            if (nextField?.impassable) {
                                if (cow.layer === 2) cow.move();
                                if (nextField instanceof LockDoor) {
                                    const keys = this._CowKeysMap.get(cow);
                                    if (keys) {
                                        keys.pop();
                                        this._staticObjects.splice(this._staticObjects.indexOf(nextField), 1);
                                        this._interactiveFields.splice(this._interactiveFields.indexOf(nextField), 1);
                                        cow.move();
                                    }
                                }
                                if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                                if (nextField instanceof HayBale) {
                                    switch (cow.direction) {
                                        case "Up":
                                            nextField.coordinates.y = Math.round((nextCoordinates.y - 0.1) * 100) / 100;
                                            break;
                                        case "Right":
                                            nextField.coordinates.x = Math.round((nextCoordinates.x + 0.1) * 100) / 100;
                                            break;
                                        case "Down":
                                            nextField.coordinates.y = Math.round((nextCoordinates.y + 0.1) * 100) / 100;
                                            break;
                                        case "Left":
                                            nextField.coordinates.x = Math.round((nextCoordinates.x - 0.1) * 100) / 100;
                                            break;
                                    }
                                    cow.move();
                                }
                            } else {
                                cow.move(); // FIXME: fix move on cow.layer === 2
                            }
                        } else {
                            this.endGame();
                            alert("YOU WIN!!!");
                        }
                });
                this.renderScene();
            }, 40);
        }
    }

    endGame() {
        clearInterval(this._loop);
    }
}
