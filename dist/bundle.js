/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Conf.ts":
/*!*********************!*\
  !*** ./src/Conf.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var CONF = {
    Map: {
        width: 20,
        height: 14
    },
    ArrowsTable: {
        width: 3,
        height: 7
    },
    ImgPath: {
        CowBrownUp: "assets/sprites/svg/CowBrownUp.svg",
        CowBrownRight: "assets/sprites/svg/CowBrownRight.svg",
        CowBrownDown: "assets/sprites/svg/CowBrownDown.svg",
        CowBrownLeft: "assets/sprites/svg/CowBrownLeft.svg",
        CowGreyUp: "assets/sprites/svg/CowGreyUp.svg",
        CowGreyRight: "assets/sprites/svg/CowGreyRight.svg",
        CowGreyDown: "assets/sprites/svg/CowGreyDown.svg",
        CowGreyLeft: "assets/sprites/svg/CowGreyLeft.svg",
        FenceH: "assets/sprites/svg/FenceH.svg",
        FenceV: "assets/sprites/svg/FenceV.svg",
        Pillar: "assets/sprites/svg/Pillar.svg",
        ArrowRedUp: "assets/sprites/svg/ArrowRedUp.svg",
        ArrowRedRight: "assets/sprites/svg/ArrowRedRight.svg",
        ArrowRedDown: "assets/sprites/svg/ArrowRedDown.svg",
        ArrowRedLeft: "assets/sprites/svg/ArrowRedLeft.svg",
        ArrowBlueUp: "assets/sprites/svg/ArrowBlueUp.svg",
        ArrowBlueRight: "assets/sprites/svg/ArrowBlueRight.svg",
        ArrowBlueDown: "assets/sprites/svg/ArrowBlueDown.svg",
        ArrowBlueLeft: "assets/sprites/svg/ArrowBlueLeft.svg",
        Goblet: "assets/sprites/svg/Goblet.svg",
        SlideUp: "assets/sprites/svg/SlideUp.png",
        SlideRight: "assets/sprites/svg/SlideRight.png",
        SlideDown: "assets/sprites/svg/SlideDown.png",
        SlideLeft: "assets/sprites/svg/SlideLeft.png",
        Block: "assets/sprites/svg/Block.png",
        HayBale: "assets/sprites/svg/HayBale.png",
        Key: "assets/sprites/svg/Key.png",
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONF);


/***/ }),

/***/ "./src/Game/Entities/Arrow.ts":
/*!************************************!*\
  !*** ./src/Game/Entities/Arrow.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* binding */ Arrow)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Conf */ "./src/Conf.ts");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./src/Game/Entities/Field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Arrow = (function (_super) {
    __extends(Arrow, _super);
    function Arrow(name, coordinates, direction, color, linkedHtmlElement) {
        var _this = _super.call(this, name, coordinates, false, false, linkedHtmlElement) || this;
        _this.direction = direction;
        _this.color = color;
        _this.linkedHtmlElement = linkedHtmlElement;
        _this.imgUrl = _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ImgPath[_this.name];
        return _this;
    }
    return Arrow;
}(_Field__WEBPACK_IMPORTED_MODULE_1__.Field));



/***/ }),

/***/ "./src/Game/Entities/Cow.ts":
/*!**********************************!*\
  !*** ./src/Game/Entities/Cow.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cow": () => (/* binding */ Cow)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Conf */ "./src/Conf.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/Game/Entities/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Cow = (function (_super) {
    __extends(Cow, _super);
    function Cow(name, coordinates, direction, color, linkedHtmlElement) {
        var _this = _super.call(this, name, linkedHtmlElement) || this;
        _this.coordinates = coordinates;
        _this._direction = direction;
        _this.color = color;
        _this.imgUrl = _this.generateImgUrl();
        _this.layer = 1;
        return _this;
    }
    Object.defineProperty(Cow.prototype, "direction", {
        get: function () {
            return this._direction;
        },
        set: function (direction) {
            this._direction = direction;
            this.imgUrl = this.generateImgUrl();
        },
        enumerable: false,
        configurable: true
    });
    Cow.prototype.generateImgUrl = function () {
        return _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ImgPath["CowGrey" + this._direction];
    };
    Cow.prototype.move = function (direction) {
        if (direction === void 0) { direction = this._direction; }
        switch (direction) {
            case "Up":
                this.coordinates.y = Math.round((this.coordinates.y - 0.1) * 100) / 100;
                if (this._direction !== "Up") {
                    this.direction = "Up";
                }
                break;
            case "Right":
                this.coordinates.x = Math.round((this.coordinates.x + 0.1) * 100) / 100;
                if (this._direction !== "Right") {
                    this.direction = "Right";
                }
                break;
            case "Down":
                this.coordinates.y = Math.round((this.coordinates.y + 0.1) * 100) / 100;
                if (this._direction !== "Down") {
                    this.direction = "Down";
                }
                break;
            case "Left":
                this.coordinates.x = Math.round((this.coordinates.x - 0.1) * 100) / 100;
                if (this._direction !== "Left") {
                    this.direction = "Left";
                }
                break;
            default:
                throw new Error("Wrong cow direction");
        }
    };
    return Cow;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/Game/Entities/Entity.ts":
/*!*************************************!*\
  !*** ./src/Game/Entities/Entity.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Entity": () => (/* binding */ Entity)
/* harmony export */ });
var Entity = (function () {
    function Entity(name, linkedHtmlElement) {
        this.name = name;
        this.linkedHtmlElement = linkedHtmlElement;
    }
    return Entity;
}());



/***/ }),

/***/ "./src/Game/Entities/Field.ts":
/*!************************************!*\
  !*** ./src/Game/Entities/Field.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Field": () => (/* binding */ Field)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Conf */ "./src/Conf.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/Game/Entities/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Field = (function (_super) {
    __extends(Field, _super);
    function Field(name, coordinates, impassable, movable, linkedHtmlElement) {
        if (impassable === void 0) { impassable = true; }
        if (movable === void 0) { movable = false; }
        var _this = _super.call(this, name, linkedHtmlElement) || this;
        _this.coordinates = coordinates;
        _this.impassable = impassable;
        _this.movable = movable;
        _this.imgUrl = _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ImgPath[_this.name];
        return _this;
    }
    return Field;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/Game/Entities/Goblet.ts":
/*!*************************************!*\
  !*** ./src/Game/Entities/Goblet.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Goblet": () => (/* binding */ Goblet)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Conf */ "./src/Conf.ts");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field */ "./src/Game/Entities/Field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var Goblet = (function (_super) {
    __extends(Goblet, _super);
    function Goblet(coordinates, linkedHtmlElement) {
        var _this = _super.call(this, "Goblet", coordinates, false, false, linkedHtmlElement) || this;
        _this.imgUrl = _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ImgPath.Goblet;
        return _this;
    }
    return Goblet;
}(_Field__WEBPACK_IMPORTED_MODULE_1__.Field));



/***/ }),

/***/ "./src/Game/Entities/HayBale.ts":
/*!**************************************!*\
  !*** ./src/Game/Entities/HayBale.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HayBale": () => (/* binding */ HayBale)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Conf */ "./src/Conf.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entity */ "./src/Game/Entities/Entity.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var HayBale = (function (_super) {
    __extends(HayBale, _super);
    function HayBale(name, coordinates, linkedHtmlElement) {
        var _this = _super.call(this, name, linkedHtmlElement) || this;
        _this.coordinates = coordinates;
        _this.imgUrl = _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ImgPath.HayBale;
        return _this;
    }
    return HayBale;
}(_Entity__WEBPACK_IMPORTED_MODULE_1__.Entity));



/***/ }),

/***/ "./src/Game/Entities/index.ts":
/*!************************************!*\
  !*** ./src/Game/Entities/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Arrow": () => (/* reexport safe */ _Arrow__WEBPACK_IMPORTED_MODULE_0__.Arrow),
/* harmony export */   "Cow": () => (/* reexport safe */ _Cow__WEBPACK_IMPORTED_MODULE_1__.Cow),
/* harmony export */   "Entity": () => (/* reexport safe */ _Entity__WEBPACK_IMPORTED_MODULE_2__.Entity),
/* harmony export */   "Field": () => (/* reexport safe */ _Field__WEBPACK_IMPORTED_MODULE_3__.Field),
/* harmony export */   "Goblet": () => (/* reexport safe */ _Goblet__WEBPACK_IMPORTED_MODULE_4__.Goblet),
/* harmony export */   "HayBale": () => (/* reexport safe */ _HayBale__WEBPACK_IMPORTED_MODULE_5__.HayBale)
/* harmony export */ });
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Arrow */ "./src/Game/Entities/Arrow.ts");
/* harmony import */ var _Cow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cow */ "./src/Game/Entities/Cow.ts");
/* harmony import */ var _Entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Entity */ "./src/Game/Entities/Entity.ts");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "./src/Game/Entities/Field.ts");
/* harmony import */ var _Goblet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Goblet */ "./src/Game/Entities/Goblet.ts");
/* harmony import */ var _HayBale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HayBale */ "./src/Game/Entities/HayBale.ts");








/***/ }),

/***/ "./src/Game/Game.ts":
/*!**************************!*\
  !*** ./src/Game/Game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Entities */ "./src/Game/Entities/index.ts");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

