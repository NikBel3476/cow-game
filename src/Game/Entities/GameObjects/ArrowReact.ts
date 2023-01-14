import { ArrowColor, Coordinates, Direction, MAPPED_SPRITES } from '../../../types';

export class ArrowReact {
	private readonly impassable = false;
	private readonly img: string;

	constructor(
		readonly direction: Direction,
		readonly color: ArrowColor,
		readonly coordinates: Coordinates | null
	) {
		this.img = this.setImg();
	}

	setImg(): string {
		switch (this.direction) {
			case 'Up':
				return this.color === 'Red'
					? MAPPED_SPRITES.ArrowRedUp
					: MAPPED_SPRITES.ArrowBlueUp;
			case 'Right':
				return this.color === 'Red'
					? MAPPED_SPRITES.ArrowRedRight
					: MAPPED_SPRITES.ArrowBlueRight;
			case 'Down':
				return this.color === 'Red'
					? MAPPED_SPRITES.ArrowRedDown
					: MAPPED_SPRITES.ArrowBlueDown;
			case 'Left':
				return this.color === 'Red'
					? MAPPED_SPRITES.ArrowRedLeft
					: MAPPED_SPRITES.ArrowBlueLeft;
		}
	}
}
