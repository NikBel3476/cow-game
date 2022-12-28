import { gameConfig } from '../Config.gen';
import screensaver1 from '../../assets/sprites/png/screensaverStartGame.png';
import screensaver2 from '../../assets/sprites/png/cowScreensaver2.png';
import screensaver3 from '../../assets/sprites/png/cowScreensaver3.png';
import { Game } from '../Game';

export class UI {
	private readonly game;
	htmlGameTable: HTMLTableElement;
	htmlArrowsTable: HTMLTableElement;
	gameTable: HTMLTableCellElement[][];
	arrowsTable: HTMLTableCellElement[][];
	_modalWindow: HTMLElement;
	_endLevelModalWindow: HTMLElement;
	_completedLevelsModalWindow: HTMLElement;

	constructor(
		game: Game,
		gameContainerCssSelector: string,
		arrowsTableCssSelector: string
	) {
		this.game = game;
		this.htmlGameTable = this.createGameTable();
		document.querySelector(gameContainerCssSelector)?.appendChild(this.htmlGameTable);
		this.htmlArrowsTable = this.createArrowsTable();
		document.querySelector(arrowsTableCssSelector)?.appendChild(this.htmlArrowsTable);
		this.gameTable = this.htmlTableToArray(this.htmlGameTable);
		this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
		this._modalWindow = document.getElementById('modal-wrapper') as HTMLElement;
		if (document.getElementById('modal-button') !== null) {
			(document.getElementById('modal-button') as HTMLButtonElement).addEventListener(
				'click',
				(e: MouseEvent) => {
					e.preventDefault();
					this.hideModalWindow();
				}
			);
		}
		this._endLevelModalWindow = document.getElementById(
			'end-level-modal-wrapper'
		) as HTMLElement;
		if (document.getElementById('end-level-modal-button') !== null) {
			(
				document.getElementById('end-level-modal-button') as HTMLButtonElement
			).addEventListener('click', (e: MouseEvent) => {
				e.preventDefault();
				this.hideEndLevelModalWindow();
			});
		}
		this._completedLevelsModalWindow = document.getElementById(
			'completed-levels-modal-wrapper'
		) as HTMLElement;
		(
			document.getElementById('completed-levels-modal-button') as HTMLButtonElement
		).addEventListener('click', (e: MouseEvent) => {
			this.hideCompletedLevelsModalWindow();
		});
	}

	htmlTableToArray(htmlTable: HTMLTableElement): HTMLTableCellElement[][] {
		return Array.from(htmlTable.rows).map((row: HTMLTableRowElement) =>
			Array.from(row.cells)
		);
	}

	getArrowTableElement(htmlElement: HTMLElement): boolean {
		return this.arrowsTable.some(row =>
			row.some(arrowElement => htmlElement === (arrowElement.firstChild as HTMLElement))
		);
		/* for (let i = 0; i < this.arrowsTable.length; i++) {
            for (let j = 0; j < this.arrowsTable[i].length; j++) {
                if (htmlElement === this.arrowsTable[i][j]) return this.arrowsTable[i][j].firstChild as HTMLDivElement;
            }
        } */
	}

	createGameTable(): HTMLTableElement {
		const table = document.createElement('table');
		table.id = 'game-table';
		const tBody = document.createElement('tbody');
		for (let i = 0; i < gameConfig.map.height; i++) {
			const tr = document.createElement('tr');
			for (let j = 0; j < gameConfig.map.width; j++) {
				const td = document.createElement('td');
				const div = document.createElement('div');
				div.className = `game-field x-${j + 1} y-${i + 1}`;
				td.appendChild(div);
				tr.appendChild(td);
			}
			tBody.appendChild(tr);
		}
		table.appendChild(tBody);
		return table;
	}

	createArrowsTable(): HTMLTableElement {
		const table = document.createElement('table');
		table.id = 'ui-table';
		const tBody = document.createElement('tbody');
		for (let i = 0; i < gameConfig.arrowsTable.height; i++) {
			const tr = document.createElement('tr');
			for (let j = 0; j < gameConfig.arrowsTable.width; j++) {
				const td = document.createElement('td');
				td.style.width = `${
					this.htmlGameTable.querySelector('td')?.clientWidth ?? '0'
				}px`;
				td.style.height = `${
					this.htmlGameTable.querySelector('td')?.clientHeight ?? '0'
				}px`;
				const div = document.createElement('div');
				div.className = `arrow-field x-${j + 1} y-${i + 1}`;
				div.style.zIndex = '10';
				div.style.top = '0';
				div.style.left = '0';
				td.appendChild(div);
				tr.appendChild(td);
			}
			tBody.appendChild(tr);
		}
		table.appendChild(tBody);
		return table;
	}

	getMapElementIndex(htmlElement: HTMLElement): [number, number] | undefined {
		for (let i = 0; i < gameConfig.map.height; i++) {
			for (let j = 0; j < gameConfig.map.width; j++) {
				if (this.gameTable[i][j].firstChild === htmlElement) {
					return [i, j];
				}
			}
		}
	}

	showModalWindow(): void {
		const modalLabel = document.getElementById('modal-text');
		if (modalLabel !== null) {
			modalLabel.innerText = `Уровень ${window.localStorage.getItem('level') ?? 1}`;
			const randomNum = Math.floor(Math.random() * 3); // 3 is pictures amount
			let img;
			switch (randomNum) {
				case 0:
					img = screensaver1;
					break;
				case 1:
					img = screensaver2;
					break;
				default:
					img = screensaver3;
					break;
			}
			(document.getElementById('modal-img') as HTMLImageElement).src = img;
			this._modalWindow.style.visibility = 'visible';
		}
	}

	hideModalWindow(): void {
		this._modalWindow.style.visibility = 'hidden';
	}

	showEndLevelModalWindow(): void {
		const modalLabel = document.getElementById('end-level-modal-text');
		if (modalLabel !== null) {
			modalLabel.innerText = `Поздравляем! Уровень ${
				window.localStorage.getItem('level') ?? 1
			} пройден`;
			const randomNum = Math.floor(Math.random() * 3); // 3 is pictures amount
			let img;
			switch (randomNum) {
				case 0:
					img = screensaver1;
					break;
				case 1:
					img = screensaver2;
					break;
				default:
					img = screensaver3;
					break;
			}
			(document.getElementById('end-level-modal-img') as HTMLImageElement).src = img;
			this._endLevelModalWindow.style.visibility = 'visible';
		}
	}

	hideEndLevelModalWindow(): void {
		this._endLevelModalWindow.style.visibility = 'hidden';
	}

	showCompletedLevelsModalWindow(): void {
		const levelsListWrapper = document.getElementById(
			'completed-levels-list-wrapper'
		) as HTMLElement;
		levelsListWrapper.innerHTML = '';
		const completedLevels = Number(localStorage.getItem('completedLevels'));
		const levelNodes: Node[] = [];
		for (let i = 0; i <= completedLevels; i++) {
			const divNode = document.createElement('div');
			divNode.className = 'choose-level-link';
			divNode.textContent = `Уровень ${i + 1}`;

			divNode.addEventListener('click', (e: MouseEvent) => {
				localStorage.setItem('level', String(i + 1));
				this.game.loadLevelByLevelNum(i + 1);
				this.hideCompletedLevelsModalWindow();
			});

			levelNodes.push(divNode);
		}

		levelsListWrapper.append(...levelNodes);
		this._completedLevelsModalWindow.style.visibility = 'visible';
	}

	hideCompletedLevelsModalWindow(): void {
		this._completedLevelsModalWindow.style.visibility = 'hidden';
	}
}
