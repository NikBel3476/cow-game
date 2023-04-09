import { ILevel } from '../levels';
import { Arrow, HayBale, Cow, IField, Piston, IGameObject, Game } from '../Game';
import { Coordinates } from '../types';
import { gameConfig } from '../Config.gen';

export class Render {
	htmlGameTable: HTMLElement;
	htmlArrowsTable: HTMLElement;
	gameTable: HTMLElement[][];
	arrowsTable: HTMLElement[][];
	cowHtmlElements: HTMLElement[] = [];
	movableFields: HTMLElement[] = [];

	constructor(game: Game) {
		this.htmlGameTable = game.ui.htmlGameTable;
		this.htmlArrowsTable = game.ui.htmlArrowsTable;
		this.gameTable = game.ui.gameTable;
		this.arrowsTable = game.ui.arrowsTable;
	}

	createCowHtmlElements(cows: ILevel['GameObjects']['Cows']): void {
		let count = 0;
		const htmlElements: HTMLElement[] = [];
		cows.forEach(cow => {
			const divCow = document.createElement('div');
			divCow.className = `cow-wrapper cow-${count++} cow-${cow.color.toLowerCase()}-${cow.direction.toLowerCase()}`;
			divCow.style.width = `${
				this.htmlGameTable.querySelector('td')?.clientWidth ?? '0'
			}px`;
			divCow.style.height = `${
				this.htmlGameTable.querySelector('td')?.clientHeight ?? '0'
			}px`;
			divCow.style.zIndex = '30';
			divCow.style.transition = `all ${gameConfig.loopTime / 1000}s linear`;
			htmlElements.push(divCow);
			document.getElementById('game-table-wrapper')?.appendChild(divCow);
		});
		this.cowHtmlElements = htmlElements;
	}

	createMovableHtmlElements(
		hayBales: ILevel['MapObjects']['Interactive']['HayBale']
	): void {
		if (hayBales) {
			const htmlElements: HTMLElement[] = [];
			hayBales.forEach((coordinates: Coordinates) => {
				const divField = document.createElement('div');
				divField.className = 'mobile-field';
				divField.style.width = `${
					this.htmlGameTable.querySelector('td')?.clientWidth ?? 0
				}px`;
				divField.style.height = `${
					this.htmlGameTable.querySelector('td')?.clientHeight ?? 0
				}px`;
				divField.style.zIndex = '20';
				divField.style.transition = `all ${gameConfig.loopTime / 1000}s linear`;
				htmlElements.push(divField);
				document.getElementById('game-table-wrapper')?.appendChild(divField);
			});
			this.movableFields = htmlElements;
		}
	}

	drawStaticElements(fields: Array<IField | Arrow>): void {
		fields.forEach(object => {
			if (object instanceof Piston && !object.activated) {
				switch (object.direction) {
					case 'Up':
						object.linkedHtmlElement.style.top = `${
							(
								this.htmlGameTable.querySelector('td') as HTMLElement
							).getBoundingClientRect().height
						}px`;
						break;
					case 'Right':
						object.linkedHtmlElement.style.left = `-${
							(
								this.htmlGameTable.querySelector('td') as HTMLElement
							).getBoundingClientRect().width
						}px`;
						break;
					case 'Down':
						object.linkedHtmlElement.style.top = `-${
							(
								this.htmlGameTable.querySelector('td') as HTMLElement
							).getBoundingClientRect().height
						}px`;
						break;
					case 'Left':
						object.linkedHtmlElement.style.left = `${
							(
								this.htmlGameTable.querySelector('td') as HTMLElement
							).getBoundingClientRect().width
						}px`;
						break;
				}
			} else {
				object.linkedHtmlElement.style.top = '0px';
				object.linkedHtmlElement.style.left = '0px';
			}
			object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
		});
	}

	drawNonStaticElements(objects: Array<Cow | HayBale>): void {
		objects.forEach(object => {
			if (object instanceof HayBale) {
				const tdElement = this.htmlGameTable.querySelector('td') as HTMLElement;
				object.linkedHtmlElement.style.transform = `translate(
					${tdElement.getBoundingClientRect().width * (object.coordinates.x - 1)}px,
					${tdElement.getBoundingClientRect().height * (object.coordinates.y - 1)}px)`;
				object.linkedHtmlElement.style.top = '0px';
				object.linkedHtmlElement.style.left = '0px';
				object.linkedHtmlElement.style.width = `${tdElement?.clientWidth}px`;
				object.linkedHtmlElement.style.height = `${tdElement?.clientHeight}px`;
				object.linkedHtmlElement.style.background = `url('${object.img}') center center / contain no-repeat`;
			}
			if (object instanceof Cow) {
				const tdElement = this.htmlGameTable.querySelector('td') as HTMLElement;
				const cssTranslateY =
					object.layer === 2
						? tdElement.getBoundingClientRect().height * (object.coordinates.y - 1) - 30
						: tdElement.getBoundingClientRect().height * (object.coordinates.y - 1);
				const cssTranslateX =
					tdElement.getBoundingClientRect().width * (object.coordinates.x - 1);
				object.linkedHtmlElement.style.top = '0px';
				object.linkedHtmlElement.style.left = '0px';
				object.linkedHtmlElement.style.transform = `translate(${cssTranslateX}px, ${cssTranslateY}px)`;
				object.linkedHtmlElement.style.width = `${tdElement?.clientWidth}px`;
				object.linkedHtmlElement.style.height = `${tdElement?.clientHeight}px`;
				// TODO: replace hardcoded classname value
				object.linkedHtmlElement.className = object.linkedHtmlElement.className.replace(
					/cow-(gray|brown)-(up|right|down|left)/g,
					`cow-${object.color.toLowerCase()}-${object.direction.toLowerCase()}`
				);
			}
		});
	}

	drawElements(elems: Array<IField | IGameObject>): void {
		elems.forEach(elem => {
			elem.linkedHtmlElement.style.transform =
				elem instanceof Piston && !elem.activated
					? `translateY(-${
							this.htmlGameTable.querySelector('td')?.getBoundingClientRect().height ?? 0
							// eslint-disable-next-line no-mixed-spaces-and-tabs
					  }px)`
					: '';
			elem.linkedHtmlElement.style.background = `url('${elem.img}') center center / contain no-repeat`;
		});
	}

	clearScene(): void {
		this.gameTable.forEach(row =>
			row.forEach(
				(field: HTMLElement) => ((field.firstChild as HTMLElement).style.background = '')
			)
		);
		this.arrowsTable.forEach(row =>
			row.forEach(cell => ((cell.firstChild as HTMLElement).style.background = ''))
		);
	}

	clearArrowsTable(): void {
		this.arrowsTable.forEach(row =>
			row.forEach(field => ((field.firstChild as HTMLElement).style.background = ''))
		);
	}

	deleteScene(): void {
		this.clearScene();
		this.clearArrowsTable();
		this.cowHtmlElements.forEach(element => element.remove());
		this.movableFields.forEach(field => field.remove());
		this.cowHtmlElements = [];
		this.movableFields = [];
	}

	scaleArrowsTable(): void {
		this.arrowsTable.forEach(row => {
			row.forEach(td => {
				td.style.width = `${this.htmlGameTable.querySelector('td')?.clientWidth ?? 0}px`;
				td.style.height = `${
					this.htmlGameTable.querySelector('td')?.clientHeight ?? 0
				}px`;
			});
		});
	}

	drawScene(
		staticElements: Array<IField | Arrow>,
		movableElements: Array<Cow | HayBale>
	): void {
		this.drawStaticElements(staticElements);
		this.drawNonStaticElements(movableElements);
	}
}
