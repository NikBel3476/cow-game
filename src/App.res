@react.component
let make = () => {
  let url = RescriptReactRouter.useUrl()

  <div>
    <a href="/game" className="game-menu-link"> {React.string(`Начать игру`)} </a>

    {switch url.path {
      | list{} => <div> {React.string("main page")} </div>
      | list{"game"} => <div> {React.string("game page")} </div>
      | _ => <div> {React.string("page not found")} </div>
    }}
  </div>
}