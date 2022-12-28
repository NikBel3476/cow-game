@module external styles: {..} = "./App.module.css"

@genType
@react.component
let make = () => {
	let url = RescriptReactRouter.useUrl()

	<div>
		{switch url.path {
			| list{} => <MainPage />
			| list{"game"} => <Game />
			| _ => <div> {React.string("page not found")} </div>
		}}
	</div>
}