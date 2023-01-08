// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as GameMenu from "../../components/GameMenu/GameMenu.bs.js";
import * as GameTable from "../../components/GameTable/GameTable.bs.js";
import * as GamePageModuleCss from "./GamePage.module.css";

var styles = GamePageModuleCss;

function GamePage(props) {
  return React.createElement("main", {
              className: styles.container
            }, React.createElement(GameTable.make, {}), React.createElement(GameMenu.make, {}));
}

var make = GamePage;

export {
  styles ,
  make ,
}
/* styles Not a pure module */
