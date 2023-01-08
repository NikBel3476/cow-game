open Belt

@module external styles: {
	"container": string,
	"gameTable": string,
	"cell": string
} = "./GameTable.module.css"

@genType
@react.component
let make = (~className: option<string>=?) => {
	let table: array<array<React.element>> = Array.make(
		Config.gameConfig["map"]["height"],
		Array.make(Config.gameConfig["map"]["width"], <td className={styles["cell"]}></td>)
	)

  <section
    className={
			className->Option.mapWithDefault(
				styles["container"],
				className => `${className} ${styles["container"]}`
			)
		}
	>
    <table className={styles["gameTable"]}>
		<tbody>
			{table->Belt.Array.mapWithIndex((i, row) =>
				<tr key={Belt.Int.toString(i)}>{row->React.array}</tr>)->React.array}
		</tbody>
		</table>
  </section>
}