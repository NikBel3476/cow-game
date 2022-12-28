import { Render } from '../Render';
import { EventHandler, UI } from '../UI';
import { ILevel, MAPPED_LEVELS } from '../levels';
import { Coordinates, MAPPED_SPRITES } from '../types';
import {
	IField,
	HayBale,
	Arrow,
	Goblet,
	Cow,
	Slide,
	Pit,
	Key,
	Field,
	IEntity,
	LockDoor,
	AutoDoor,
	Button,
	Piston,
	IGameObject
} from './Entities';
import { LevelLoader } from './LevelLoader';
import { gameConfig } from '../Config.gen';

export class Game {
	ui: UI;
	render: Render;

	private _currentLevel: number;

	private _nonInteractiveFields: Field[] = [];
	private _interactiveFields: (IField | Arrow)[] = [];
	private _staticObjects: (IField | Arrow)[] = [];
	private _movableObjects: (Cow | HayBale)[] = [];
	private _mapObjects: (IField | IGameObject)[] = [];

	private _goblet!: Goblet;
	private _slides!: Slide[];
	private _hayBales!: HayBale[];
	private _pits!: Pit[];
	private _keys!: Key[];
	private _lockDoors!: LockDoor[];
	private _buttons!: Button[];
	private _autoDoors!: AutoDoor[];
	private _pistons!: Piston[];

	private _cows!: Cow[];
	private _arrows!: Arrow[];
	private _pastArrows: Arrow[] = [];

	private _CowKeysMap: Map<Cow, Key[]> = new Map<Cow, Key[]>();

	loop: number = 0;
	private levelLoader: LevelLoader;

	private eventHandler: EventHandler;

	constructor() {
		this.ui = new UI(this, '#game-table-wrapper', '#ui-table-wrapper');
		this.render = new Render(this);
		const levelFromStorage = window.localStorage.getItem('level');
		this._currentLevel = levelFromStorage ? Number(levelFromStorage) : 1;
		this.levelLoader = new LevelLoader(this);
		this.loadLevel(MAPPED_LEVELS[this._currentLevel - 1]);
		this.eventHandler = new EventHandler(this);
	}

