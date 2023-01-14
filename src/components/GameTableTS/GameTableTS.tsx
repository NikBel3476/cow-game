import { FC } from 'react';
import * as cn from 'classnames';
import * as styles from './GameTableTS.module.css';
import * as PropTypes from 'prop-types';
import { gameConfig } from '../../Config.gen';
import { ILevel } from '../../levels';
import { CowNode } from '../Cow';

interface GameTableTSProps {
	className?: string;
	level: ILevel;
}

export const GameTableTS: FC<GameTableTSProps> = ({ className, level }) => {
	return (
		<section className={cn(className, styles.container)}>
			<table className={styles.gameTable}>
				<tbody>
					{Array.from(Array(gameConfig.map.height)).map((_, i) => (
						<tr key={i}>
							{Array.from(Array(gameConfig.map.width)).map((_, j) => {
								const cow = level.GameObjects.Cows.find(
									cow => cow.coordinates.x === j && cow.coordinates.y === i
								);
								return (
									<td className={styles.cell} key={j}>
										{cow !== undefined && (
											<CowNode direction={cow.direction} color={cow.color} />
										)}
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