var Game = (function () {
    function Game(render, ui) {
        this.staticFields = [];
        this.mobileFields = [];
        this.mapArrows = [];
        this.render = render;
        this.ui = ui;
    }
    Game.prototype.loadLevel = function (level) {
        var _a = level.mapObjects, staticFields = _a.staticFields, mobileFields = _a.mobileFields, mapArrows = _a.mapArrows, activeFields = _a.activeFields, goblet = _a.goblet, cows = level.cows, arrows = level.arrows;
        this.render.createCowHtmlElements(cows);
        this.render.createMobileFieldsHtmlElements(mobileFields);
        this.staticFields = this.initStaticFields(staticFields);
        this.mobileFields = this.initMobileFields(mobileFields);
        this.mapArrows = this.initMapArrows(mapArrows);
        this.goblet = this.initGoblet(goblet);
        this.mapFields = this.getMapFields();
        this.cows = this.initCows(cows);
        this.arrows = this.initArrows(arrows);
    };
    Game.prototype.initStaticFields = function (staticFields) {
        var _this = this;
        if (staticFields) {
            var staticFieldsArray_1 = [];
            Object.keys(staticFields).forEach(function (fieldName) {
                var _a;
                return (_a = staticFields[fieldName]) === null || _a === void 0 ? void 0 : _a.forEach(function (fieldCoordinates) {
                    return staticFieldsArray_1.push(new _Entities__WEBPACK_IMPORTED_MODULE_0__.Field(fieldName, { x: fieldCoordinates[0], y: fieldCoordinates[1] }, true, false, _this.ui.gameTable[fieldCoordinates[1] - 1][fieldCoordinates[0] - 1].firstChild));
                });
            });
            return staticFieldsArray_1;
        }
        return [];
    };
    Game.prototype.initMobileFields = function (mobileFields) {
        var _this = this;
        if (mobileFields) {
            var count_1 = 0;
            return Object.keys(mobileFields).reduce(function (mobileFieldsArr, objName) {
                var _a, _b;
                return mobileFieldsArr.concat((_b = (_a = mobileFields[objName]) === null || _a === void 0 ? void 0 : _a.map(function (coordinates) {
                    return new _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale(objName, { x: coordinates[0], y: coordinates[1] }, _this.render.mobileFields[count_1++]);
                })) !== null && _b !== void 0 ? _b : []);
            }, []);
        }
        return [];
    };
    Game.prototype.initMapArrows = function (mapArrows) {
        var _this = this;
        if (mapArrows) {
            var mapArrowsArray_1 = [];
            Object.keys(mapArrows).forEach(function (arrowColor) {
                var _a;
                return (_a = mapArrows[arrowColor]) === null || _a === void 0 ? void 0 : _a.forEach(function (arrow) {
                    return mapArrowsArray_1.push(new _Entities__WEBPACK_IMPORTED_MODULE_0__.Arrow("Arrow" + (arrowColor + arrow.direction), arrow.coordinates, arrow.direction, arrowColor, _this.ui.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild));
                });
            });
            return mapArrowsArray_1;
        }
        return [];
    };
    Game.prototype.initCows = function (cows) {
        var _this = this;
        var count = 0;
        return Object.values(cows).map(function (cow) {
            return new _Entities__WEBPACK_IMPORTED_MODULE_0__.Cow("Cow" + (cow.color + cow.direction), cow.coordinates, cow.direction, cow.color, _this.render.cowHtmlElements[count++]);
        });
    };
    Game.prototype.initArrows = function (arrows) {
        var _this = this;
        var count = 0;
        var arrowsArray = [];
        Object.keys(arrows).forEach(function (arrowColor) {
            return Object.keys(arrows[arrowColor]).forEach(function (arrowDirection) {
                for (var i = 0; i < arrows[arrowColor][arrowDirection]; i++) {
                    arrowsArray.push(new _Entities__WEBPACK_IMPORTED_MODULE_0__.Arrow("Arrow" + (arrowColor + arrowDirection), { x: 0, y: 0 }, arrowDirection, arrowColor, _this.ui.arrowsTable.flat(1)[count++].firstChild));
                }
            });
        });
        return arrowsArray;
    };
    Game.prototype.initGoblet = function (goblet) {
        return new _Entities__WEBPACK_IMPORTED_MODULE_0__.Goblet(goblet.coordinates, this.ui.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild);
    };
    Game.prototype.getAllMapObjects = function () {
        return __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], this.staticFields, true), this.mobileFields, true), this.mapArrows, true), [
            this.goblet
        ], false), this.cows, true);
    };
    Game.prototype.getMapFields = function () {
        var mapFields = __spreadArray(__spreadArray([], this.staticFields, true), [this.goblet], false);
        if (this.mobileFields) {
            mapFields.concat.apply(mapFields, this.mobileFields);
        }
        if (this.mapArrows) {
            mapFields.concat.apply(mapFields, this.mapArrows);
        }
        return mapFields;
    };
    Game.prototype.getGameObjects = function () {
        return __spreadArray(__spreadArray([], this.cows, true), this.mapArrows, true);
    };
    Game.prototype.getArrows = function () {
        return this.arrows;
    };
    Game.prototype.findFieldByCoordinates = function (coordinates) {
        return __spreadArray(__spreadArray([], this.staticFields, true), this.mobileFields, true).find(function (field) {
            return field.coordinates.x === coordinates.x && field.coordinates.y === coordinates.y;
        });
    };
    Game.prototype.findFieldByHtmlElement = function (htmlElement) {
        return this.mapFields.find(function (field) {
            return htmlElement === (field === null || field === void 0 ? void 0 : field.linkedHtmlElement);
        });
    };
    Game.prototype.findGameObjectByHtmlElement = function (htmlElement) {
        return this.getGameObjects().find(function (obj) {
            return htmlElement === (obj === null || obj === void 0 ? void 0 : obj.linkedHtmlElement);
        });
    };
    Game.prototype.findArrowByHtmlElement = function (htmlElement) {
        return this.arrows.find(function (arrow) { return arrow.linkedHtmlElement === htmlElement; });
    };
    Game.prototype.drawArrows = function () {
        this.render.drawArrows(this.arrows);
    };
    Game.prototype.renderScene = function () {
        this.clearScene();
        this.render.drawScene(this.staticFields, { mobileFields: this.mobileFields, cows: this.cows }, this.mapArrows, this.goblet);
    };
    Game.prototype.clearScene = function () {
        this.render.clearScene();
    };
    Game.prototype.checkArrows = function (cow) {
        var _this = this;
        if (this.mapArrows) {
            Object.values(this.mapArrows).forEach(function (arrow) {
                if (cow.coordinates.x === arrow.coordinates.x && cow.coordinates.y === arrow.coordinates.y) {
                    cow.direction = arrow.direction;
                    _this.mapArrows.splice(_this.mapArrows.indexOf(arrow), 1);
                }
            });
        }
    };
    Game.prototype.checkGoblet = function (cow) {
        return cow.color === "Grey" &&
            this.goblet.coordinates.x === cow.coordinates.x &&
            this.goblet.coordinates.y === cow.coordinates.y;
    };
    Game.prototype.startGame = function () {
        var _this = this;
        if (!this.loop) {
            this.loop = setInterval(function () {
                var nextField;
                var isVictory = false;
                Object.values(_this.cows).forEach(function (cow) {
                    if (Number.isInteger(cow.coordinates.x) && Number.isInteger(cow.coordinates.y)) {
                        _this.checkArrows(cow);
                        isVictory = _this.checkGoblet(cow);
                        if (!isVictory) {
                            var currentField = _this.findFieldByCoordinates({
                                x: cow.coordinates.x,
                                y: cow.coordinates.y
                            });
                            if ((currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideUp" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideRight" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideDown" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideLeft") {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextField = _this.findFieldByCoordinates({
                                        x: cow.coordinates.x,
                                        y: cow.coordinates.y - 1
                                    });
                                    if (nextField) {
                                        if (nextField.name === "SlideUp")
                                            cow.move();
                                        if (nextField instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                                case "Right":
                                    nextField = _this.findFieldByCoordinates({
                                        x: cow.coordinates.x + 1,
                                        y: cow.coordinates.y
                                    });
                                    if (cow.layer === 1) {
                                        if (nextField) {
                                            if (nextField.name === "SlideRight")
                                                cow.move();
                                            if (nextField instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                                nextField.coordinates.x = Math.round((nextField.coordinates.x + 0.1) * 100) / 100;
                                                cow.move();
                                            }
                                        }
                                        else {
                                            cow.move();
                                        }
                                    }
                                    else {
                                        if (nextField) {
                                            cow.move();
                                        }
                                    }
                                    break;
                                case "Down":
                                    nextField = _this.findFieldByCoordinates({
                                        x: cow.coordinates.x,
                                        y: cow.coordinates.y + 1
                                    });
                                    if (nextField) {
                                        if (nextField.name === "SlideDown")
                                            cow.move();
                                        if (nextField instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                            nextField.coordinates.y = Math.round((nextField.coordinates.y + 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                                case "Left":
                                    nextField = _this.findFieldByCoordinates({
                                        x: cow.coordinates.x - 1,
                                        y: cow.coordinates.y
                                    });
                                    if (nextField) {
                                        if (nextField.name === "SlideLeft")
                                            cow.move();
                                        if (nextField instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                            nextField.coordinates.x = Math.round((nextField.coordinates.x - 0.1) * 100) / 100;
                                            cow.move();
                                        }
                                    }
                                    else {
                                        cow.move();
                                    }
                                    break;
                            }
                        }
                        else {
                            _this.endGame();
                            alert("YOU WIN!!!");
                        }
                    }
                    else {
                        var nextField_1;
                        switch (cow.direction) {
                            case "Up":
                                nextField_1 = _this.findFieldByCoordinates({
                                    x: cow.coordinates.x,
                                    y: cow.coordinates.y - 1
                                });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.y = Math.round((nextField_1.coordinates.y - 0.1) * 100) / 100;
                                }
                                break;
                            case "Right":
                                nextField_1 = _this.findFieldByCoordinates({
                                    x: cow.coordinates.x + 1,
                                    y: cow.coordinates.y
                                });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.x = Math.round((nextField_1.coordinates.x + 0.1) * 100) / 100;
                                }
                                break;
                            case "Down":
                                nextField_1 = _this.findFieldByCoordinates({
                                    x: cow.coordinates.x,
                                    y: cow.coordinates.y + 1
                                });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.x = Math.round((nextField_1.coordinates.y + 0.1) * 100) / 100;
                                }
                                break;
                            case "Left":
                                nextField_1 = _this.findFieldByCoordinates({
                                    x: cow.coordinates.x - 1,
                                    y: cow.coordinates.y
                                });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.x = Math.round((nextField_1.coordinates.x - 0.1) * 100) / 100;
                                }
                                break;
                        }
                        cow.move();
                    }
                });
                _this.renderScene();
            }, 40);
        }
    };
    Game.prototype.endGame = function () {
        clearInterval(this.loop);
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/Game/index.ts":
/*!***************************!*\
  !*** ./src/Game/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Game__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ "./src/Game/Game.ts");



/***/ }),

/***/ "./src/Render/Render.ts":
/*!******************************!*\
  !*** ./src/Render/Render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Render = (function () {
    function Render(ui) {
        this.mobileFields = [];
        this.htmlGameTable = ui.htmlGameTable;
        this.htmlArrowsTable = ui.htmlArrowsTable;
        this.gameTable = ui.gameTable;
        this.arrowsTable = ui.arrowsTable;
    }
    Render.prototype.createCowHtmlElements = function (cows) {
        var _this = this;
        var count = 0;
        var htmlElements = [];
        Object.values(cows).forEach(function (cow) {
            var _a, _b, _c;
            var divCow = document.createElement("div");
            divCow.className = "cow-wrapper cow-" + count++;
            divCow.style.top = _this.htmlGameTable.querySelector("td").getBoundingClientRect()
                .height * (cow.coordinates.y - 1) + "px";
            divCow.style.left = _this.htmlGameTable.querySelector("td").getBoundingClientRect()
                .width * (cow.coordinates.x - 1) + "px";
            divCow.style.width = ((_a = _this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
            divCow.style.height = ((_b = _this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
            divCow.style.zIndex = '30';
            htmlElements.push(divCow);
            (_c = document.getElementById("game-table-wrapper")) === null || _c === void 0 ? void 0 : _c.appendChild(divCow);
        });
        this.cowHtmlElements = htmlElements;
    };
    Render.prototype.createMobileFieldsHtmlElements = function (fields) {
        var _this = this;
        if (fields) {
            var htmlElements_1 = [];
            (Object.values(fields)).forEach(function (coordinatesArr) {
                coordinatesArr.forEach(function (coordinates) {
                    var _a, _b, _c;
                    var divField = document.createElement("div");
                    divField.className = "mobile-field";
                    divField.style.top = _this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (coordinates[0] - 1) + "px";
                    divField.style.left = _this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (coordinates[1] - 1) + "px";
                    divField.style.width = ((_a = _this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
                    divField.style.height = ((_b = _this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
                    divField.style.zIndex = '20';
                    htmlElements_1.push(divField);
                    (_c = document.getElementById("game-table-wrapper")) === null || _c === void 0 ? void 0 : _c.appendChild(divField);
                });
            });
            this.mobileFields = htmlElements_1;
        }
    };
    Render.prototype.drawStaticObjects = function (fields, mapArrows, goblet) {
        var _this = this;
        Object.values(fields).forEach(function (field) {
            var elem = _this.gameTable[field.coordinates.y - 1][field.coordinates.x - 1].firstChild;
            elem.style.background = "url(\"../../" + field.imgUrl + "\") center/contain no-repeat";
        });
        Object.values(mapArrows).forEach(function (arrow) {
            var elem = _this.gameTable[arrow.coordinates.y - 1][arrow.coordinates.x - 1].firstChild;
            elem.style.background = "url(\"../../" + arrow.imgUrl + "\") center/contain no-repeat";
            elem.style.zIndex = '10';
        });
        var gobletElem = this.gameTable[goblet.coordinates.y - 1][goblet.coordinates.x - 1].firstChild;
        gobletElem.style.background = "url(\"../../" + goblet.imgUrl + "\") center/contain no-repeat";
    };
    Render.prototype.drawGameObjects = function (gameObjects) {
        var _this = this;
        if (gameObjects.mobileFields) {
            gameObjects.mobileFields.forEach(function (field) {
                var _a, _b;
                field.linkedHtmlElement.style.top = _this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (field.coordinates.y - 1) + "px";
                field.linkedHtmlElement.style.left = _this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (field.coordinates.x - 1) + "px";
                field.linkedHtmlElement.style.width = ((_a = _this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
                field.linkedHtmlElement.style.height = ((_b = _this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
                field.linkedHtmlElement.style.background = "url(\"../../" + field.imgUrl + "\") center/contain no-repeat";
            });
        }
        Object.values(gameObjects.cows).forEach(function (cow) {
            var _a, _b;
            var cssTop = cow.layer === 2 ?
                _this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1) - 30 :
                _this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1);
            var cssLeft = _this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1);
            cow.linkedHtmlElement.style.top = cssTop + "px";
            cow.linkedHtmlElement.style.left = cssLeft + "px";
            cow.linkedHtmlElement.style.width = ((_a = _this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
            cow.linkedHtmlElement.style.height = ((_b = _this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
            cow.linkedHtmlElement.style.background = "url(\"../../" + cow.imgUrl + "\") no-repeat center";
        });
    };
    Render.prototype.drawArrows = function (arrows) {
        this.clearArrowsTable();
        arrows.forEach(function (arrow) {
            arrow.linkedHtmlElement.style.background = "url(\"../../" + arrow.imgUrl + "\") no-repeat center";
        });
    };
    Render.prototype.clearScene = function () {
        this.gameTable.forEach(function (row) {
            row.forEach(function (field) {
                field.firstChild.style.background = "";
            });
        });
    };
    Render.prototype.clearArrowsTable = function () {
        this.arrowsTable.forEach(function (row) {
            row.forEach(function (field) {
                return field.firstChild.style.background = "";
            });
        });
    };
    Render.prototype.scaleArrowsTable = function () {
        var _this = this;
        this.arrowsTable.forEach(function (row) {
            row.forEach(function (td) {
                var _a, _b;
                td.style.width = ((_a = _this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
                td.style.height = ((_b = _this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
            });
        });
    };
    Render.prototype.drawScene = function (staticFields, gameObjects, mapArrows, goblet) {
        this.drawStaticObjects(staticFields, mapArrows, goblet);
        this.drawGameObjects(gameObjects);
        this.scaleArrowsTable();
    };
    return Render;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);


/***/ }),

