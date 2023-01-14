@module external styles: {..} = "./App.module.css"

@genType
@react.component
let make = () => {
	let url = RescriptReactRouter.useUrl()

	<>
		{switch url.path {
			| list{"cow-game"} => <MainPage />
			| list{"cow-game", "game"} => <GamePage />
			| _ => <div> {React.string("page not found")} </div>
		}}
	</>
}