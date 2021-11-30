import { render } from '../Render';
import { ui } from '../UI';
import { ILevel } from '../levels/ILevel';
import { ArrowColor, Direction, Coordinates, SpriteName, MAPPED_SPRITES } from '../types';
import { IField, HayBale, Arrow, Goblet, Cow, Slide, Pit, Key, Field, IEntity, LockDoor, DoorOrientation, AutoDoor } from "./Entities";

export class Game {
    private _nonInteractiveFields: Field[] = [];
    private _interactiveFields: (IField | Arrow)[] = [];
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
                    ActivatingTuple
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

        this._interactiveFields = [this._goblet, ...this._slides, ...this._hayBales, ...this._pits, ...this._keys, ...this._lockDoors, ...this._arrows];
        // TODO: add activatingCouple to _staticObjects
        this._staticObjects = [...this._nonInteractiveFields, this._goblet, ...this._slides, ...this._pits, ...this._keys, ...this._lockDoors, ...this._arrows];
        this._movableObjects = [...this._cows, ...this._hayBales];
        this._allObjects = [...this._nonInteractiveFields, ...this._interactiveFields, ...this._cows];
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
                pitsArr.push(
                    new Pit(
                        pit.coordinates,
                        render.gameTable[pit.coordinates.y - 1][pit.coordinates.x - 1].firstChild as HTMLElement,
                        pit.activated
                    )
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
            (Object.keys(lockDoors) as DoorOrientation[]).forEach(lockDoorOrientation => {
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

    private initActivatingTuple(activatingTuple: ILevel['MapObjects']['Interactive']['ActivatingTuple']) {

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

    findFieldByCoordinates(coordinates: Coordinates): IField | Arrow | undefined {
        return [...this._nonInteractiveFields, ...this._interactiveFields].find(field => {
            if (field.coordinates)
                return field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y;
        });
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
    startGame(): void {
        if (!this._loop) {
            this._loop = setInterval(() => {
                Object.values(this._cows).forEach((cow: Cow) => {
                    const currentField: IField | Arrow | undefined = this.findFieldByCoordinates(cow.coordinates);
                    if (currentField instanceof Slide) {
                        cow.layer = cow.layer === 1 ? 2 : 1;
                    }
                    if (currentField instanceof Arrow) {
                        if (cow.coordinates.x === currentField?.coordinates?.x && cow.coordinates.y === currentField.coordinates.y) {
                            cow.direction = currentField.direction;
                            // FIXME: delete checking staticObjects and interactiveFields at the same time
                            this._staticObjects.splice(this._staticObjects.indexOf(currentField), 1);
                            this._interactiveFields.splice(this._interactiveFields.indexOf(currentField), 1);
                        }
                    }
                    if (currentField instanceof Key) {
                        if (cow.coordinates.x === currentField.coordinates.x && cow.coordinates.y === currentField.coordinates.y) {
                            this._CowKeysMap.get(cow)?.push(currentField);
                            // FIXME: delete checking staticObjects and interactiveFields at the same time
                            this._staticObjects.splice(this._staticObjects.indexOf(currentField), 1);
                            this._interactiveFields.splice(this._interactiveFields.indexOf(currentField), 1);
                        }
                    }
                    if (currentField instanceof Goblet) {
                        if (
                            cow.color === "Grey" &&
                            this._goblet.coordinates.x === cow.coordinates.x &&
                            this._goblet.coordinates.y === cow.coordinates.y)
                        {
                            this.endGame();
                            return alert("YOU WIN!!!");
                        }
                    }
                    if (currentField instanceof Pit) {
                        currentField.activate();
                        cow.move();
                    }

                    let nextCoordinates: Coordinates;
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
                    const nextField: IField | Arrow | undefined = this.findFieldByCoordinates(nextCoordinates);
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        if (nextField?.impassable) {
                            if (cow.layer === 2) cow.move();
                            if (nextField instanceof LockDoor) {
                                const keys = this._CowKeysMap.get(cow);
                                if (keys && keys.length !== 0) {
                                    keys.pop();
                                    this._staticObjects.splice(this._staticObjects.indexOf(nextField), 1);
                                    this._interactiveFields.splice(this._interactiveFields.indexOf(nextField), 1);
                                    cow.move();
                                }
                            }
                            if (nextField instanceof Slide && nextField.direction === cow.direction) cow.move();
                        } else { // passable field
                            if (cow.layer === 1) cow.move();
                        }
                    } else { // cow coordinates is not integer
                        cow.move();
                    }
                    if (nextField instanceof HayBale && cow.layer === 1) {
                        switch (cow.direction) {
                            case "Up":
                                nextField.coordinates.y = Math.round(Number((nextCoordinates.y - 0.1).toFixed(1)));
                                break;
                            case "Right":
                                nextField.coordinates.x = Math.round(Number((nextCoordinates.x + 0.1).toFixed(1)));
                                break;
                            case "Down":
                                nextField.coordinates.y = Math.round(Number((nextCoordinates.y + 0.1).toFixed(1)));
                                break;
                            case "Left":
                                nextField.coordinates.x = Math.round(Number((nextCoordinates.x - 0.1).toFixed(1)));
                                break;
                        }
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