/***/ "./src/Render/index.ts":
/*!*****************************!*\
  !*** ./src/Render/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Render__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render */ "./src/Render/Render.ts");



/***/ }),

/***/ "./src/UI.ts":
/*!*******************!*\
  !*** ./src/UI.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Conf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Conf */ "./src/Conf.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./src/index.ts");


var UI = (function () {
    function UI(gameContainerCssSelector, arrowsTableCssSelector) {
        var _this = this;
        var _a, _b;
        this.selectedItem = null;
        this.htmlGameTable = this.createGameTable();
        (_a = document.querySelector(gameContainerCssSelector)) === null || _a === void 0 ? void 0 : _a.appendChild(this.htmlGameTable);
        this.htmlArrowsTable = this.createArrowsTable();
        (_b = document.querySelector(arrowsTableCssSelector)) === null || _b === void 0 ? void 0 : _b.appendChild(this.htmlArrowsTable);
        this.gameTable = this.htmlTableToArray(this.htmlGameTable);
        this.arrowsTable = this.htmlTableToArray(this.htmlArrowsTable);
        document.getElementById("start-game-button").addEventListener('click', function (e) {
            console.log('start');
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.startGame)();
        });
        document.getElementById("end-game-button").addEventListener('click', function (e) {
            (0,_index__WEBPACK_IMPORTED_MODULE_1__.endGame)();
        });
        document.addEventListener("mousedown", function (e) {
            _this.mouseX = e.clientX;
            _this.mouseY = e.clientY;
        });
        document.addEventListener("mousemove", function (e) {
            if (_this.selectedItem) {
                _this.selectedItem.style.top = -_this.mouseY + e.clientY + "px";
                _this.selectedItem.style.left = -_this.mouseX + e.clientX + "px";
            }
        });
        document.addEventListener("mouseup", function (e) {
            if (_this.selectedItem) {
                if (e.target.className.includes("game-field")) {
                    if (!_index__WEBPACK_IMPORTED_MODULE_1__.game.findFieldByHtmlElement(e.target) &&
                        !_index__WEBPACK_IMPORTED_MODULE_1__.game.findGameObjectByHtmlElement(e.target)) {
                        var coordinates = e.target.className.split(" ")
                            .filter(function (str) { return str.match(/^(x|y)-\d+$/g); }).map(function (str) { return Number(str.slice(2)); });
                        var arrow = _index__WEBPACK_IMPORTED_MODULE_1__.game.findArrowByHtmlElement(_this.selectedItem);
                        var selectedArrow = void 0;
                        if (arrow) {
                            selectedArrow = _index__WEBPACK_IMPORTED_MODULE_1__.game.arrows.splice(_index__WEBPACK_IMPORTED_MODULE_1__.game.arrows.indexOf(arrow), 1)[0];
                            _index__WEBPACK_IMPORTED_MODULE_1__.game.mapArrows.push(selectedArrow);
                        }
                        else {
                            selectedArrow = _index__WEBPACK_IMPORTED_MODULE_1__.game.mapArrows.find(function (arrow) { return _this.selectedItem === arrow.linkedHtmlElement; });
                        }
                        if (selectedArrow) {
                            selectedArrow.coordinates.x = coordinates[0];
                            selectedArrow.coordinates.y = coordinates[1];
                            selectedArrow.linkedHtmlElement = e.target;
                            selectedArrow.linkedHtmlElement.addEventListener("mousedown", function (e) {
                                _this.selectedItem = e.target;
                                _this.selectedItem.style.pointerEvents = "none";
                            });
                        }
                    }
                }
                else if (e.target.className.includes("arrow-field")) {
                    var arrow = _index__WEBPACK_IMPORTED_MODULE_1__.game.mapArrows.find(function (arrow) { return _this.selectedItem === arrow.linkedHtmlElement; });
                    if (arrow) {
                        var selectedArrow = _index__WEBPACK_IMPORTED_MODULE_1__.game.mapArrows.splice(_index__WEBPACK_IMPORTED_MODULE_1__.game.mapArrows.indexOf(arrow), 1)[0];
                        selectedArrow.coordinates.x = 0;
                        selectedArrow.coordinates.y = 0;
                        selectedArrow.linkedHtmlElement = e.target;
                        _index__WEBPACK_IMPORTED_MODULE_1__.game.arrows.push(selectedArrow);
                    }
                }
                _this.selectedItem.style.pointerEvents = "";
                _this.selectedItem.style.top = "0";
                _this.selectedItem.style.left = "0";
                _this.selectedItem = null;
                _index__WEBPACK_IMPORTED_MODULE_1__.game.drawArrows();
                _index__WEBPACK_IMPORTED_MODULE_1__.game.renderScene();
            }
        });
    }
    UI.prototype.htmlTableToArray = function (htmlTable) {
        return Array.from(htmlTable.rows).map(function (row) { return Array.from(row.cells); });
    };
    UI.prototype.createGameTable = function () {
        var table = document.createElement("table");
        table.id = "game-table";
        var tBody = document.createElement("tbody");
        for (var i = 0; i < _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].Map.height; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].Map.width; j++) {
                var td = document.createElement("td");
                var div = document.createElement("div");
                div.className = "game-field x-" + (j + 1) + " y-" + (i + 1);
                td.appendChild(div);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    };
    UI.prototype.createArrowsTable = function () {
        var _this = this;
        var _a, _b;
        var table = document.createElement("table");
        table.id = "ui-table";
        var tBody = document.createElement("tbody");
        for (var i = 0; i < _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowsTable.height; i++) {
            var tr = document.createElement("tr");
            for (var j = 0; j < _Conf__WEBPACK_IMPORTED_MODULE_0__["default"].ArrowsTable.width; j++) {
                var td = document.createElement("td");
                td.style.width = ((_a = this.htmlGameTable.querySelector("td")) === null || _a === void 0 ? void 0 : _a.clientWidth) + "px";
                td.style.height = ((_b = this.htmlGameTable.querySelector("td")) === null || _b === void 0 ? void 0 : _b.clientHeight) + "px";
                var div = document.createElement("div");
                div.className = "arrow-field x-" + (j + 1) + " y-" + (i + 1);
                div.style.zIndex = '10';
                div.style.top = "0";
                div.style.left = "0";
                div.addEventListener("mousedown", function (e) {
                    _this.selectedItem = e.target;
                    _this.selectedItem.style.pointerEvents = "none";
                });
                td.appendChild(div);
                tr.appendChild(td);
            }
            tBody.appendChild(tr);
        }
        table.appendChild(tBody);
        return table;
    };
    return UI;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "endGame": () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.ts");
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render */ "./src/Render/index.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/Game/index.ts");
/* harmony import */ var _levels__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels */ "./src/levels/index.ts");




var ui = new _UI__WEBPACK_IMPORTED_MODULE_0__["default"]("#game-table-wrapper", "#ui-table-wrapper");
var render = new _Render__WEBPACK_IMPORTED_MODULE_1__["default"](ui);
var game = new _Game__WEBPACK_IMPORTED_MODULE_2__["default"](render, ui);
document.ondragstart = function () {
    return false;
};
function startGame() {
    game.startGame();
}
function endGame() {
    game.endGame();
}
window.onload = function () {
    game.loadLevel(_levels__WEBPACK_IMPORTED_MODULE_3__.lvl2);
    game.renderScene();
    game.drawArrows();
};
window.onresize = function () {
    game.renderScene();
};


/***/ }),

/***/ "./src/levels/index.ts":
/*!*****************************!*\
  !*** ./src/levels/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lvl1": () => (/* reexport safe */ _lvl1__WEBPACK_IMPORTED_MODULE_0__.lvl1),
/* harmony export */   "lvl2": () => (/* reexport safe */ _lvl2__WEBPACK_IMPORTED_MODULE_1__.lvl2),
/* harmony export */   "lvl4": () => (/* reexport safe */ _lvl4__WEBPACK_IMPORTED_MODULE_2__.lvl4)
/* harmony export */ });
/* harmony import */ var _lvl1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lvl1 */ "./src/levels/lvl1.ts");
/* harmony import */ var _lvl2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lvl2 */ "./src/levels/lvl2.ts");
/* harmony import */ var _lvl4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lvl4 */ "./src/levels/lvl4.ts");





/***/ }),

/***/ "./src/levels/lvl1.ts":
/*!****************************!*\
  !*** ./src/levels/lvl1.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lvl1": () => (/* binding */ lvl1)
/* harmony export */ });
var lvl1 = {
    mapObjects: {
        staticFields: {
            "Pillar": [
                [1, 1],
                [20, 1],
                [1, 14],
                [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
                [11, 1], [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
                [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14],
                [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14],
            ],
            "FenceV": [
                [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13],
                [20, 2], [20, 3], [20, 4], [20, 5], [20, 6], [20, 7], [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 13],
                [11, 6], [11, 7], [11, 8], [11, 9], [11, 10]
            ]
        },
        goblet: {
            coordinates: { x: 16, y: 3 }
        }
    },
    cows: [
        {
            coordinates: { x: 5, y: 8 },
            direction: "Right",
            color: "Grey"
        }
    ],
    arrows: {
        "Red": {
            "Up": 1,
            "Right": 1
        }
    }
};


/***/ }),

