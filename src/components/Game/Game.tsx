import { FC, useState } from 'react';
import { GameMenu } from '../GameMenu/GameMenu.gen';
import { LevelLoader } from '../../Game';
import { MAPPED_LEVELS } from '../../levels';
import * as styles from './Game.module.css';
import { GameTableTS } from '../GameTableTS';

const Game: FC = () => {
	const levelArrows = LevelLoader.loadArrows(MAPPED_LEVELS[0].GameObjects.Arrows);
	const [arrowsOnGameTable, setArrows] = useState(
		levelArrows.filter(arrow => arrow.coordinates !== null)
	);
	const [arrowsOnMenuTable, setArrowsOnMenuTable] = useState(
		levelArrows.filter(arrow => arrow.coordinates === null)
	);
	const level1 = MAPPED_LEVELS[0];

	return (
		<main className={styles.container}>
			<GameTableTS level={level1} />
			<GameMenu />
		</main>
	);
};

export default Game;
