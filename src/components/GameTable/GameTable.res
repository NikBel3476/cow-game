open Belt

@genType.import("../../levels/ILevel") @genType.as("ILevel")
type level

@module external mappedLevels: {..} = "../../levels/MappedLevels"

@module external styles: {"container": string, "gameTable": string, "cell": string} = "./GameTable.module.css"

@genType @genType.as("GameTable") @react.component
let make = (~className: option<string>=?) => {
	let table: array<array<React.element>> = Array.make(
		Config.gameConfig["map"]["height"],
		Array.makeBy(Config.gameConfig["map"]["width"], i =>
			<td key={Int.toString(i)} className={styles["cell"]} />
		),
	)

	let level1 = Option.getUnsafe(mappedLevels["MAPPED_LEVELS"][0])

	<section
		className={className->Option.mapWithDefault(styles["container"], className =>
			`${className} ${styles["container"]}`
		)}>
		<table className={styles["gameTable"]}>
			<tbody>
				{table
				->Array.mapWithIndex((i, row) =>
					<tr key={Int.toString(i)}>
						{row
						->Array.mapWithIndex((j, cell) => {
							let cow =
								level1["GameObjects"]["Cows"]->Array.getBy(
									cow => cow["coordinates"]["x"] == i && cow["coordinates"]["y"] == j,
								)

							switch cow {
							| Some(_) =>
								<td key={Int.toString(j)} className={styles["cell"]}> {React.string("cow")} </td>
							| None => cell
							}
						})
						->React.array}
					</tr>
				)
				->React.array}
			</tbody>
		</table>
	</section>
}