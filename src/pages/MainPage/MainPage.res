@module external styles: {
	"menuContainer": string,
	"gameMenuLink": string,
	"linkList": string,
} = "./MainPage.module.css"

@genType
@react.component
let make = (~children=?) => {
	<div className={styles["menuContainer"]}>
		<div className={styles["linkList"]}>
			<a href="pages/game/game.html" className={styles["gameMenuLink"]}>{React.string(`Начать игру`)}</a>
			<a href="pages/levels/levels.html" className={styles["gameMenuLink"]}>{React.string(`Выбрать уровень`)}</a>
			<a href="/cow-game/game" className={styles["gameMenuLink"]}> {React.string(`Начать игру(react)`)} </a>
			{switch (children) {
			| Some(children) => children
			| None => React.null
			}}
		</div>
	</div>
};