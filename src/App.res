@module external styles: {..} = "./App.module.css"

@genType
@react.component
let make = () => {
	let url = RescriptReactRouter.useUrl()

	<div>
		<a href="pages/game/game.html" className={styles["gameMenuLink"]}>{React.string(`Начать игру`)}</a>
		<a href="pages/levels/levels.html" className={styles["gameMenuLink"]}>{React.string(`Выбрать уровень`)}</a>
		<a href="/game" className="game-menu-link"> {React.string(`Начать игру(react)`)} </a>

		{switch url.path {
			| list{} => <div> {React.string("main page")} </div>
			| list{"game"} => <Game />
			| _ => <div> {React.string("page not found")} </div>
		}}
	</div>
}