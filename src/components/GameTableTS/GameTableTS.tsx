import { FC } from 'react';
import * as cn from 'classnames';
import styles from './GameTableTS.module.css';
import * as PropTypes from 'prop-types';
import { gameConfig } from '../../Config.gen';
import { ILevel } from '../../levels';
import { CowNode } from '../CowNode';
import { ArrowReact } from '../../Game';
import { ArrowNode } from '../ArrowNode';

interface GameTableTSProps {
	className?: string;
	cows: ILevel['GameObjects']['Cows'];
	arrows: ArrowReact[];
}

export const GameTableTS: FC<GameTableTSProps> = ({ className, cows, arrows }) => {
	return (
		<section className={cn(className, styles.container)}>
			<table className={styles.gameTable}>
				<tbody>
					{Array.from(Array(gameConfig.map.height)).map((_, i) => (
						<tr key={i}>
							{Array.from(Array(gameConfig.map.width)).map((_, j) => {
								const cow = cows.find(
									cow => cow.coordinates.x === j && cow.coordinates.y === i
								);
								const arrow = arrows.find(
									arrow => arrow.coordinates?.x === j && arrow.coordinates.y === i
								);

								return (
									<td className={styles.cell} key={j}>
										{cow !== undefined && (
											<CowNode direction={cow.direction} color={cow.color} />
										)}
										{arrow !== undefined && <ArrowNode arrow={arrow} />}
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
