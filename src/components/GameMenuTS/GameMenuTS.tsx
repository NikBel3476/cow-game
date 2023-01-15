import * as cn from 'classnames';
import * as PropTypes from 'prop-types';
import { FC } from 'react';
import { gameConfig } from '../../Config.gen';
import { ArrowReact } from '../../Game';
import { ArrowNode } from '../ArrowNode';
import * as styles from './GameMenuTS.module.css';

interface GameMenuTSProps {
	className?: string;
	arrows: ArrowReact[];
}

export const GameMenuTS: FC<GameMenuTSProps> = ({ className, arrows }) => {
	return (
		<aside className={cn(className, styles.container)}>
			<table className={styles.gameMenuTable}>
				<tbody>
					{Array.from(Array(gameConfig.arrowsTable.height)).map((_, i) => (
						<tr key={i}>
							{Array.from(Array(gameConfig.arrowsTable.width)).map((_, j) => {
								const arrow = arrows.at(i * gameConfig.arrowsTable.width + j);

								return (
									<td className={styles.cell} key={j}>
										{arrow !== undefined && <ArrowNode arrow={arrow} />}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>
		</aside>
	);
};

GameMenuTS.propTypes = {
	className: PropTypes.string
};