	public get arrows(): Arrow[] {
		return this._arrows;
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
					Button,
					AutoDoor,
					Piston
				}
			},
			GameObjects: { Cows, Arrows }
		} = level;
		this.render.deleteScene();
		this.render.createCowHtmlElements(Cows);
		this.render.createMovableHtmlElements(HayBale);
		this._nonInteractiveFields =
			this.levelLoader.initNonInteractiveFields(NonInteractive);
		this._goblet = this.levelLoader.initGoblet(Goblet);
		this._slides = this.levelLoader.initSlides(Slide);
		this._hayBales = this.levelLoader.initHayBales(HayBale);
		this._pits = this.levelLoader.initPits(Pit);
		this._keys = this.levelLoader.initKeys(Key);
		this._lockDoors = this.levelLoader.initLockDoors(LockDoor);

		this._autoDoors = this.levelLoader.initAutoDoors(AutoDoor);
		this._pistons = this.levelLoader.initPistons(Piston);
		this._buttons = this.levelLoader.initButtons(Button);
		this.linkButtonsWithActiveObjects(this._buttons);

		this._cows = this.levelLoader.initCows(Cows);
		this._arrows =
			this._pastArrows.length !== 0
				? this._pastArrows.slice()
				: this.levelLoader.initArrows(Arrows);

		this._cows.forEach(cow => this._CowKeysMap.set(cow, []));

		// FIXME: unite entities in single array
		this._mapObjects = [
			...this._nonInteractiveFields,
			this._goblet,
			...this._slides,
			...this._hayBales,
			...this._pits,
			...this._keys,
			...this._lockDoors,
			...this._autoDoors,
			...this._pistons,
			...this._buttons,
			...this._cows,
			...this._arrows
		];
		this._interactiveFields = [
			this._goblet,
			...this._slides,
			...this._hayBales,
			...this._pits,
			...this._keys,
			...this._lockDoors,
			...this._arrows,
			...this._buttons,
			...this._autoDoors,
			...this._pistons
		];
		this._staticObjects = [
			...this._nonInteractiveFields,
			this._goblet,
			...this._slides,
			...this._pits,
			...this._keys,
			...this._lockDoors,
			...this._arrows,
			...this._buttons,
			...this._autoDoors,
			...this._pistons
		];
		this._movableObjects = [...this._cows, ...this._hayBales];
		this.ui.showModalWindow();
	}

	loadLevelByLevelNum(levelNum: number) {
		localStorage.setItem('level', String(levelNum));
		this._currentLevel = levelNum;
		this.loadLevel(MAPPED_LEVELS[levelNum - 1]);
		this.eventHandler.addArrowsEventListeners();
		this.renderScene();
	}

	private loadNextLevel() {
		const completedLevels = Number(localStorage.getItem('completedLevels'));
		if (completedLevels < this._currentLevel) {
			localStorage.setItem('completedLevels', String(this._currentLevel));
		}
		++this._currentLevel;
		window.localStorage.setItem('level', `${this._currentLevel}`);
		if (this._currentLevel < MAPPED_LEVELS.length) {
			this._pastArrows = [];
			this.loadLevel(MAPPED_LEVELS[this._currentLevel - 1]);
			this.eventHandler.addArrowsEventListeners();
		}
	}

	reloadLevel(): void {
		if (this.loop) {
			clearInterval(this.loop);
			this.loop = 0;
		}
		this._pastArrows = this._arrows.slice();
		this.loadLevel(MAPPED_LEVELS[this._currentLevel - 1]);
		this.eventHandler.addArrowsEventListeners();
		this.renderScene();
	}

	restartGame(): void {
		if (this.loop) {
			clearInterval(this.loop);
			this.loop = 0;
		}
		this._pastArrows = [];
		this._currentLevel = 1;
		window.localStorage.setItem('level', `${this._currentLevel}`);
		this.loadLevel(MAPPED_LEVELS[this._currentLevel - 1]);
		this.eventHandler.addArrowsEventListeners();
		this.renderScene();
	}

	private linkButtonsWithActiveObjects(buttons: Button[]): void {
		buttons.forEach(button => {
			const linkedElems: (AutoDoor | Piston)[] = [];
			this._autoDoors.forEach(door => {
				if (button.linkedElementsIds.includes(door.id)) {
					linkedElems.push(door);
				}
			});
			this._pistons.forEach(piston => {
				if (button.linkedElementsIds.includes(piston.id)) {
					linkedElems.push(piston);
				}
			});
			button.linkedElements = linkedElems;
		});
	}

	getGameObjects(): (Arrow | Cow)[] {
		return [...this._cows, ...this._arrows];
	}

	getFieldCoordinates(htmlElement: HTMLElement): Coordinates | undefined {
		const indexes = this.ui.getMapElementIndex(htmlElement);
		if (indexes) return { x: indexes[1] + 1, y: indexes[0] + 1 };
	}

	findFieldByCoordinates(coordinates: Coordinates): IField | Arrow | undefined {
		return [...this._nonInteractiveFields, ...this._interactiveFields].find(field => {
			if (field.coordinates)
				return (
					field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y
				);
		});
	}

	findCowByCoordinates(coordinates: Coordinates): Cow | undefined {
		return this._cows.find(
			cow => cow.coordinates.x === coordinates.x && cow.coordinates.y === coordinates.y
		);
	}

	findStaticFieldByCoordinates(coordinates: Coordinates): IField | Arrow | undefined {
		return this._staticObjects.find(field => {
			if (field.coordinates)
				return (
					field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y
				);
		});
	}

	findMapObjectByHtmlElement(htmlElement: HTMLElement): IEntity | undefined {
		return [
			...this._nonInteractiveFields,
			...this._interactiveFields,
			...this._cows
		].find(field => htmlElement === field?.linkedHtmlElement);
	}

	findGameObjectByHtmlElement(htmlElement: HTMLElement): Arrow | Cow | undefined {
		return this.getGameObjects().find(
			(obj: Arrow | Cow) => htmlElement === (obj?.linkedHtmlElement as HTMLElement)
		);
	}

	findArrowByHtmlElement(htmlElement: HTMLElement): Arrow | undefined {
		return this._arrows.find((arrow: Arrow) => arrow.linkedHtmlElement === htmlElement);
	}

	placeArrowToMap(
		arrow: Arrow,
		coordinates: Coordinates,
		newLinkedHtmlElement: HTMLElement
	): void {
		arrow.coordinates = coordinates;
		arrow.linkedHtmlElement = newLinkedHtmlElement;
		this.clearScene();
		this.renderScene();
	}

	placeArrowToTable(arrow: Arrow, newLinkedHtmlElement: HTMLElement): void {
		arrow.coordinates = undefined;
		arrow.linkedHtmlElement = newLinkedHtmlElement;
		this.clearScene();
		this.renderScene();
	}

	// -------------------- RENDER --------------------

	clearScene(): void {
		this.render.clearScene();
	}

	renderScene(): void {
		this.render.drawScene(this._staticObjects, this._movableObjects);
	}

	// -------------------- GAME --------------------

	mainLoopFunc() {
		Object.values(this._cows).forEach((cow: Cow) => {
			const currentField: IField | Arrow | undefined = this.findFieldByCoordinates(
				cow.coordinates
			);
			if (currentField instanceof Slide) {
				cow.layer = cow.layer === 1 ? 2 : 1;
			}

			if (currentField instanceof Arrow) {
				if (
					cow.coordinates.x === currentField?.coordinates?.x &&
					cow.coordinates.y === currentField.coordinates.y
				) {
					cow.direction = currentField.direction;
					// FIXME: delete checking staticObjects and interactiveFields at the same time
					if (currentField.color === 'Red') {
						currentField.linkedHtmlElement.style.background = '';
						this._staticObjects.splice(this._staticObjects.indexOf(currentField), 1);
						this._interactiveFields.splice(
							this._interactiveFields.indexOf(currentField),
							1
						);
					}
				}
			}

			if (currentField instanceof Key) {
				if (
					cow.coordinates.x === currentField.coordinates.x &&
					cow.coordinates.y === currentField.coordinates.y
				) {
					this._CowKeysMap.get(cow)?.push(currentField);
					currentField.linkedHtmlElement.style.background = '';
					// FIXME: delete checking staticObjects and interactiveFields at the same time
					this._staticObjects.splice(this._staticObjects.indexOf(currentField), 1);
					this._interactiveFields.splice(
						this._interactiveFields.indexOf(currentField),
						1
					);
				}
			}

			if (
				cow.color === 'Grey' &&
				this._goblet.coordinates.x === cow.coordinates.x &&
				this._goblet.coordinates.y === cow.coordinates.y
			) {
				this.ui.showEndLevelModalWindow();
				return this.endGame();
			}

			if (currentField instanceof Pit) {
				currentField.activate();
			}

			if (currentField instanceof Button) {
				currentField.activate();
				this._cows.forEach(cow => {
					this._pistons.forEach(piston => {
						if (
							cow.coordinates.x === piston.coordinates.x &&
							cow.coordinates.y === piston.coordinates.y
						) {
							switch (piston.direction) {
								case 'Up':
									cow.coordinates.y--;
									break;
								case 'Right':
									cow.coordinates.x++;
									break;
								case 'Down':
									cow.coordinates.y++;
									break;
								case 'Left':
									cow.coordinates.x--;
									break;
							}
						}
					});
				});
			}

			let nextCoordinates: Coordinates;
			switch (cow.direction) {
				case 'Up':
					nextCoordinates = { x: cow.coordinates.x, y: cow.coordinates.y - 1 };
					break;
				case 'Right':
					nextCoordinates = { x: cow.coordinates.x + 1, y: cow.coordinates.y };
					break;
				case 'Down':
					nextCoordinates = { x: cow.coordinates.x, y: cow.coordinates.y + 1 };
					break;
				case 'Left':
					nextCoordinates = { x: cow.coordinates.x - 1, y: cow.coordinates.y };
					break;
			}

			const nextField: IField | Arrow | undefined =
				this.findFieldByCoordinates(nextCoordinates);
			if (nextField?.impassable) {
				if (cow.layer === 2) cow.move();
				if (nextField instanceof LockDoor) {
					const keys = this._CowKeysMap.get(cow);
					if (keys && keys.length !== 0) {
						keys.pop();
						nextField.linkedHtmlElement.style.background = '';
						this._staticObjects.splice(this._staticObjects.indexOf(nextField), 1);
						this._interactiveFields.splice(this._interactiveFields.indexOf(nextField), 1);
						cow.move();
					}
				}
				if (nextField instanceof Slide && nextField.direction === cow.direction)
					cow.move();
			} else {
				// passable field
				if (cow.layer === 1) {
					switch (cow.direction) {
						case 'Up': {
							const cowAhead: Cow | undefined = this.findCowByCoordinates({
								x: cow.coordinates.x,
								y: cow.coordinates.y - 1
							});
							if (cowAhead) {
								if (
									!this.findFieldByCoordinates({
										x: cow.coordinates.x,
										y: cow.coordinates.y - 2
									})?.impassable
								) {
									cowAhead.coordinates.y--;
									cow.move();
								}
							} else {
								cow.move();
							}
							break;
						}
						case 'Right': {
							const cowAhead: Cow | undefined = this.findCowByCoordinates({
								x: cow.coordinates.x + 1,
								y: cow.coordinates.y
							});
							if (cowAhead) {
								if (
									!this.findFieldByCoordinates({
										x: cow.coordinates.x + 2,
										y: cow.coordinates.y
									})?.impassable
								) {
									cowAhead.coordinates.x++;
									cow.move();
								}
							} else {
								cow.move();
							}
							break;
						}
						case 'Down': {
							const cowAhead: Cow | undefined = this.findCowByCoordinates({
								x: cow.coordinates.x,
								y: cow.coordinates.y + 1
							});
							if (cowAhead) {
								if (
									!this.findFieldByCoordinates({
										x: cow.coordinates.x,
										y: cow.coordinates.y + 2
									})?.impassable
								) {
									cowAhead.coordinates.y++;
									cow.move();
								}
							} else {
								cow.move();
							}
							break;
						}
						case 'Left': {
							const cowAhead: Cow | undefined = this.findCowByCoordinates({
								x: cow.coordinates.x - 1,
								y: cow.coordinates.y
							});
							if (cowAhead) {
								if (
									!this.findFieldByCoordinates({
										x: cow.coordinates.x - 2,
										y: cow.coordinates.y
									})?.impassable
								) {
									cowAhead.coordinates.x--;
									cow.move();
								}
							} else {
								cow.move();
							}
							break;
						}
					}
				}
			}

			if (nextField instanceof HayBale && cow.layer === 1) {
				switch (cow.direction) {
					case 'Up': {
						const fieldInFrontOfHayBale = this.findFieldByCoordinates({
							x: nextCoordinates.x,
							y: nextCoordinates.y - 1
						});
						if (
							!fieldInFrontOfHayBale?.impassable ||
							fieldInFrontOfHayBale instanceof Pit
						) {
							nextField.coordinates.y = Math.round((nextCoordinates.y - 1) * 100) / 100;
							cow.move();
						}
						break;
					}
					case 'Right': {
						const fieldInFrontOfHayBale = this.findFieldByCoordinates({
							x: nextCoordinates.x + 1,
							y: nextCoordinates.y
						});
						if (
							!fieldInFrontOfHayBale?.impassable ||
							fieldInFrontOfHayBale instanceof Pit
						) {
							nextField.coordinates.x = Math.round((nextCoordinates.x + 1) * 100) / 100;
							cow.move();
						}
						break;
					}
					case 'Down': {
						const fieldInFrontOfHayBale = this.findFieldByCoordinates({
							x: nextCoordinates.x,
							y: nextCoordinates.y + 1
						});
						if (
							!fieldInFrontOfHayBale?.impassable ||
							fieldInFrontOfHayBale instanceof Pit
						) {
							nextField.coordinates.y = Math.round((nextCoordinates.y + 1) * 100) / 100;
							cow.move();
						}
						break;
					}
					case 'Left': {
						const fieldInFrontOfHayBale = this.findFieldByCoordinates({
							x: nextCoordinates.x - 1,
							y: nextCoordinates.y
						});
						if (
							!fieldInFrontOfHayBale?.impassable ||
							fieldInFrontOfHayBale instanceof Pit
						) {
							nextField.coordinates.x = Math.round((nextCoordinates.x - 1) * 100) / 100;
							cow.move();
						}
						break;
					}
				}

				const fieldUnderHayBale = this.findStaticFieldByCoordinates(
					nextField.coordinates
				);
				if (fieldUnderHayBale instanceof Pit && fieldUnderHayBale.activated) {
					this._movableObjects.splice(this._movableObjects.indexOf(nextField), 1);
					this._interactiveFields.splice(this._interactiveFields.indexOf(nextField), 1);
					nextField.linkedHtmlElement.style.background = ''; // FIXME: move style changing to render
					this._staticObjects.splice(this._staticObjects.indexOf(fieldUnderHayBale), 1);
					this._interactiveFields.splice(
						this._interactiveFields.indexOf(fieldUnderHayBale),
						1
					);
					this._staticObjects.push(
						new Field(
							{
								x: fieldUnderHayBale.coordinates.x,
								y: fieldUnderHayBale.coordinates.y
							},
							false,
							MAPPED_SPRITES.HayBaleInPit,
							fieldUnderHayBale.linkedHtmlElement
						)
					);
					this._nonInteractiveFields.push(
						new Field(
							{
								x: fieldUnderHayBale.coordinates.x,
								y: fieldUnderHayBale.coordinates.y
							},
							false,
							MAPPED_SPRITES.HayBaleInPit,
							fieldUnderHayBale.linkedHtmlElement
						)
					);
				}
			}
		});
		this.renderScene();
	}

	startGame(): void {
		if (!this.loop) {
			this.loop = window.setInterval(() => this.mainLoopFunc(), gameConfig.loopTime);
		}
	}

	endGame() {
		if (this.loop) {
			clearInterval(this.loop);
			this.loop = 0;
		}
		this.loadNextLevel();
	}

	scaleArrowsTable() {
		this.render.scaleArrowsTable();
	}
}
