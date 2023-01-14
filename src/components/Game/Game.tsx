import { FC } from 'react';
import { GameTable } from '../GameTable/GameTable.gen';
import { GameMenu } from '../GameMenu/GameMenu.gen';

import styles from './Game.module.css';

const Game: FC = () => {
	return (
		<main className={styles.container}>
			<GameTable />
			<GameMenu />
		</main>
	);
};

export default Game;
