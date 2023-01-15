import { FC } from 'react';
import * as cn from 'classnames';
import * as PropTypes from 'prop-types';
import * as styles from './ArrowNode.module.css';
import { ArrowReact } from '../../Game';
import { ArrowColor, Direction } from '../../types';

interface ArrowNodeProps {
	className?: string;
	arrow: ArrowReact;
}

export const ArrowNode: FC<ArrowNodeProps> = ({ className, arrow }) => {
	return (
		<div
			className={cn(
				className,
				styles.container,
				...getArrowStyle(arrow.direction, arrow.color)
			)}
		></div>
	);
};

ArrowNode.propTypes = {
	className: PropTypes.string
};

const getArrowStyle = (direction: Direction, color: ArrowColor): [string, string] => {
	const arrowStyles: [string, string] = ['', ''];
	switch (direction) {
		case 'Up': {
			arrowStyles[0] = styles.arrowUp;
			break;
		}
		case 'Right': {
			arrowStyles[0] = styles.arrowRight;
			break;
		}
		case 'Down': {
			arrowStyles[0] = styles.arrowDown;
			break;
		}
		case 'Left': {
			arrowStyles[0] = styles.arrowLeft;
			break;
		}
	}

	switch (color) {
		case 'Red': {
			arrowStyles[1] = styles.arrowRed;
			break;
		}
		case 'Blue': {
			arrowStyles[1] = styles.arrowBlue;
			break;
		}
	}

	return arrowStyles;
};
