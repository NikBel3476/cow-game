// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Game from "./pages/Game.bs.js";
import * as React from "react";
import * as MainPage from "./pages/MainPage/MainPage.bs.js";
import * as AppModuleCss from "./App.module.css";
import * as RescriptReactRouter from "@rescript/react/src/RescriptReactRouter.bs.js";

var styles = AppModuleCss;

function App(props) {
  var url = RescriptReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match && match.hd === "cow-game") {
    var match$1 = match.tl;
    if (match$1) {
      if (match$1.hd === "game" && !match$1.tl) {
        tmp = React.createElement(Game.make, {});
      } else {
        exit = 1;
      }
    } else {
      tmp = React.createElement(MainPage.make, {});
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement("div", undefined, "page not found");
  }
  return React.createElement("div", undefined, tmp);
}

var make = App;

export {
  styles ,
  make ,
}
/* styles Not a pure module */
