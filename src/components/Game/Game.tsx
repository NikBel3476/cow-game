import { FC, useState } from 'react';
import { LevelLoader } from '../../Game';
import { MAPPED_LEVELS } from '../../levels';
import * as styles from './Game.module.css';
import { GameTableTS } from '../GameTableTS';
import { GameMenuTS } from '../GameMenuTS';

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

	const [arrowsOnGameTable, setArrows] = useState(
		levelArrows.filter(arrow => arrow.coordinates !== null)
	);
	const [arrowsOnMenuTable, setArrowsOnMenuTable] = useState(
		levelArrows.filter(arrow => arrow.coordinates === null)
	);

	return (
		<main className={styles.container}>
			<GameTableTS cows={level.GameObjects.Cows} arrows={arrowsOnGameTable} />
			<GameMenuTS arrows={arrowsOnMenuTable} />
		</main>
	);
};

export default Game;
