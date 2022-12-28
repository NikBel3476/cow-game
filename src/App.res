@genType
@react.component
let make = () => {
	let url = RescriptReactRouter.useUrl()

	<div>
		<a href="/game" className="game-menu-link"> {React.string(`Начать игру`)} </a>

		{switch url.path {
			| list{} => <div> {React.string("main page")} </div>
			| list{"game"} => <Game />
			| _ => <div> {React.string("page not found")} </div>
		}}
	</div>
}