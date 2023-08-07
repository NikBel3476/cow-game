import { ILevel, MAPPED_LEVELS } from '../../levels';
import {
	Arrow,
	ArrowReact,
	AutoDoor,
	Button,
	Cow,
	DoorOrientation,
	Field,
	FieldReact,
	Goblet,
	HayBale,
	Key,
	LockDoor,
	Piston,
	Pit,
	Slide
} from '../Entities';
import { ArrowColor, Direction, MAPPED_SPRITES, SpriteName } from '../../types';
import { Game } from '../Game';
import { UI } from '../../UI';
import { Render } from '../../Render';
import { CowReact } from '../Entities/GameObjects/CowReact';

export class LevelLoader {
	ui: UI;
	render: Render;

	constructor(game: Game) {
		this.ui = game.ui;
		this.render = game.render;
	}

	initNonInteractiveFields(
		staticFields?: ILevel['MapObjects']['NonInteractive']
	): Field[] {
		const staticFieldsArray: Field[] = [];
		if (staticFields) {
			(Object.keys(staticFields) as SpriteName[]).forEach(
				fieldName =>
					staticFields[fieldName]?.forEach(fieldCoordinates =>
						staticFieldsArray.push(
							new Field(
								{ x: fieldCoordinates[0], y: fieldCoordinates[1] },
								true,
								MAPPED_SPRITES[fieldName],
								this.render.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1]
									.firstChild as HTMLElement
							)
						)
					)
			);
		}
		return staticFieldsArray;
	}

	static loadMapObjects(objects: ILevel['MapObjects']['NonInteractive']): FieldReact[] {
		if (objects === undefined) {
			return [];
		}
		return Object.entries(objects).reduce<FieldReact[]>(
			(acc, [key, object]) =>
				acc.concat(
					object.map(
						coordinates =>
							new FieldReact(
								{ x: coordinates[0] - 1, y: coordinates[1] - 1 },
								true,
								MAPPED_SPRITES[key as SpriteName]
							)
					)
				),
			[]
		);
	}

	static loadInteractiveMapObjects(
		objects: ILevel['MapObjects']['Interactive']
	): FieldReact[] {
		if (objects === undefined) {
			return [];
		}

		const fields: FieldReact[] = [];

		fields.push(
			new FieldReact(
				{
					x: objects.Goblet.coordinates.x - 1,
					y: objects.Goblet.coordinates.y - 1
				},
				true,
				MAPPED_SPRITES.Goblet
			)
		);

		// TODO: remove repeated code
		if (objects.Slide) {
			Object.entries(objects.Slide).forEach(([direction, slides]) => {
				let sprite = '';
				if (direction === 'Up') {
					sprite = MAPPED_SPRITES.SlideUp;
				} else if (direction === 'Right') {
					sprite = MAPPED_SPRITES.SlideRight;
				} else if (direction === 'Down') {
					sprite = MAPPED_SPRITES.SlideDown;
				} else if (direction === 'Left') {
					sprite = MAPPED_SPRITES.SlideLeft;
				} else {
					throw new Error(`Unknown slide direction: ${direction}`);
				}

				slides.forEach(coordinates => {
					fields.push(
						new FieldReact(
							{
								x: coordinates.x - 1,
								y: coordinates.y - 1
							},
							true,
							sprite
						)
					);
				});
			});
		}

		if (objects.HayBale) {
			objects.HayBale.forEach(coordinates => {
				fields.push(
					new FieldReact(
						{
							x: coordinates.x - 1,
							y: coordinates.y - 1
						},
						true,
						MAPPED_SPRITES.HayBale
					)
				);
			});
		}

		if (objects.Pit) {
			fields.push(
				...objects.Pit.map(
					pit =>
						new FieldReact(
							{
								x: pit.coordinates.x - 1,
								y: pit.coordinates.y - 1
							},
							pit.activated,
							pit.activated ? MAPPED_SPRITES.PitActivated : MAPPED_SPRITES.PitNonActivated
						)
				)
			);
		}

		if (objects.Key) {
			fields.push(
				...objects.Key.map(
					coordinates =>
						new FieldReact(
							{
								x: coordinates.x - 1,
								y: coordinates.y - 1
							},
							false,
							MAPPED_SPRITES.Key
						)
				)
			);
		}

		if (objects.LockDoor) {
			Object.entries(objects.LockDoor).forEach(([orientation, lockDoors]) => {
				let sprite = '';
				if (orientation === 'Vertical') {
					sprite = MAPPED_SPRITES.LockDoorV;
				} else if (orientation === 'Horizontal') {
					sprite = MAPPED_SPRITES.LockDoorH;
				} else {
					throw new Error('Unknown lock door orientation');
				}

				fields.push(
					...lockDoors.map(
						coordinates =>
							new FieldReact({ x: coordinates.x - 1, y: coordinates.y - 1 }, true, sprite)
					)
				);
			});
		}

		if (objects.Button) {
			fields.push(
				...objects.Button.map(
					button =>
						new FieldReact(
							{
								x: button.coordinates.x - 1,
								y: button.coordinates.y - 1
							},
							false,
							MAPPED_SPRITES.Button
						)
				)
			);
		}

		if (objects.Piston) {
			Object.entries(objects.Piston).forEach(([direction, pistons]) => {
				let sprite = '';
				if (direction === 'Up') {
					sprite = MAPPED_SPRITES.PistonUp;
				} else if (direction === 'Right') {
					sprite = MAPPED_SPRITES.PistonRight;
				} else if (direction === 'Down') {
					sprite = MAPPED_SPRITES.PistonDown;
				} else if (direction === 'Left') {
					sprite = MAPPED_SPRITES.PistonLeft;
				} else {
					throw new Error(`Unknown slide direction: ${direction}`);
				}

				fields.push(
					...pistons.map(
						piston =>
							new FieldReact(
								{
									x: piston.coordinates.x - 1,
									y: piston.coordinates.y - 1
								},
								true,
								sprite
							)
					)
				);
			});
		}

		return fields;
	}

	initGoblet(goblet: ILevel['MapObjects']['Interactive']['Goblet']): Goblet {
		return new Goblet(
			goblet.coordinates,
			this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1]
				.firstChild as HTMLElement
		);
	}

	initSlides(slides: ILevel['MapObjects']['Interactive']['Slide']): Slide[] {
		const slidesArr: Slide[] = [];
		if (slides) {
			(Object.keys(slides) as Direction[]).forEach(slideDirection =>
				slides[slideDirection].forEach(coordinates => {
					slidesArr.push(
						new Slide(
							{ x: coordinates.x, y: coordinates.y },
							slideDirection,
							this.render.gameTable[coordinates.y - 1][coordinates.x - 1]
								.firstChild as HTMLElement
						)
					);
				})
			);
		}
		return slidesArr;
	}

	initHayBales(hayBales: ILevel['MapObjects']['Interactive']['HayBale']): HayBale[] {
		let count = 0;
		return Object.values(hayBales ?? {}).map(
			coordinates =>
				new HayBale(
					{ x: coordinates.x, y: coordinates.y },
					this.render.movableFields[count++]
				)
		);
	}

	initPits(pits: ILevel['MapObjects']['Interactive']['Pit']): Pit[] {
		const pitsArr: Pit[] = [];
		if (pits) {
			Object.values(pits).forEach(pit =>
				pitsArr.push(
					new Pit(
						pit.coordinates,
						this.render.gameTable[pit.coordinates.y - 1][pit.coordinates.x - 1]
							.firstChild as HTMLElement,
						pit.activated
					)
				)
			);
		}
		return pitsArr;
	}

	initKeys(keys: ILevel['MapObjects']['Interactive']['Key']): Key[] {
		const keysArr: Key[] = [];
		if (keys) {
			Object.values(keys).forEach(coordinates =>
				keysArr.push(
					new Key(
						coordinates,
						this.render.gameTable[coordinates.y - 1][coordinates.x - 1]
							.firstChild as HTMLElement
					)
				)
			);
		}
		return keysArr;
	}

	initLockDoors(lockDoors: ILevel['MapObjects']['Interactive']['LockDoor']): LockDoor[] {
		const lockDoorsArr: LockDoor[] = [];
		if (lockDoors) {
			(Object.keys(lockDoors) as DoorOrientation[]).forEach(lockDoorOrientation => {
				lockDoors[lockDoorOrientation].forEach(coordinates => {
					lockDoorsArr.push(
						new LockDoor(
							coordinates,
							lockDoorOrientation,
							this.render.gameTable[coordinates.y - 1][coordinates.x - 1]
								.firstChild as HTMLElement
						)
					);
				});
			});
		}
		return lockDoorsArr;
	}

	initAutoDoors(doors: ILevel['MapObjects']['Interactive']['AutoDoor']): AutoDoor[] {
		const autoDoorsArr: AutoDoor[] = [];
		if (doors) {
			(Object.keys(doors) as DoorOrientation[]).forEach(orientation =>
				doors[orientation].forEach(door =>
					autoDoorsArr.push(
						new AutoDoor(
							door.id,
							door.coordinates,
							orientation,
							this.render.gameTable[door.coordinates.y - 1][door.coordinates.x - 1]
								.firstChild as HTMLElement
						)
					)
				)
			);
		}
		return autoDoorsArr;
	}

	initPistons(pistons: ILevel['MapObjects']['Interactive']['Piston']): Piston[] {
		const pistonsArr: Piston[] = [];
		if (pistons) {
			(Object.keys(pistons) as Direction[]).forEach(direction => {
				pistons[direction].forEach(piston =>
					pistonsArr.push(
						new Piston(
							piston.coordinates,
							piston.id,
							direction,
							piston.activated,
							this.render.gameTable[piston.coordinates.y - 1][piston.coordinates.x - 1]
								.firstChild as HTMLElement
						)
					)
				);
			});
		}
		return pistonsArr;
	}

	initButtons(buttons: ILevel['MapObjects']['Interactive']['Button']): Button[] {
		return (
			buttons?.map(button => {
				return new Button(
					button.coordinates,
					button.linkedElementsIds,
					this.render.gameTable[button.coordinates.y - 1][button.coordinates.x - 1]
						.firstChild as HTMLElement
				);
			}) ?? []
		);
	}

	initArrows(arrows: ILevel['GameObjects']['Arrows']): Arrow[] {
		const arrowsArr: Arrow[] = [];
		let count = 0;
		(Object.keys(arrows) as ArrowColor[]).forEach(color => {
			(Object.keys(arrows[color]) as Direction[]).forEach(direction => {
				arrows[color][direction].forEach(arrow => {
					const coordinates = arrow.coordinates;
					if (coordinates) {
						arrowsArr.push(
							new Arrow(
								direction,
								color,
								this.render.gameTable[coordinates.y - 1][coordinates.x - 1]
									.firstChild as HTMLElement,
								coordinates
							)
						);
					} else {
						arrowsArr.push(
							new Arrow(
								direction,
								color,
								this.ui.arrowsTable.flat(1)[count++].firstChild as HTMLElement
							)
						);
					}
				});
			});
		});
		return arrowsArr;
	}

	static loadArrows(arrows: ILevel['GameObjects']['Arrows']): ArrowReact[] {
		const arrowsArr: ArrowReact[] = [];
		(Object.keys(arrows) as ArrowColor[]).forEach(color => {
			(Object.keys(arrows[color]) as Direction[]).forEach(direction => {
				arrows[color][direction].forEach(arrow => {
					arrowsArr.push(
						new ArrowReact(
							direction,
							color,
							arrow.coordinates
								? {
										x: arrow.coordinates.x - 1,
										y: arrow.coordinates.y - 1
								  }
								: null,
							arrow.coordinates !== null
						)
					);
				});
			});
		});
		return arrowsArr;
	}

	initCows(cows: ILevel['GameObjects']['Cows']): Cow[] {
		let count = 0;
		return Object.values(cows).map(
			cow =>
				new Cow(
					{ x: cow.coordinates.x, y: cow.coordinates.y },
					cow.direction,
					cow.color,
					this.render.cowHtmlElements[count++]
				)
		);
	}

	static loadCows(cows: ILevel['GameObjects']['Cows']): CowReact[] {
		return Object.values(cows).map(
			cow =>
				new CowReact(
					{ x: cow.coordinates.x - 1, y: cow.coordinates.y - 1 },
					cow.direction,
					cow.color
				)
		);
	}
}