/***/ "./src/levels/lvl2.ts":
/*!****************************!*\
  !*** ./src/levels/lvl2.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lvl2": () => (/* binding */ lvl2),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lvl2 = {
    mapObjects: {
        staticFields: {
            "Pillar": [
                [1, 1], [12, 1], [20, 1],
                [12, 6], [15, 6], [17, 6], [20, 6],
                [1, 14], [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1], [11, 1],
                [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
                [13, 6], [14, 6], [18, 6], [19, 6],
                [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14], [10, 14],
                [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14],
            ],
            "FenceV": [
                [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7],
                [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13],
                [12, 2], [12, 3], [12, 4], [12, 5],
                [20, 2], [20, 3], [20, 4], [20, 5], [20, 7],
                [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 13]
            ]
        },
        activeFields: {
            "Key": [
                [10, 8]
            ]
        },
        goblet: {
            coordinates: { x: 16, y: 3 }
        }
    },
    cows: [
        {
            coordinates: { x: 5, y: 3 },
            direction: "Right",
            color: "Grey"
        }
    ],
    arrows: {
        "Red": {
            "Up": 1,
            "Right": 1,
            "Down": 1
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lvl2);


/***/ }),

/***/ "./src/levels/lvl4.ts":
/*!****************************!*\
  !*** ./src/levels/lvl4.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lvl4": () => (/* binding */ lvl4),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lvl4 = {
    mapObjects: {
        staticFields: {
            "Pillar": [
                [1, 1], [11, 1], [20, 1],
                [1, 14], [10, 14], [20, 14]
            ],
            "FenceH": [
                [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1], [10, 1],
                [12, 1], [13, 1], [14, 1], [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
                [2, 14], [3, 14], [4, 14], [5, 14], [6, 14], [7, 14], [8, 14], [9, 14],
                [11, 14], [12, 14], [13, 14], [14, 14], [15, 14], [16, 14], [17, 14], [18, 14], [19, 14],
            ],
            "FenceV": [
                [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [1, 9], [1, 10], [1, 11], [1, 12], [1, 13],
                [20, 2], [20, 3], [20, 4], [20, 5], [20, 6], [20, 7], [20, 8], [20, 9], [20, 10], [20, 11], [20, 12], [20, 13],
                [11, 2], [11, 3], [11, 4], [11, 5], [11, 6],
                [10, 9], [10, 10], [10, 11], [10, 12], [10, 13]
            ],
            "SlideRight": [
                [9, 8]
            ],
            "SlideLeft": [
                [13, 8]
            ],
            "Block": [
                [11, 7], [10, 8], [12, 8]
            ]
        },
        mobileFields: {
            "HayBale": [
                [11, 10]
            ]
        },
        mapArrows: {
            "Red": [
                {
                    coordinates: { x: 11, y: 9 },
                    direction: "Right"
                }
            ]
        },
        goblet: {
            coordinates: { x: 16, y: 3 }
        }
    },
    cows: [
        {
            coordinates: { x: 5, y: 8 },
            direction: "Right",
            color: "Grey"
        },
        {
            coordinates: { x: 13, y: 11 },
            direction: "Left",
            color: "Grey"
        }
    ],
    arrows: {
        "Red": {
            "Up": 2
        }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lvl4);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VixRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNOLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ1AsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQ1g7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM5RyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0M7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMvQjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0Y7WUFDSSxXQUFXLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDekIsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSjtJQUNELE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjtLQUNKO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDSyxJQUFNLElBQUksR0FBcUI7SUFDbEMsVUFBVSxFQUFFO1FBQ1IsWUFBWSxFQUFFO1lBQ1YsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDcEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzdELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDM0Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDM0Q7U0FDSjtRQUNELFlBQVksRUFBRTtZQUNWLEtBQUssRUFBRTtnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDVjtTQUNKO1FBQ0QsTUFBTSxFQUFFO1lBQ0osV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQy9CO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRjtZQUNJLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzQixTQUFTLEVBQUUsT0FBTztZQUNsQixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1NBQ1o7S0FDSjtDQUNKO0FBRUQsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERiLElBQU0sSUFBSSxHQUFxQjtJQUNsQyxVQUFVLEVBQUU7UUFDUixZQUFZLEVBQUU7WUFDVixRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDOUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM5RyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNsRDtZQUNELFlBQVksRUFBRTtnQkFDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDVDtZQUNELFdBQVcsRUFBRTtnQkFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDNUI7U0FDSjtRQUNELFlBQVksRUFBRTtZQUNWLFNBQVMsRUFBRTtnQkFDUCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDWDtTQUNKO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFO2dCQUNIO29CQUNJLFdBQVcsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztvQkFDMUIsU0FBUyxFQUFFLE9BQU87aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQztTQUM3QjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0Y7WUFDSSxXQUFXLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDekIsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRDtZQUNJLFdBQVcsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBQztZQUMzQixTQUFTLEVBQUUsTUFBTTtZQUNqQixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0NBQ0osQ0FBQztBQUVGLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ25FcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9Db25mLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL0dhbWUvRW50aXRpZXMvQXJyb3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9Db3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9GaWVsZC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0dvYmxldC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0hheUJhbGUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9SZW5kZXIvUmVuZGVyLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL1JlbmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9sZXZlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDEudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDIudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDQudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09ORiA9IHtcclxuICAgIE1hcDoge1xyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBoZWlnaHQ6IDE0XHJcbiAgICB9LFxyXG4gICAgQXJyb3dzVGFibGU6IHtcclxuICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICBoZWlnaHQ6IDdcclxuICAgIH0sXHJcbiAgICBJbWdQYXRoOiB7XHJcbiAgICAgICAgQ293QnJvd25VcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25VcC5zdmdcIixcclxuICAgICAgICBDb3dCcm93blJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dCcm93blJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIENvd0Jyb3duRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25Eb3duLnN2Z1wiLFxyXG4gICAgICAgIENvd0Jyb3duTGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25MZWZ0LnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlVcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleVVwLnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleVJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlEb3duOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dHcmV5RG93bi5zdmdcIixcclxuICAgICAgICBDb3dHcmV5TGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleUxlZnQuc3ZnXCIsXHJcbiAgICAgICAgRmVuY2VIOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9GZW5jZUguc3ZnXCIsXHJcbiAgICAgICAgRmVuY2VWOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9GZW5jZVYuc3ZnXCIsXHJcbiAgICAgICAgUGlsbGFyOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9QaWxsYXIuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dSZWRVcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWRVcC5zdmdcIixcclxuICAgICAgICBBcnJvd1JlZFJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd1JlZFJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIEFycm93UmVkRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWREb3duLnN2Z1wiLFxyXG4gICAgICAgIEFycm93UmVkTGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWRMZWZ0LnN2Z1wiLFxyXG4gICAgICAgIEFycm93Qmx1ZVVwOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVVcC5zdmdcIixcclxuICAgICAgICBBcnJvd0JsdWVSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dCbHVlUmlnaHQuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dCbHVlRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dCbHVlRG93bi5zdmdcIixcclxuICAgICAgICBBcnJvd0JsdWVMZWZ0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVMZWZ0LnN2Z1wiLFxyXG4gICAgICAgIEdvYmxldDogXCJhc3NldHMvc3ByaXRlcy9zdmcvR29ibGV0LnN2Z1wiLFxyXG4gICAgICAgIFNsaWRlVXA6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlVXAucG5nXCIsXHJcbiAgICAgICAgU2xpZGVSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvU2xpZGVSaWdodC5wbmdcIixcclxuICAgICAgICBTbGlkZURvd246IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlRG93bi5wbmdcIixcclxuICAgICAgICBTbGlkZUxlZnQ6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlTGVmdC5wbmdcIixcclxuICAgICAgICBCbG9jazogXCJhc3NldHMvc3ByaXRlcy9zdmcvQmxvY2sucG5nXCIsXHJcbiAgICAgICAgSGF5QmFsZTogXCJhc3NldHMvc3ByaXRlcy9zdmcvSGF5QmFsZS5wbmdcIixcclxuICAgICAgICBLZXk6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0tleS5wbmdcIixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORjtcclxuIiwiaW1wb3J0IENPTkYgZnJvbSAnLi4vLi4vQ29uZic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4vRmllbGRcIjtcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBBcnJvd0NvbG9yLCBFbnRpdHlOYW1lLCBDb29yZGluYXRlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycm93IGV4dGVuZHMgRmllbGQge1xyXG4gICAgZGlyZWN0aW9uOiBEaXJlY3Rpb247XHJcbiAgICBjb2xvcjogQXJyb3dDb2xvcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBuYW1lOiBFbnRpdHlOYW1lLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyxcclxuICAgICAgICBkaXJlY3Rpb246IERpcmVjdGlvbixcclxuICAgICAgICBjb2xvcjogQXJyb3dDb2xvcixcclxuICAgICAgICBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGNvb3JkaW5hdGVzLCBmYWxzZSwgZmFsc2UsIGxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5rZWRIdG1sRWxlbWVudCA9IGxpbmtlZEh0bWxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gQ09ORi5JbWdQYXRoW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENPTkYgZnJvbSAnLi4vLi4vQ29uZic7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcywgRGlyZWN0aW9uLCBDb3dDb2xvciwgRW50aXR5TmFtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvdyBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBwdWJsaWMgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xyXG4gICAgcHJpdmF0ZSBfZGlyZWN0aW9uOiBEaXJlY3Rpb247XHJcbiAgICBwdWJsaWMgY29sb3I6IENvd0NvbG9yO1xyXG4gICAgcHVibGljIGxheWVyOiAxIHwgMjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBuYW1lOiBFbnRpdHlOYW1lLFxyXG4gICAgICAgIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyxcclxuICAgICAgICBkaXJlY3Rpb246IERpcmVjdGlvbixcclxuICAgICAgICBjb2xvcjogQ293Q29sb3IsXHJcbiAgICAgICAgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBsaW5rZWRIdG1sRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSB0aGlzLmdlbmVyYXRlSW1nVXJsKCk7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkaXJlY3Rpb24oKTogRGlyZWN0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgZGlyZWN0aW9uKGRpcmVjdGlvbjogRGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gdGhpcy5nZW5lcmF0ZUltZ1VybCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdlbmVyYXRlSW1nVXJsKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIENPTkYuSW1nUGF0aFtgQ293R3JleSR7dGhpcy5fZGlyZWN0aW9ufWBdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSB0aGlzLl9kaXJlY3Rpb24pIHtcclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiVXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKHRoaXMuY29vcmRpbmF0ZXMueSAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPT0gXCJVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlVwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKCh0aGlzLmNvb3JkaW5hdGVzLnggKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IFwiUmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnkgPSBNYXRoLnJvdW5kKCh0aGlzLmNvb3JkaW5hdGVzLnkgKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IFwiRG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkRvd25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgodGhpcy5jb29yZGluYXRlcy54IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIldyb25nIGNvdyBkaXJlY3Rpb25cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEVudGl0eU5hbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFbnRpdHkge1xyXG4gICAgbmFtZTogRW50aXR5TmFtZTtcclxuICAgIGltZ1VybCE6IHN0cmluZztcclxuICAgIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBFbnRpdHlOYW1lLCBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubGlua2VkSHRtbEVsZW1lbnQgPSBsaW5rZWRIdG1sRWxlbWVudDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBFbnRpdHlOYW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGQgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xyXG4gICAgaW1wYXNzYWJsZTogYm9vbGVhbjsgLy8gdHJ1ZSAtINC90LXQv9GA0L7RhdC+0LTQuNC80YvQuVxyXG4gICAgaW1nVXJsOiBzdHJpbmc7XHJcbiAgICBtb3ZhYmxlOiBib29sZWFuOyAvLyB0cnVlIC0g0LzQvtC20L3QviDQtNCy0LjQs9Cw0YLRjFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IEVudGl0eU5hbWUsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzLFxyXG4gICAgICAgIGltcGFzc2FibGUgPSB0cnVlLFxyXG4gICAgICAgIG1vdmFibGUgPSBmYWxzZSxcclxuICAgICAgICBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XHJcbiAgICAgICAgdGhpcy5pbXBhc3NhYmxlID0gaW1wYXNzYWJsZTtcclxuICAgICAgICB0aGlzLm1vdmFibGUgPSBtb3ZhYmxlO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gQ09ORi5JbWdQYXRoW3RoaXMubmFtZV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENPTkYgZnJvbSAnLi4vLi4vQ29uZic7XHJcbmltcG9ydCB7IEZpZWxkIH0gZnJvbSBcIi4vRmllbGRcIjtcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb2JsZXQgZXh0ZW5kcyBGaWVsZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb29yZGluYXRlczogQ29vcmRpbmF0ZXMsIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKFwiR29ibGV0XCIsIGNvb3JkaW5hdGVzLCBmYWxzZSwgZmFsc2UsIGxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IENPTkYuSW1nUGF0aC5Hb2JsZXQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IENPTkYgZnJvbSAnLi4vLi4vQ29uZic7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcywgRW50aXR5TmFtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhheUJhbGUgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IEVudGl0eU5hbWUsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgICB0aGlzLmltZ1VybCA9IENPTkYuSW1nUGF0aC5IYXlCYWxlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvdydcclxuZXhwb3J0IHsgQ293IH0gZnJvbSAnLi9Db3cnXHJcbmV4cG9ydCB7IEVudGl0eSB9IGZyb20gJy4vRW50aXR5J1xyXG5leHBvcnQgeyBGaWVsZCB9IGZyb20gJy4vRmllbGQnXHJcbmV4cG9ydCB7IEdvYmxldCB9IGZyb20gJy4vR29ibGV0J1xyXG5leHBvcnQgeyBIYXlCYWxlIH0gZnJvbSAnLi9IYXlCYWxlJyIsImltcG9ydCBSZW5kZXIgZnJvbSAnLi4vUmVuZGVyJztcclxuaW1wb3J0IFVJIGZyb20gJy4uL1VJJztcclxuaW1wb3J0IHsgSUxldmVsLCBJQ293IH0gZnJvbSAnLi4vSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFN0YXRpY0ZpZWxkcywgRW50aXR5TmFtZSwgQXJyb3dDb2xvciwgTWFwQXJyb3csIERpcmVjdGlvbiwgQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEZpZWxkLCBIYXlCYWxlLCBBcnJvdywgR29ibGV0LCBDb3cgfSBmcm9tIFwiLi9FbnRpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBsb29wITogTm9kZUpTLlRpbWVyO1xyXG4gICAgc3RhdGljRmllbGRzOiBGaWVsZFtdID0gW107XHJcbiAgICBtb2JpbGVGaWVsZHM6IEhheUJhbGVbXSA9IFtdO1xyXG4gICAgbWFwQXJyb3dzOiBBcnJvd1tdID0gW107XHJcbiAgICBhY3RpdmVGaWVsZHMhOiBGaWVsZFtdO1xyXG4gICAgZ29ibGV0ITogR29ibGV0O1xyXG4gICAgY293cyE6IENvd1tdO1xyXG4gICAgbWFwRmllbGRzITogKEZpZWxkIHwgSGF5QmFsZSlbXTtcclxuICAgIGFycm93cyE6IEFycm93W107XHJcbiAgICByZW5kZXI6IFJlbmRlcjtcclxuICAgIHVpOiBVSTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZW5kZXI6IFJlbmRlciwgdWk6IFVJKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIgPSByZW5kZXI7XHJcbiAgICAgICAgdGhpcy51aSA9IHVpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRMZXZlbChsZXZlbDogSUxldmVsKSB7XHJcbiAgICAgICAgY29uc3Qge21hcE9iamVjdHM6IHtzdGF0aWNGaWVsZHMsIG1vYmlsZUZpZWxkcywgbWFwQXJyb3dzLCBhY3RpdmVGaWVsZHMsIGdvYmxldH0sIGNvd3MsIGFycm93c306IElMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmNyZWF0ZUNvd0h0bWxFbGVtZW50cyhjb3dzKTtcclxuICAgICAgICB0aGlzLnJlbmRlci5jcmVhdGVNb2JpbGVGaWVsZHNIdG1sRWxlbWVudHMobW9iaWxlRmllbGRzKTtcclxuICAgICAgICAvLyBtYXAgZmllbGRzXHJcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZHMgPSB0aGlzLmluaXRTdGF0aWNGaWVsZHMoc3RhdGljRmllbGRzKTtcclxuICAgICAgICB0aGlzLm1vYmlsZUZpZWxkcyA9IHRoaXMuaW5pdE1vYmlsZUZpZWxkcyhtb2JpbGVGaWVsZHMpO1xyXG4gICAgICAgIHRoaXMubWFwQXJyb3dzID0gdGhpcy5pbml0TWFwQXJyb3dzKG1hcEFycm93cyk7XHJcbiAgICAgICAgLy8gdGhpcy5hY3RpdmVGaWVsZHMgPSB0aGlzLmluaXRBY3RpdmVGaWVsZHMoYWN0aXZlRmllbGRzKTtcclxuICAgICAgICB0aGlzLmdvYmxldCA9IHRoaXMuaW5pdEdvYmxldChnb2JsZXQpO1xyXG4gICAgICAgIHRoaXMubWFwRmllbGRzID0gdGhpcy5nZXRNYXBGaWVsZHMoKTtcclxuICAgICAgICAvLyBnYW1lIG9iamVjdHNcclxuICAgICAgICB0aGlzLmNvd3MgPSB0aGlzLmluaXRDb3dzKGNvd3MpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5pbml0QXJyb3dzKGFycm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0YXRpY0ZpZWxkcyhzdGF0aWNGaWVsZHM/OiBTdGF0aWNGaWVsZHMpOiBGaWVsZFtdIHtcclxuICAgICAgICBpZiAoc3RhdGljRmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0ZpZWxkc0FycmF5OiBGaWVsZFtdID0gW107XHJcbiAgICAgICAgICAgIChPYmplY3Qua2V5cyhzdGF0aWNGaWVsZHMpIGFzIEVudGl0eU5hbWVbXSkuZm9yRWFjaCgoZmllbGROYW1lOiBFbnRpdHlOYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgc3RhdGljRmllbGRzW2ZpZWxkTmFtZV0/LmZvckVhY2goKGZpZWxkQ29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljRmllbGRzQXJyYXkucHVzaChuZXcgRmllbGQoZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7eDogZmllbGRDb29yZGluYXRlc1swXSwgeTogZmllbGRDb29yZGluYXRlc1sxXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpLmdhbWVUYWJsZVtmaWVsZENvb3JkaW5hdGVzWzFdIC0gMV1bZmllbGRDb29yZGluYXRlc1swXSAtIDFdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGljRmllbGRzQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TW9iaWxlRmllbGRzKG1vYmlsZUZpZWxkcz86IElMZXZlbFsnbWFwT2JqZWN0cyddWydtb2JpbGVGaWVsZHMnXSk6IEhheUJhbGVbXSB7XHJcbiAgICAgICAgaWYgKG1vYmlsZUZpZWxkcykge1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgICAgICByZXR1cm4gKE9iamVjdC5rZXlzKG1vYmlsZUZpZWxkcykgYXMgRW50aXR5TmFtZVtdKS5yZWR1Y2UoKG1vYmlsZUZpZWxkc0FycjogSGF5QmFsZVtdLCBvYmpOYW1lOiBFbnRpdHlOYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgbW9iaWxlRmllbGRzQXJyLmNvbmNhdChtb2JpbGVGaWVsZHNbb2JqTmFtZV0/Lm1hcCgoY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IEhheUJhbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iak5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiBjb29yZGluYXRlc1swXSwgeTogY29vcmRpbmF0ZXNbMV19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlci5tb2JpbGVGaWVsZHNbY291bnQrK10gYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApID8/IFtdXHJcbiAgICAgICAgICAgICAgICApLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TWFwQXJyb3dzKG1hcEFycm93cz86IElMZXZlbFsnbWFwT2JqZWN0cyddWydtYXBBcnJvd3MnXSk6IEFycm93W10ge1xyXG4gICAgICAgIGlmIChtYXBBcnJvd3MpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwQXJyb3dzQXJyYXk6IEFycm93W10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC5rZXlzKG1hcEFycm93cykgYXMgQXJyb3dDb2xvcltdKS5mb3JFYWNoKChhcnJvd0NvbG9yOiBBcnJvd0NvbG9yKSA9PlxyXG4gICAgICAgICAgICAgICAgbWFwQXJyb3dzW2Fycm93Q29sb3JdPy5mb3JFYWNoKChhcnJvdzogTWFwQXJyb3cpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwQXJyb3dzQXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFycm93KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEFycm93JHthcnJvd0NvbG9yICsgYXJyb3cuZGlyZWN0aW9ufWAgYXMgRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuZ2FtZVRhYmxlW2Fycm93LmNvb3JkaW5hdGVzLnkgLSAxXVthcnJvdy5jb29yZGluYXRlcy54IC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFwQXJyb3dzQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q293cyhjb3dzOiBJTGV2ZWxbJ2Nvd3MnXSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY293cykubWFwKChjb3c6IElDb3cpID0+XHJcbiAgICAgICAgICAgIG5ldyBDb3coXHJcbiAgICAgICAgICAgICAgICBgQ293JHtjb3cuY29sb3IgKyBjb3cuZGlyZWN0aW9ufWAgYXMgRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgICAgIGNvdy5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgIGNvdy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjb3cuY29sb3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlci5jb3dIdG1sRWxlbWVudHNbY291bnQrK11cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdEFycm93cyhhcnJvd3M6IElMZXZlbFsnYXJyb3dzJ10pIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGFycm93c0FycmF5OiBBcnJvd1tdID0gW107XHJcbiAgICAgICAgKE9iamVjdC5rZXlzKGFycm93cykgYXMgQXJyb3dDb2xvcltdKS5mb3JFYWNoKChhcnJvd0NvbG9yOiBBcnJvd0NvbG9yKSA9PlxyXG4gICAgICAgICAgICAoT2JqZWN0LmtleXMoYXJyb3dzW2Fycm93Q29sb3JdIGFzIHsgW2sgaW4gRGlyZWN0aW9uXTogbnVtYmVyIH0pIGFzIERpcmVjdGlvbltdKS5mb3JFYWNoKChhcnJvd0RpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhcnJvd3NbYXJyb3dDb2xvcl0gYXMgeyBbayBpbiBEaXJlY3Rpb25dOiBudW1iZXIgfSlbYXJyb3dEaXJlY3Rpb25dOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJyb3coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXJyb3cke2Fycm93Q29sb3IgKyBhcnJvd0RpcmVjdGlvbn1gIGFzIEVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eDogMCwgeTogMH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0RpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpLmFycm93c1RhYmxlLmZsYXQ8SFRNTEVsZW1lbnRbXVtdPigxKVtjb3VudCsrXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuIGFycm93c0FycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qaW5pdEFjdGl2ZUZpZWxkcyhmaWVsZHM6IElMZXZlbFsnbWFwT2JqZWN0cyddW1wiYWN0aXZlRmllbGRzXCJdIHwgdW5kZWZpbmVkKTogRmllbGRbXSB7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25zdCBtb2JpbGVGaWVsZHNBcnI6IEZpZWxkW10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC5rZXlzKGZpZWxkcykgYXMgRW50aXR5TmFtZVtdKS5mb3JFYWNoKChmaWVsZE5hbWU6IEVudGl0eU5hbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkc1tmaWVsZE5hbWVdPy5mb3JFYWNoKChjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9Ki9cclxuXHJcbiAgICBpbml0R29ibGV0KGdvYmxldDogSUxldmVsWydtYXBPYmplY3RzJ11bJ2dvYmxldCddKTogR29ibGV0IHtcclxuICAgICAgICByZXR1cm4gbmV3IEdvYmxldChnb2JsZXQuY29vcmRpbmF0ZXMsIHRoaXMudWkuZ2FtZVRhYmxlW2dvYmxldC5jb29yZGluYXRlcy55IC0gMV1bZ29ibGV0LmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbE1hcE9iamVjdHMoKTogKEZpZWxkIHwgQ293IHwgSGF5QmFsZSlbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4udGhpcy5zdGF0aWNGaWVsZHMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMubW9iaWxlRmllbGRzLFxyXG4gICAgICAgICAgICAuLi50aGlzLm1hcEFycm93cyxcclxuICAgICAgICAgICAgdGhpcy5nb2JsZXQsXHJcbiAgICAgICAgICAgIC4uLnRoaXMuY293c1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFwRmllbGRzKCk6IChGaWVsZCB8IEhheUJhbGUpW10ge1xyXG4gICAgICAgIGNvbnN0IG1hcEZpZWxkczogKEZpZWxkIHwgSGF5QmFsZSlbXSA9IFsuLi50aGlzLnN0YXRpY0ZpZWxkcywgdGhpcy5nb2JsZXRdO1xyXG4gICAgICAgIGlmICh0aGlzLm1vYmlsZUZpZWxkcykge1xyXG4gICAgICAgICAgICBtYXBGaWVsZHMuY29uY2F0KC4uLnRoaXMubW9iaWxlRmllbGRzKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5tYXBBcnJvd3MpIHtcclxuICAgICAgICAgICAgbWFwRmllbGRzLmNvbmNhdCguLi50aGlzLm1hcEFycm93cylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcEZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRHYW1lT2JqZWN0cygpOiAoQXJyb3cgfCBDb3cpW10ge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnRoaXMuY293cyxcclxuICAgICAgICAgICAgLi4udGhpcy5tYXBBcnJvd3NcclxuICAgICAgICBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFycm93cygpOiBBcnJvd1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcnJvd3M7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEZpZWxkQnlDb29yZGluYXRlcyhjb29yZGluYXRlczogQ29vcmRpbmF0ZXMpOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiBbLi4udGhpcy5zdGF0aWNGaWVsZHMsIC4uLnRoaXMubW9iaWxlRmllbGRzXS5maW5kKChmaWVsZDogRmllbGQgfCBIYXlCYWxlKSA9PlxyXG4gICAgICAgICAgICBmaWVsZC5jb29yZGluYXRlcy54ID09PSBjb29yZGluYXRlcy54ICYmIGZpZWxkLmNvb3JkaW5hdGVzLnkgPT09IGNvb3JkaW5hdGVzLnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRGaWVsZEJ5SHRtbEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogRmllbGQgfCBIYXlCYWxlIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYXBGaWVsZHMuZmluZCgoZmllbGQ6IEZpZWxkIHwgSGF5QmFsZSkgPT5cclxuICAgICAgICAgICAgaHRtbEVsZW1lbnQgPT09IGZpZWxkPy5saW5rZWRIdG1sRWxlbWVudFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEdhbWVPYmplY3RCeUh0bWxFbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IEZpZWxkIHwgQ293IHwgdW5kZWZpbmVkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRHYW1lT2JqZWN0cygpLmZpbmQoKG9iajogQXJyb3cgfCBDb3cpID0+XHJcbiAgICAgICAgICAgIGh0bWxFbGVtZW50ID09PSAob2JqPy5saW5rZWRIdG1sRWxlbWVudCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmRBcnJvd0J5SHRtbEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogQXJyb3cgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycm93cy5maW5kKChhcnJvdzogQXJyb3cpID0+IGFycm93LmxpbmtlZEh0bWxFbGVtZW50ID09PSBodG1sRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Fycm93cygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3QXJyb3dzKHRoaXMuYXJyb3dzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJTY2VuZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNsZWFyU2NlbmUoKTtcclxuICAgICAgICB0aGlzLnJlbmRlci5kcmF3U2NlbmUoXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGljRmllbGRzLFxyXG4gICAgICAgICAgICB7bW9iaWxlRmllbGRzOiB0aGlzLm1vYmlsZUZpZWxkcywgY293czogdGhpcy5jb3dzfSxcclxuICAgICAgICAgICAgdGhpcy5tYXBBcnJvd3MsIHRoaXMuZ29ibGV0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmNsZWFyU2NlbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0Fycm93cyhjb3c6IENvdyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm1hcEFycm93cykge1xyXG4gICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMubWFwQXJyb3dzKS5mb3JFYWNoKChhcnJvdzogQXJyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjb3cuY29vcmRpbmF0ZXMueCA9PT0gYXJyb3cuY29vcmRpbmF0ZXMueCAmJiBjb3cuY29vcmRpbmF0ZXMueSA9PT0gYXJyb3cuY29vcmRpbmF0ZXMueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdy5kaXJlY3Rpb24gPSBhcnJvdy5kaXJlY3Rpb247XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXBBcnJvd3Muc3BsaWNlKHRoaXMubWFwQXJyb3dzLmluZGV4T2YoYXJyb3cpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrR29ibGV0KGNvdzogQ293KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvdy5jb2xvciA9PT0gXCJHcmV5XCIgJiZcclxuICAgICAgICAgICAgdGhpcy5nb2JsZXQuY29vcmRpbmF0ZXMueCA9PT0gY293LmNvb3JkaW5hdGVzLnggJiZcclxuICAgICAgICAgICAgdGhpcy5nb2JsZXQuY29vcmRpbmF0ZXMueSA9PT0gY293LmNvb3JkaW5hdGVzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5sb29wKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9vcCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0RmllbGQ6IEZpZWxkIHwgSGF5QmFsZSB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGxldCBpc1ZpY3RvcnkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb3dzKS5mb3JFYWNoKChjb3c6IENvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGNvdy5jb29yZGluYXRlcy54KSAmJiBOdW1iZXIuaXNJbnRlZ2VyKGNvdy5jb29yZGluYXRlcy55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQXJyb3dzKGNvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmljdG9yeSA9IHRoaXMuY2hlY2tHb2JsZXQoY293KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1ZpY3RvcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRGaWVsZDogRmllbGQgfCBIYXlCYWxlIHwgdW5kZWZpbmVkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjb3cuY29vcmRpbmF0ZXMueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkPy5uYW1lID09PSBcIlNsaWRlVXBcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZD8ubmFtZSA9PT0gXCJTbGlkZVJpZ2h0XCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQ/Lm5hbWUgPT09IFwiU2xpZGVEb3duXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQ/Lm5hbWUgPT09IFwiU2xpZGVMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5sYXllciA9IGNvdy5sYXllciA9PT0gMSA/IDIgOiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb3cuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZC5uYW1lID09PSBcIlNsaWRlVXBcIikgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnkgPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueSAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY293LmNvb3JkaW5hdGVzLnggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY293LmNvb3JkaW5hdGVzLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3cubGF5ZXIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkLm5hbWUgPT09IFwiU2xpZGVSaWdodFwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZC5uYW1lID09PSBcIlNsaWRlRG93blwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55ICsgMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54IC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkLm5hbWUgPT09IFwiU2xpZGVMZWZ0XCIpIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggLSAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kR2FtZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJZT1UgV0lOISEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gRklYTUU6IGRlbGV0ZSBzd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRGaWVsZDogRmllbGQgfCBIYXlCYWxlIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvdy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjb3cuY29vcmRpbmF0ZXMueSAtIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY293LmNvb3JkaW5hdGVzLnggKyAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjb3cuY29vcmRpbmF0ZXMueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiRG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjb3cuY29vcmRpbmF0ZXMueSArIDFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueCA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55ICsgMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCAtIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueCAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTY2VuZSgpO1xyXG4gICAgICAgICAgICB9LCA0MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGVuZEdhbWUoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxvb3ApO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dhbWUnOyIsImltcG9ydCBVSSBmcm9tICcuLi9VSSc7XHJcbmltcG9ydCB7IElDb3csIElMZXZlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEFycm93LCBGaWVsZCwgR29ibGV0LCBIYXlCYWxlLCBDb3cgfSBmcm9tIFwiLi4vR2FtZS9FbnRpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcclxuICAgIGh0bWxHYW1lVGFibGU6IEhUTUxFbGVtZW50O1xyXG4gICAgaHRtbEFycm93c1RhYmxlOiBIVE1MRWxlbWVudDtcclxuICAgIGdhbWVUYWJsZTogSFRNTEVsZW1lbnRbXVtdO1xyXG4gICAgYXJyb3dzVGFibGU6IEhUTUxFbGVtZW50W11bXTtcclxuICAgIGNvd0h0bWxFbGVtZW50cyE6IEhUTUxFbGVtZW50W107XHJcbiAgICBtb2JpbGVGaWVsZHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1aTogVUkpIHtcclxuICAgICAgICB0aGlzLmh0bWxHYW1lVGFibGUgPSB1aS5odG1sR2FtZVRhYmxlO1xyXG4gICAgICAgIHRoaXMuaHRtbEFycm93c1RhYmxlID0gdWkuaHRtbEFycm93c1RhYmxlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRhYmxlID0gdWkuZ2FtZVRhYmxlO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUgPSB1aS5hcnJvd3NUYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb3dIdG1sRWxlbWVudHMoY293czogSUxldmVsWydjb3dzJ10pOiB2b2lkIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoY293cykuZm9yRWFjaCgoY293OiBJQ293KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpdkNvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGRpdkNvdy5jbGFzc05hbWUgPSBgY293LXdyYXBwZXIgY293LSR7Y291bnQrK31gO1xyXG4gICAgICAgICAgICBkaXZDb3cuc3R5bGUudG9wID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgICAgICAuaGVpZ2h0ICogKGNvdy5jb29yZGluYXRlcy55IC0gMSl9cHhgO1xyXG4gICAgICAgICAgICBkaXZDb3cuc3R5bGUubGVmdCA9IGAkeyh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxyXG4gICAgICAgICAgICAgICAgLndpZHRoICogKGNvdy5jb29yZGluYXRlcy54IC0gMSl9cHhgO1xyXG4gICAgICAgICAgICBkaXZDb3cuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGRpdkNvdy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBkaXZDb3cuc3R5bGUuekluZGV4ID0gJzMwJztcclxuICAgICAgICAgICAgaHRtbEVsZW1lbnRzLnB1c2goZGl2Q293KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXRhYmxlLXdyYXBwZXJcIik/LmFwcGVuZENoaWxkKGRpdkNvdyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb3dIdG1sRWxlbWVudHMgPSBodG1sRWxlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9iaWxlRmllbGRzSHRtbEVsZW1lbnRzKGZpZWxkczogSUxldmVsWydtYXBPYmplY3RzJ11bJ21vYmlsZUZpZWxkcyddIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC52YWx1ZXMoZmllbGRzKSkuZm9yRWFjaCgoY29vcmRpbmF0ZXNBcnI6IFtudW1iZXIsIG51bWJlcl1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuY2xhc3NOYW1lID0gYG1vYmlsZS1maWVsZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUudG9wID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb29yZGluYXRlc1swXSAtIDEpfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBkaXZGaWVsZC5zdHlsZS5sZWZ0ID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGNvb3JkaW5hdGVzWzFdIC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkZpZWxkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkZpZWxkLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUuekluZGV4ID0gJzIwJztcclxuICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudHMucHVzaChkaXZGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXRhYmxlLXdyYXBwZXJcIik/LmFwcGVuZENoaWxkKGRpdkZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1vYmlsZUZpZWxkcyA9IGh0bWxFbGVtZW50cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1N0YXRpY09iamVjdHMoZmllbGRzOiBGaWVsZFtdLCBtYXBBcnJvd3M6IEFycm93W10sIGdvYmxldDogR29ibGV0KSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhmaWVsZHMpLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gKHRoaXMuZ2FtZVRhYmxlW2ZpZWxkLmNvb3JkaW5hdGVzLnkgLSAxXVtmaWVsZC5jb29yZGluYXRlcy54IC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7ZmllbGQuaW1nVXJsfVwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXRgO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QudmFsdWVzKG1hcEFycm93cykuZm9yRWFjaCgoYXJyb3c6IEFycm93KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSB0aGlzLmdhbWVUYWJsZVthcnJvdy5jb29yZGluYXRlcy55IC0gMV1bYXJyb3cuY29vcmRpbmF0ZXMueCAtIDFdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2Fycm93LmltZ1VybH1cIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0YDtcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnb2JsZXRFbGVtID0gKHRoaXMuZ2FtZVRhYmxlW2dvYmxldC5jb29yZGluYXRlcy55IC0gMV1bZ29ibGV0LmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIGdvYmxldEVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2dvYmxldC5pbWdVcmx9XCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdGA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0dhbWVPYmplY3RzKGdhbWVPYmplY3RzOiB7IG1vYmlsZUZpZWxkcz86IEhheUJhbGVbXSwgY293czogQ293W10gfSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0cy5tb2JpbGVGaWVsZHMpIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdHMubW9iaWxlRmllbGRzLmZvckVhY2goKGZpZWxkOiBIYXlCYWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS50b3AgPSBgJHsodGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogKGZpZWxkLmNvb3JkaW5hdGVzLnkgLSAxKX1weGA7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGZpZWxkLmNvb3JkaW5hdGVzLnggLSAxKX1weGA7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudFdpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7ZmllbGQuaW1nVXJsfVwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXRgO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoZ2FtZU9iamVjdHMuY293cykuZm9yRWFjaCgoY293OiBDb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY3NzVG9wID0gY293LmxheWVyID09PSAyID9cclxuICAgICAgICAgICAgICAgICh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAoY293LmNvb3JkaW5hdGVzLnkgLSAxKSAtIDMwIDpcclxuICAgICAgICAgICAgICAgICh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAoY293LmNvb3JkaW5hdGVzLnkgLSAxKTtcclxuICAgICAgICAgICAgY29uc3QgY3NzTGVmdCA9ICh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIChjb3cuY29vcmRpbmF0ZXMueCAtIDEpO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUudG9wID0gYCR7Y3NzVG9wfXB4YDtcclxuICAgICAgICAgICAgY293LmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHtjc3NMZWZ0fXB4YDtcclxuICAgICAgICAgICAgY293LmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgY293LmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiLi4vLi4vJHtjb3cuaW1nVXJsfVwiKSBuby1yZXBlYXQgY2VudGVyYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QXJyb3dzKGFycm93czogQXJyb3dbXSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJBcnJvd3NUYWJsZSgpO1xyXG4gICAgICAgIGFycm93cy5mb3JFYWNoKChhcnJvdzogQXJyb3cpID0+IHtcclxuICAgICAgICAgICAgYXJyb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2Fycm93LmltZ1VybH1cIikgbm8tcmVwZWF0IGNlbnRlcmA7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTY2VuZSgpIHtcclxuICAgICAgICB0aGlzLmdhbWVUYWJsZS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChmaWVsZDogSFRNTEVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIChmaWVsZC5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJBcnJvd3NUYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmFycm93c1RhYmxlLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goZmllbGQgPT5cclxuICAgICAgICAgICAgICAgIChmaWVsZC5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJcIlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzY2FsZUFycm93c1RhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaCh0ZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS53aWR0aCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudFdpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTY2VuZShcclxuICAgICAgICBzdGF0aWNGaWVsZHM6IEZpZWxkW10sXHJcbiAgICAgICAgZ2FtZU9iamVjdHM6IHtcclxuICAgICAgICAgICAgbW9iaWxlRmllbGRzPzogSGF5QmFsZVtdLFxyXG4gICAgICAgICAgICBjb3dzOiBDb3dbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWFwQXJyb3dzOiBBcnJvd1tdLFxyXG4gICAgICAgIGdvYmxldDogR29ibGV0XHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmRyYXdTdGF0aWNPYmplY3RzKHN0YXRpY0ZpZWxkcywgbWFwQXJyb3dzLCBnb2JsZXQpO1xyXG4gICAgICAgIHRoaXMuZHJhd0dhbWVPYmplY3RzKGdhbWVPYmplY3RzKTtcclxuICAgICAgICB0aGlzLnNjYWxlQXJyb3dzVGFibGUoKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9SZW5kZXInOyIsImltcG9ydCBDT05GIGZyb20gJy4vQ29uZic7XHJcbmltcG9ydCB7IEFycm93IH0gZnJvbSBcIi4vR2FtZS9FbnRpdGllc1wiO1xyXG5pbXBvcnQgeyBnYW1lLCBzdGFydEdhbWUsIGVuZEdhbWUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGh0bWxHYW1lVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBodG1sQXJyb3dzVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBnYW1lVGFibGU6IEhUTUxUYWJsZUNlbGxFbGVtZW50W11bXTtcclxuICAgIGFycm93c1RhYmxlOiBIVE1MVGFibGVDZWxsRWxlbWVudFtdW107XHJcbiAgICBzZWxlY3RlZEl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBtb3VzZVghOiBudW1iZXI7XHJcbiAgICBtb3VzZVkhOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUNvbnRhaW5lckNzc1NlbGVjdG9yOiBzdHJpbmcsIGFycm93c1RhYmxlQ3NzU2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaHRtbEdhbWVUYWJsZSA9IHRoaXMuY3JlYXRlR2FtZVRhYmxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihnYW1lQ29udGFpbmVyQ3NzU2VsZWN0b3IpPy5hcHBlbmRDaGlsZCh0aGlzLmh0bWxHYW1lVGFibGUpO1xyXG4gICAgICAgIHRoaXMuaHRtbEFycm93c1RhYmxlID0gdGhpcy5jcmVhdGVBcnJvd3NUYWJsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJyb3dzVGFibGVDc3NTZWxlY3Rvcik/LmFwcGVuZENoaWxkKHRoaXMuaHRtbEFycm93c1RhYmxlKTtcclxuICAgICAgICB0aGlzLmdhbWVUYWJsZSA9IHRoaXMuaHRtbFRhYmxlVG9BcnJheSh0aGlzLmh0bWxHYW1lVGFibGUpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUgPSB0aGlzLmh0bWxUYWJsZVRvQXJyYXkodGhpcy5odG1sQXJyb3dzVGFibGUpO1xyXG5cclxuICAgICAgICAvLyBFdmVudExpc3RlbmVyc1xyXG4gICAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcclxuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1nYW1lLWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBlbmRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgIHRoaXMubW91c2VZID0gZS5jbGllbnRZO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS50b3AgPSBgJHstdGhpcy5tb3VzZVkgKyBlLmNsaWVudFl9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUubGVmdCA9IGAkey10aGlzLm1vdXNlWCArIGUuY2xpZW50WH1weGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImdhbWUtZmllbGRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFnYW1lLmZpbmRGaWVsZEJ5SHRtbEVsZW1lbnQoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICFnYW1lLmZpbmRHYW1lT2JqZWN0QnlIdG1sRWxlbWVudChlLnRhcmdldCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0LzQvtC20L3QviDQv9C+0YHRgtCw0LLQuNGC0Ywg0L3QsCDQv9C+0LvQtVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLnNwbGl0KFwiIFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihzdHIgPT4gc3RyLm1hdGNoKC9eKHh8eSktXFxkKyQvZykpLm1hcChzdHIgPT4gTnVtYmVyKHN0ci5zbGljZSgyKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvdzogQXJyb3cgfCB1bmRlZmluZWQgPSBnYW1lLmZpbmRBcnJvd0J5SHRtbEVsZW1lbnQodGhpcy5zZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRBcnJvdzogQXJyb3cgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcnJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdyA9IGdhbWUuYXJyb3dzLnNwbGljZShnYW1lLmFycm93cy5pbmRleE9mKGFycm93KSwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lLm1hcEFycm93cy5wdXNoKHNlbGVjdGVkQXJyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdyA9IGdhbWUubWFwQXJyb3dzLmZpbmQoKGFycm93OiBBcnJvdykgPT4gdGhpcy5zZWxlY3RlZEl0ZW0gPT09IGFycm93LmxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRBcnJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdy5jb29yZGluYXRlcy54ID0gY29vcmRpbmF0ZXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmNvb3JkaW5hdGVzLnkgPSBjb29yZGluYXRlc1sxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cubGlua2VkSHRtbEVsZW1lbnQgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdy5saW5rZWRIdG1sRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZS5pbmNsdWRlcyhcImFycm93LWZpZWxkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyb3cgPSBnYW1lLm1hcEFycm93cy5maW5kKGFycm93ID0+IHRoaXMuc2VsZWN0ZWRJdGVtID09PSBhcnJvdy5saW5rZWRIdG1sRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkQXJyb3cgPSBnYW1lLm1hcEFycm93cy5zcGxpY2UoZ2FtZS5tYXBBcnJvd3MuaW5kZXhPZihhcnJvdyksIDEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmNvb3JkaW5hdGVzLnggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmNvb3JkaW5hdGVzLnkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmxpbmtlZEh0bWxFbGVtZW50ID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZS5hcnJvd3MucHVzaChzZWxlY3RlZEFycm93KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUubGVmdCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZ2FtZS5kcmF3QXJyb3dzKCk7XHJcbiAgICAgICAgICAgICAgICBnYW1lLnJlbmRlclNjZW5lKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBodG1sVGFibGVUb0FycmF5KGh0bWxUYWJsZTogSFRNTFRhYmxlRWxlbWVudCk6IEhUTUxUYWJsZUNlbGxFbGVtZW50W11bXSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oaHRtbFRhYmxlLnJvd3MpLm1hcCgocm93OiBIVE1MVGFibGVSb3dFbGVtZW50KSA9PiBBcnJheS5mcm9tKHJvdy5jZWxscykpO1xyXG4gICAgICAgIC8vINC+0LTQvdC+0LzQtdGA0L3Ri9C5INC80LDRgdGB0LjQslxyXG4gICAgICAgIC8vIHJldHVybiBbLi4uaHRtbFRhYmxlLnJvd3NdLnJlZHVjZSgoY2VsbHM6IEhUTUxUYWJsZUNlbGxFbGVtZW50W10sIHJvdzogSFRNTFRhYmxlUm93RWxlbWVudCkgPT4gY2VsbHMuY29uY2F0KFsuLi5yb3cuY2VsbHNdKSwgW10pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUdhbWVUYWJsZSgpOiBIVE1MVGFibGVFbGVtZW50IHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0YWJsZS5pZCA9IFwiZ2FtZS10YWJsZVwiO1xyXG4gICAgICAgIGNvbnN0IHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ORi5NYXAuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ09ORi5NYXAud2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGBnYW1lLWZpZWxkIHgtJHtqICsgMX0geS0ke2kgKyAxfWA7XHJcbiAgICAgICAgICAgICAgICB0ZC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRCb2R5LmFwcGVuZENoaWxkKHRyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGFibGUuYXBwZW5kQ2hpbGQodEJvZHkpO1xyXG4gICAgICAgIHJldHVybiB0YWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBcnJvd3NUYWJsZSgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcclxuICAgICAgICB0YWJsZS5pZCA9IFwidWktdGFibGVcIjtcclxuICAgICAgICBjb25zdCB0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IENPTkYuQXJyb3dzVGFibGUuaGVpZ2h0OyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQ09ORi5BcnJvd3NUYWJsZS53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gYGFycm93LWZpZWxkIHgtJHtqICsgMX0geS0ke2kgKyAxfWA7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBVSSBmcm9tICcuL1VJJztcclxuaW1wb3J0IFJlbmRlciBmcm9tICcuL1JlbmRlcic7XHJcbmltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XHJcbmltcG9ydCB7IGx2bDEsIGx2bDIsIGx2bDQgfSBmcm9tICcuL2xldmVscyc7XHJcblxyXG5jb25zdCB1aTogVUkgPSBuZXcgVUkoXCIjZ2FtZS10YWJsZS13cmFwcGVyXCIsIFwiI3VpLXRhYmxlLXdyYXBwZXJcIik7XHJcbmNvbnN0IHJlbmRlcjogUmVuZGVyID0gbmV3IFJlbmRlcih1aSk7XHJcbi8vIEZJWE1FOiBkZWxldGUgZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBnYW1lOiBHYW1lID0gbmV3IEdhbWUocmVuZGVyLCB1aSk7XHJcblxyXG5kb2N1bWVudC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgZ2FtZS5zdGFydEdhbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZEdhbWUoKSB7XHJcbiAgICBnYW1lLmVuZEdhbWUoKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGdhbWUubG9hZExldmVsKGx2bDIpO1xyXG4gICAgZ2FtZS5yZW5kZXJTY2VuZSgpO1xyXG4gICAgZ2FtZS5kcmF3QXJyb3dzKCk7XHJcbn1cclxuXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIGdhbWUucmVuZGVyU2NlbmUoKTtcclxufVxyXG4iLCJleHBvcnQgeyBsdmwxIH0gZnJvbSAnLi9sdmwxJztcclxuZXhwb3J0IHsgbHZsMiB9IGZyb20gJy4vbHZsMic7XHJcbmV4cG9ydCB7IGx2bDQgfSBmcm9tICcuL2x2bDQnO1xyXG5cclxuIiwiaW1wb3J0IHsgSUxldmVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsdmwxOiBSZWFkb25seTxJTGV2ZWw+ID0ge1xyXG4gICAgbWFwT2JqZWN0czoge1xyXG4gICAgICAgIHN0YXRpY0ZpZWxkczoge1xyXG4gICAgICAgICAgICBcIlBpbGxhclwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMjAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDE0XSxcclxuICAgICAgICAgICAgICAgIFsyMCwgMTRdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiRmVuY2VIXCI6IFtcclxuICAgICAgICAgICAgICAgIFsyLCAxXSwgWzMsIDFdLCBbNCwgMV0sIFs1LCAxXSwgWzYsIDFdLCBbNywgMV0sIFs4LCAxXSwgWzksIDFdLCBbMTAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzExLCAxXSwgWzEyLCAxXSwgWzEzLCAxXSwgWzE0LCAxXSwgWzE1LCAxXSwgWzE2LCAxXSwgWzE3LCAxXSwgWzE4LCAxXSwgWzE5LCAxXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxNF0sIFszLCAxNF0sIFs0LCAxNF0sIFs1LCAxNF0sIFs2LCAxNF0sIFs3LCAxNF0sIFs4LCAxNF0sIFs5LCAxNF0sIFsxMCwgMTRdLFxyXG4gICAgICAgICAgICAgICAgWzExLCAxNF0sIFsxMiwgMTRdLCBbMTMsIDE0XSwgWzE0LCAxNF0sIFsxNSwgMTRdLCBbMTYsIDE0XSwgWzE3LCAxNF0sIFsxOCwgMTRdLCBbMTksIDE0XSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZVZcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDJdLCBbMSwgM10sIFsxLCA0XSwgWzEsIDVdLCBbMSwgNl0sIFsxLCA3XSwgWzEsIDhdLCBbMSwgOV0sIFsxLCAxMF0sIFsxLCAxMV0sIFsxLCAxMl0sIFsxLCAxM10sXHJcbiAgICAgICAgICAgICAgICBbMjAsIDJdLCBbMjAsIDNdLCBbMjAsIDRdLCBbMjAsIDVdLCBbMjAsIDZdLCBbMjAsIDddLCBbMjAsIDhdLCBbMjAsIDldLCBbMjAsIDEwXSwgWzIwLCAxMV0sIFsyMCwgMTJdLCBbMjAsIDEzXSxcclxuICAgICAgICAgICAgICAgIFsxMSwgNl0sIFsxMSwgN10sIFsxMSwgOF0sIFsxMSwgOV0sIFsxMSwgMTBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvYmxldDoge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogeyB4OiAxNiwgeTogMyB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvd3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiB7eDogNSwgeTogOH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJHcmV5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYXJyb3dzOiB7XHJcbiAgICAgICAgXCJSZWRcIjoge1xyXG4gICAgICAgICAgICBcIlVwXCI6IDEsXHJcbiAgICAgICAgICAgIFwiUmlnaHRcIjogMVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuIiwiaW1wb3J0IHsgSUxldmVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsdmwyOiBSZWFkb25seTxJTGV2ZWw+ID0ge1xyXG4gICAgbWFwT2JqZWN0czoge1xyXG4gICAgICAgIHN0YXRpY0ZpZWxkczoge1xyXG4gICAgICAgICAgICBcIlBpbGxhclwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMV0sIFsxMiwgMV0sIFsyMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMTIsIDZdLCBbMTUsIDZdLCBbMTcsIDZdLCBbMjAsIDZdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDE0XSwgWzIwLCAxNF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZUhcIjogW1xyXG4gICAgICAgICAgICAgICAgWzIsIDFdLCBbMywgMV0sIFs0LCAxXSwgWzUsIDFdLCBbNiwgMV0sIFs3LCAxXSwgWzgsIDFdLCBbOSwgMV0sIFsxMCwgMV0sIFsxMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMTMsIDFdLCBbMTQsIDFdLCBbMTUsIDFdLCBbMTYsIDFdLCBbMTcsIDFdLCBbMTgsIDFdLCBbMTksIDFdLFxyXG4gICAgICAgICAgICAgICAgWzEzLCA2XSwgWzE0LCA2XSwgWzE4LCA2XSwgWzE5LCA2XSxcclxuICAgICAgICAgICAgICAgIFsyLCAxNF0sIFszLCAxNF0sIFs0LCAxNF0sIFs1LCAxNF0sIFs2LCAxNF0sIFs3LCAxNF0sIFs4LCAxNF0sIFs5LCAxNF0sIFsxMCwgMTRdLFxyXG4gICAgICAgICAgICAgICAgWzExLCAxNF0sIFsxMiwgMTRdLCBbMTMsIDE0XSwgWzE0LCAxNF0sIFsxNSwgMTRdLCBbMTYsIDE0XSwgWzE3LCAxNF0sIFsxOCwgMTRdLCBbMTksIDE0XSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZVZcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDJdLCBbMSwgM10sIFsxLCA0XSwgWzEsIDVdLCBbMSwgNl0sIFsxLCA3XSxcclxuICAgICAgICAgICAgICAgIFsxLCA4XSwgWzEsIDldLCBbMSwgMTBdLCBbMSwgMTFdLCBbMSwgMTJdLCBbMSwgMTNdLFxyXG4gICAgICAgICAgICAgICAgWzEyLCAyXSwgWzEyLCAzXSwgWzEyLCA0XSwgWzEyLCA1XSxcclxuICAgICAgICAgICAgICAgIFsyMCwgMl0sIFsyMCwgM10sIFsyMCwgNF0sIFsyMCwgNV0sIFsyMCwgN10sXHJcbiAgICAgICAgICAgICAgICBbMjAsIDhdLCBbMjAsIDldLCBbMjAsIDEwXSwgWzIwLCAxMV0sIFsyMCwgMTJdLCBbMjAsIDEzXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmVGaWVsZHM6IHtcclxuICAgICAgICAgICAgXCJLZXlcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEwLCA4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb2JsZXQ6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogMTYsIHk6IDMgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3dzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogeyB4OiA1LCB5OiAzIH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJHcmV5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYXJyb3dzOiB7XHJcbiAgICAgICAgXCJSZWRcIjoge1xyXG4gICAgICAgICAgICBcIlVwXCI6IDEsXHJcbiAgICAgICAgICAgIFwiUmlnaHRcIjogMSxcclxuICAgICAgICAgICAgXCJEb3duXCI6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGx2bDI7XHJcbiIsImltcG9ydCB7IElMZXZlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbHZsNDogUmVhZG9ubHk8SUxldmVsPiA9IHtcclxuICAgIG1hcE9iamVjdHM6IHtcclxuICAgICAgICBzdGF0aWNGaWVsZHM6IHtcclxuICAgICAgICAgICAgXCJQaWxsYXJcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDFdLCBbMTEsIDFdLCBbMjAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDE0XSwgWzEwLCAxNF0sIFsyMCwgMTRdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiRmVuY2VIXCI6IFtcclxuICAgICAgICAgICAgICAgIFsyLCAxXSwgWzMsIDFdLCBbNCwgMV0sIFs1LCAxXSwgWzYsIDFdLCBbNywgMV0sIFs4LCAxXSwgWzksIDFdLCBbMTAsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzEyLCAxXSwgWzEzLCAxXSwgWzE0LCAxXSwgWzE1LCAxXSwgWzE2LCAxXSwgWzE3LCAxXSwgWzE4LCAxXSwgWzE5LCAxXSxcclxuICAgICAgICAgICAgICAgIFsyLCAxNF0sIFszLCAxNF0sIFs0LCAxNF0sIFs1LCAxNF0sIFs2LCAxNF0sIFs3LCAxNF0sIFs4LCAxNF0sIFs5LCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbMTEsIDE0XSwgWzEyLCAxNF0sIFsxMywgMTRdLCBbMTQsIDE0XSwgWzE1LCAxNF0sIFsxNiwgMTRdLCBbMTcsIDE0XSwgWzE4LCAxNF0sIFsxOSwgMTRdLFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkZlbmNlVlwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMl0sIFsxLCAzXSwgWzEsIDRdLCBbMSwgNV0sIFsxLCA2XSwgWzEsIDddLCBbMSwgOF0sIFsxLCA5XSwgWzEsIDEwXSwgWzEsIDExXSwgWzEsIDEyXSwgWzEsIDEzXSxcclxuICAgICAgICAgICAgICAgIFsyMCwgMl0sIFsyMCwgM10sIFsyMCwgNF0sIFsyMCwgNV0sIFsyMCwgNl0sIFsyMCwgN10sIFsyMCwgOF0sIFsyMCwgOV0sIFsyMCwgMTBdLCBbMjAsIDExXSwgWzIwLCAxMl0sIFsyMCwgMTNdLFxyXG4gICAgICAgICAgICAgICAgWzExLCAyXSwgWzExLCAzXSwgWzExLCA0XSwgWzExLCA1XSwgWzExLCA2XSxcclxuICAgICAgICAgICAgICAgIFsxMCwgOV0sIFsxMCwgMTBdLCBbMTAsIDExXSwgWzEwLCAxMl0sIFsxMCwgMTNdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiU2xpZGVSaWdodFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbOSwgOF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTbGlkZUxlZnRcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEzLCA4XVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkJsb2NrXCI6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgN10sIFsxMCwgOF0sIFsxMiwgOF1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9iaWxlRmllbGRzOiB7XHJcbiAgICAgICAgICAgIFwiSGF5QmFsZVwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMTEsIDEwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXBBcnJvd3M6IHtcclxuICAgICAgICAgICAgXCJSZWRcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiB7eDogMTEsIHk6IDl9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJSaWdodFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdvYmxldDoge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczoge3g6IDE2LCB5OiAzfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3dzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczoge3g6IDUsIHk6IDh9LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiR3JleVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzOiB7eDogMTMsIHk6IDExfSxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiR3JleVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGFycm93czoge1xyXG4gICAgICAgIFwiUmVkXCI6IHtcclxuICAgICAgICAgICAgXCJVcFwiOiAyXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbHZsNDtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==