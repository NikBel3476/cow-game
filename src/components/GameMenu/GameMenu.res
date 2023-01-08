open Belt

@module external styles: {..} = "./GameMenu.module.css"

@genType
@react.component
let make = (~className: option<string>=?) => {
	<aside
		className={
			className->Option.mapWithDefault(
				styles["container"],
				className => `${className} ${styles["container"]}`
			)
		}
	>
		{React.string("Game menu")}
	</aside>
}