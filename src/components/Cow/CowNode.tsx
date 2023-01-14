import { FC } from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';
import * as styles from './CowNode.module.css';
import { CowColor, Direction } from '../../types';

interface CowProps {
	className?: string;
	direction: Direction;
	color: CowColor;
}

export const CowNode: FC<CowProps> = ({ className, direction, color }) => {
	return (
		<div
			className={cn(className, styles.container, ...getCowStyle(direction, color))}
		></div>
	);
};

const getCowStyle = (direction: Direction, color: CowColor): [string, string] => {
	const cowStyles: [string, string] = ['', ''];
	switch (direction) {
		case 'Up': {
			cowStyles[0] = styles.cowUp;
			break;
		}
		case 'Right': {
			cowStyles[0] = styles.cowRight;
			break;
		}
		case 'Down': {
			cowStyles[0] = styles.cowDown;
			break;
		}
		case 'Left': {
			cowStyles[0] = styles.cowLeft;
			break;
		}
	}

	switch (color) {
		case 'Brown': {
			cowStyles[1] = styles.cowBrown;
			break;
		}
		case 'Grey': {
			cowStyles[1] = styles.cowGrey;
			break;
		}
	}

	return cowStyles;
};

CowNode.propTypes = {
	className: PropTypes.string
};
