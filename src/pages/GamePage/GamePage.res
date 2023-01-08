@module external styles: {..} = "./GamePage.module.css"

@genType
@react.component
let make = () => {
	<main className={styles["container"]}>
		<GameTable />
		<GameMenu />
	</main>
}