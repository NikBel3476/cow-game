import { FC } from 'react';
import * as cn from 'classnames';
import * as styles from './GameTableTS.module.css';
import * as PropTypes from 'prop-types';
import { gameConfig } from '../../Config.gen';
import { MAPPED_LEVELS } from '../../levels';

interface GameTableTSProps {
	className?: string;
}
export const GameTableTS: FC<GameTableTSProps> = ({ className }) => {
	const level1 = MAPPED_LEVELS[0];
	const table = Array(gameConfig.map.height).map((_, i) => (
		<tr key={i}>
			{Array(gameConfig.map.width).map((_, j) => {
				const cow = level1.GameObjects.Cows.find(
					cow => cow.coordinates.x === j && cow.coordinates.y === i
				);
				return (
					<td className={styles.cell} key={j}>
						{cow !== undefined && <div>{'cow'}</div>}
					</td>
				);
			})}
		</tr>
	));

	return (
		<section className={cn(className, styles.container)}>
			<table className={styles.gameTable}>
				<tbody>
					{Array.from(Array(gameConfig.map.height)).map((_, i) => (
						<tr key={i}>
							{Array.from(Array(gameConfig.map.width)).map((_, j) => {
								const cow = level1.GameObjects.Cows.find(
									cow => cow.coordinates.x === j && cow.coordinates.y === i
								);
								return (
									<td className={styles.cell} key={j}>
										{cow !== undefined && <div>{'cow'}</div>}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

GameTableTS.propTypes = {
	className: PropTypes.string
};
