import { FC } from 'react';
import * as PropTypes from 'prop-types';
import * as cn from 'classnames';
// import * as styles from './GameNode.module.css';

interface GameNodeProps {
	className?: string;
}

export const GameNode: FC<GameNodeProps> = ({ className }) => {
	return <div className={cn(className)}></div>;
};

GameNode.propTypes = {
	className: PropTypes.string
};
