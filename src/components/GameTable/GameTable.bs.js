// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Config from "../../Config.bs.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Belt_Option from "rescript/lib/es6/belt_Option.js";
import * as GameTableModuleCss from "./GameTable.module.css";

var styles = GameTableModuleCss;

function GameTable(props) {
  var table = Belt_Array.make(Config.gameConfig.map.height, Belt_Array.make(Config.gameConfig.map.width, React.createElement("td", {
                className: styles.cell
              })));
  return React.createElement("section", {
              className: Belt_Option.mapWithDefault(props.className, styles.container, (function (className) {
                      return "" + className + " " + styles.container + "";
                    }))
            }, React.createElement("table", {
                  className: styles.gameTable
                }, React.createElement("tbody", undefined, Belt_Array.mapWithIndex(table, (function (i, row) {
                            return React.createElement("tr", {
                                        key: String(i)
                                      }, row);
                          })))));
}

var make = GameTable;

export {
  styles ,
  make ,
}
/* styles Not a pure module */