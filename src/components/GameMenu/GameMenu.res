open Belt

@module
external styles: {"container": string, "menuTable": string, "cell": string} =
	"./GameMenu.module.css"

@genType @genType.as("GameMenu") @react.component
let make = (~className: option<string>=?) => {
	let table: array<array<React.element>> = Array.make(
		Config.gameConfig["arrowsTable"]["height"],
		Array.makeBy(Config.gameConfig["arrowsTable"]["width"], i =>
			<td key={Int.toString(i)} className={styles["cell"]} />
		),
	)

	<aside
		className={className->Option.mapWithDefault(styles["container"], className =>
			`${className} ${styles["container"]}`
		)}>
		<table className={styles["menuTable"]}>
			<tbody>
				{table
				->Array.mapWithIndex((i, row) => {
					<tr key={Int.toString(i)}> {row->React.array} </tr>
				})
				->React.array}
			</tbody>
		</table>
	</aside>
}