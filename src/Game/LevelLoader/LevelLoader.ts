import { ILevel } from "../../levels";
import { Arrow, AutoDoor, Button, Cow, DoorOrientation, Field, Goblet, HayBale, Key, LockDoor, Piston, Pit, Slide } from "../Entities";
import { ArrowColor, Direction, MAPPED_SPRITES, SpriteName } from "../../types";
import { render } from "../../Render";
import { ui } from "../../UI";

export class LevelLoader {
    initNonInteractiveFields(staticFields?: ILevel['MapObjects']['NonInteractive']): Field[] {
        const staticFieldsArray: Field[] = [];
        if (staticFields) {
            (Object.keys(staticFields) as SpriteName[]).forEach((fieldName) =>
                staticFields[fieldName]?.forEach((fieldCoordinates) =>
                    staticFieldsArray.push(
                        new Field(
                            { x: fieldCoordinates[0], y: fieldCoordinates[1] },
                            true,
                            MAPPED_SPRITES[fieldName],
                            render.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild as HTMLElement
                        )
                    )
                )
            );
        }
        return staticFieldsArray;
    }

    initGoblet(goblet: ILevel['MapObjects']['Interactive']['Goblet']): Goblet {
        return new Goblet(goblet.coordinates, ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild as HTMLElement)
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
                            render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
                })
            )
        }
        return slidesArr;
    }

    initHayBales(hayBales: ILevel['MapObjects']['Interactive']['HayBale']): HayBale[] {
        let count = 0;
        return Object.values(hayBales ?? {}).map(coordinates =>
            new HayBale(
                coordinates,
                render.movableFields[count++]
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
                        render.gameTable[pit.coordinates.y - 1][pit.coordinates.x - 1].firstChild as HTMLElement,
                        pit.activated
                    )
                )
            )
        }
        return pitsArr;
    }

    initKeys(keys: ILevel['MapObjects']['Interactive']['Key']): Key[] {
        const keysArr: Key[] = [];
        if (keys) {
            Object.values(keys).forEach(coordinates =>
                keysArr.push(new Key(coordinates, render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement))
            )
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
                            render.gameTable[coordinates.y - 1][coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
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
                            render.gameTable[door.coordinates.y - 1][door.coordinates.x - 1].firstChild as HTMLElement
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
                            render.gameTable[piston.coordinates.y - 1][piston.coordinates.x - 1].firstChild as HTMLElement
                        )
                    )
                )
            });
        }
        return pistonsArr;
    }

    initButtons(buttons: ILevel['MapObjects']['Interactive']['Button']): Button[] {
        return buttons?.map(button => {
                return new Button(
                    button.coordinates,
                    button.linkedElementsIds,
                    render.gameTable[button.coordinates.y - 1][button.coordinates.x - 1].firstChild as HTMLElement
                )
            }
        ) ?? [];
    }

    initArrows(arrows: ILevel['GameObjects']['Arrows']): Arrow[] {
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

    initCows(cows: ILevel['GameObjects']['Cows']) {
        let count = 0;
        return Object.values(cows).map(cow =>
            new Cow(
                { x: cow.coordinates.x, y: cow.coordinates.y },
                cow.direction,
                cow.color,
                render.cowHtmlElements[count++]
            )
        );
    }
}
