// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as GameMenuModuleCss from "./GameMenu.module.css";

var styles = GameMenuModuleCss;

function GameMenu(props) {
  return React.createElement("aside", {
              className: Belt_Option.mapWithDefault(props.className, styles.container, (function (className) {
                      return "" + className + " " + styles.container + "";
                    }))
            }, "Game menu");
}

var make = GameMenu;

export {
  styles ,
  make ,
}
/* styles Not a pure module */
