import { DragEvent, DragEventHandler, FC, useState } from 'react';
import { ArrowReact, LevelLoader } from '../../Game';
import { MAPPED_LEVELS } from '../../levels';
import * as styles from './Game.module.css';
import { gameConfig } from '../../Config.gen';
import { CowNode } from '../CowNode';
import { ArrowNode } from '../ArrowNode';
import { Coordinates } from '../../types';

interface ContextState {
	level: number;
}

const initialState: ContextState = {
	level: Number(localStorage.getItem('level') ?? 1)
};

// export const Context = createContext<ContextState>(initialState);

const Game: FC = () => {
	const level = MAPPED_LEVELS[initialState.level - 1];
	const levelArrows = LevelLoader.loadArrows(level.GameObjects.Arrows);

	const [arrowsOnGameTable, setArrowsOnGameTable] = useState(
		levelArrows.filter(arrow => arrow.coordinates !== null)
	);
	const [arrowsOnMenuTable, setArrowsOnMenuTable] = useState(
		levelArrows.filter(arrow => arrow.coordinates === null)
	);
	const [currentArrow, setCurrentArrow] = useState<ArrowReact | null>(null);

	const dragStartHandler = (e: DragEvent, arrow: ArrowReact): void => {
		if (!arrow.isStatic) {
			setCurrentArrow(arrow);
		}
	};

	const dragOverHandler: DragEventHandler = e => {
		e.preventDefault();
		e.stopPropagation();
	};

	const dropArrowHandlerGameTable = (e: DragEvent, coordinates: Coordinates): void => {
		e.preventDefault();
		e.stopPropagation();
		const cellIsFree =
			arrowsOnGameTable.find(
				arrow =>
					arrow.coordinates?.x === coordinates.x && arrow.coordinates?.y === coordinates.y
			) === undefined;
		if (currentArrow && cellIsFree) {
			setArrowsOnMenuTable(arrowsOnMenuTable.filter(arrow => arrow !== currentArrow));
			currentArrow.coordinates = { x: coordinates.x, y: coordinates.y };
			setArrowsOnGameTable([...arrowsOnGameTable, currentArrow]);
			setCurrentArrow(null);
		}
	};

	const dropArrowHandlerGameMenu: DragEventHandler = e => {
		e.preventDefault();
		e.stopPropagation();
		// FIXME: double currentArrow check?
		if (currentArrow?.coordinates !== null && currentArrow) {
			setArrowsOnGameTable(arrowsOnGameTable.filter(arrow => arrow !== currentArrow));
			currentArrow.coordinates = null;
			const newArrowsOnGameTable = [...arrowsOnMenuTable, currentArrow];
			setArrowsOnMenuTable(newArrowsOnGameTable);
			setCurrentArrow(null);
		}
	};

	return (
		<main className={styles.container}>
			<section className={styles.gameTableContainer}>
				<table className={styles.gameTable}>
					<tbody>
						{Array.from(Array(gameConfig.map.height)).map((_, i) => (
							<tr key={i}>
								{Array.from(Array(gameConfig.map.width)).map((_, j) => {
									const cow = level.GameObjects.Cows.find(
										cow => cow.coordinates.x === j && cow.coordinates.y === i
									);
									const arrow = arrowsOnGameTable.find(
										arrow => arrow.coordinates?.x === j && arrow.coordinates.y === i
									);

									return (
										<td
											className={styles.gameTableCell}
											key={j}
											onDragOver={e => dragOverHandler(e)}
											onDrop={e => dropArrowHandlerGameTable(e, { x: j, y: i })}
										>
											{cow !== undefined && (
												<CowNode direction={cow.direction} color={cow.color} />
											)}
											{arrow !== undefined && (
												<ArrowNode
													arrow={arrow}
													draggable={!arrow.isStatic}
													onDragStart={e => dragStartHandler(e, arrow)}
												/>
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</section>
			<aside className={styles.gameMenuContainer}>
				<table
					className={styles.gameMenuTable}
					onDragOver={e => dragOverHandler(e)}
					onDrop={e => dropArrowHandlerGameMenu(e)}
				>
					<tbody>
						{Array.from(Array(gameConfig.arrowsTable.height)).map((_, i) => (
							<tr key={i}>
								{Array.from(Array(gameConfig.arrowsTable.width)).map((_, j) => {
									const arrow = arrowsOnMenuTable.at(
										i * gameConfig.arrowsTable.width + j
									);

									return (
										<td className={styles.gameMenuCell} key={j}>
											{arrow !== undefined && (
												<ArrowNode
													arrow={arrow}
													draggable={!arrow.isStatic}
													onDragStart={e => dragStartHandler(e, arrow)}
													onDragOver={e => dragOverHandler(e)}
												/>
											)}
										</td>
									);
								})}
							</tr>
						))}
					</tbody>
				</table>
			</aside>
		</main>
	);
};

export default Game;
