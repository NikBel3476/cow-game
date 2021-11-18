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

var _levels_lvl4_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "game": () => (/* binding */ game),
/* harmony export */   "startGame": () => (/* binding */ startGame),
/* harmony export */   "endGame": () => (/* binding */ endGame)
/* harmony export */ });
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ "./src/UI.ts");
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render */ "./src/Render/index.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Game */ "./src/Game/index.ts");
/* harmony import */ var _levels_lvl4_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./levels/lvl4.json */ "./src/levels/lvl4.json");




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
    game.loadLevel(/*#__PURE__*/ (_levels_lvl4_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache || (_levels_lvl4_json__WEBPACK_IMPORTED_MODULE_3___namespace_cache = __webpack_require__.t(_levels_lvl4_json__WEBPACK_IMPORTED_MODULE_3__, 2))));
    game.renderScene();
    game.drawArrows();
};
window.onresize = function () {
    game.renderScene();
};


/***/ }),

/***/ "./src/levels/lvl4.json":
/*!******************************!*\
  !*** ./src/levels/lvl4.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"mapObjects":{"staticFields":{"Pillar":[[1,1],[11,1],[20,1],[1,14],[10,14],[20,14]],"FenceH":[[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1],[9,1],[10,1],[12,1],[13,1],[14,1],[15,1],[16,1],[17,1],[18,1],[19,1],[2,14],[3,14],[4,14],[5,14],[6,14],[7,14],[8,14],[9,14],[11,14],[12,14],[13,14],[14,14],[15,14],[16,14],[17,14],[18,14],[19,14]],"FenceV":[[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[20,2],[20,3],[20,4],[20,5],[20,6],[20,7],[20,8],[20,9],[20,10],[20,11],[20,12],[20,13],[11,2],[11,3],[11,4],[11,5],[11,6],[10,9],[10,10],[10,11],[10,12],[10,13]],"SlideRight":[[9,8]],"SlideLeft":[[13,8]],"Block":[[11,7],[10,8],[12,8]]},"mobileFields":{"HayBale":[[11,10]]},"mapArrows":{"Red":[{"coordinates":{"x":11,"y":9},"direction":"Right"}]},"goblet":{"coordinates":{"x":16,"y":3}}},"cows":[{"coordinates":{"x":5,"y":8},"direction":"Right","color":"Grey"},{"coordinates":{"x":13,"y":11},"direction":"Left","color":"Grey"}],"arrows":{"Red":{"Up":2}}}');

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRDtXQUN0RCxzQ0FBc0MsaUVBQWlFO1dBQ3ZHO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9Db25mLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL0dhbWUvRW50aXRpZXMvQXJyb3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9Db3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9GaWVsZC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0dvYmxldC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0hheUJhbGUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9SZW5kZXIvUmVuZGVyLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL1JlbmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDT05GID0ge1xyXG4gICAgTWFwOiB7XHJcbiAgICAgICAgd2lkdGg6IDIwLFxyXG4gICAgICAgIGhlaWdodDogMTRcclxuICAgIH0sXHJcbiAgICBBcnJvd3NUYWJsZToge1xyXG4gICAgICAgIHdpZHRoOiAzLFxyXG4gICAgICAgIGhlaWdodDogN1xyXG4gICAgfSxcclxuICAgIEltZ1BhdGg6IHtcclxuICAgICAgICBDb3dCcm93blVwOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dCcm93blVwLnN2Z1wiLFxyXG4gICAgICAgIENvd0Jyb3duUmlnaHQ6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0Nvd0Jyb3duUmlnaHQuc3ZnXCIsXHJcbiAgICAgICAgQ293QnJvd25Eb3duOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dCcm93bkRvd24uc3ZnXCIsXHJcbiAgICAgICAgQ293QnJvd25MZWZ0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dCcm93bkxlZnQuc3ZnXCIsXHJcbiAgICAgICAgQ293R3JleVVwOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dHcmV5VXAuc3ZnXCIsXHJcbiAgICAgICAgQ293R3JleVJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dHcmV5UmlnaHQuc3ZnXCIsXHJcbiAgICAgICAgQ293R3JleURvd246IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0Nvd0dyZXlEb3duLnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlMZWZ0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dHcmV5TGVmdC5zdmdcIixcclxuICAgICAgICBGZW5jZUg6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0ZlbmNlSC5zdmdcIixcclxuICAgICAgICBGZW5jZVY6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0ZlbmNlVi5zdmdcIixcclxuICAgICAgICBQaWxsYXI6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1BpbGxhci5zdmdcIixcclxuICAgICAgICBBcnJvd1JlZFVwOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd1JlZFVwLnN2Z1wiLFxyXG4gICAgICAgIEFycm93UmVkUmlnaHQ6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0Fycm93UmVkUmlnaHQuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dSZWREb3duOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd1JlZERvd24uc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dSZWRMZWZ0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd1JlZExlZnQuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dCbHVlVXA6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0Fycm93Qmx1ZVVwLnN2Z1wiLFxyXG4gICAgICAgIEFycm93Qmx1ZVJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVSaWdodC5zdmdcIixcclxuICAgICAgICBBcnJvd0JsdWVEb3duOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVEb3duLnN2Z1wiLFxyXG4gICAgICAgIEFycm93Qmx1ZUxlZnQ6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0Fycm93Qmx1ZUxlZnQuc3ZnXCIsXHJcbiAgICAgICAgR29ibGV0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Hb2JsZXQuc3ZnXCIsXHJcbiAgICAgICAgU2xpZGVVcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvU2xpZGVVcC5wbmdcIixcclxuICAgICAgICBTbGlkZVJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9TbGlkZVJpZ2h0LnBuZ1wiLFxyXG4gICAgICAgIFNsaWRlRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvU2xpZGVEb3duLnBuZ1wiLFxyXG4gICAgICAgIFNsaWRlTGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvU2xpZGVMZWZ0LnBuZ1wiLFxyXG4gICAgICAgIEJsb2NrOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9CbG9jay5wbmdcIixcclxuICAgICAgICBIYXlCYWxlOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9IYXlCYWxlLnBuZ1wiLFxyXG4gICAgICAgIEtleTogXCJhc3NldHMvc3ByaXRlcy9zdmcvS2V5LnBuZ1wiLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDT05GO1xyXG4iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9GaWVsZFwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIEFycm93Q29sb3IsIEVudGl0eU5hbWUsIENvb3JkaW5hdGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBGaWVsZCB7XHJcbiAgICBkaXJlY3Rpb246IERpcmVjdGlvbjtcclxuICAgIGNvbG9yOiBBcnJvd0NvbG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IEVudGl0eU5hbWUsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzLFxyXG4gICAgICAgIGRpcmVjdGlvbjogRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbG9yOiBBcnJvd0NvbG9yLFxyXG4gICAgICAgIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgY29vcmRpbmF0ZXMsIGZhbHNlLCBmYWxzZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmtlZEh0bWxFbGVtZW50ID0gbGlua2VkSHRtbEVsZW1lbnQ7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBDT05GLkltZ1BhdGhbdGhpcy5uYW1lXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBEaXJlY3Rpb24sIENvd0NvbG9yLCBFbnRpdHlOYW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ293IGV4dGVuZHMgRW50aXR5IHtcclxuICAgIHB1YmxpYyBjb29yZGluYXRlczogQ29vcmRpbmF0ZXM7XHJcbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb2xvcjogQ293Q29sb3I7XHJcbiAgICBwdWJsaWMgbGF5ZXI6IDEgfCAyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIG5hbWU6IEVudGl0eU5hbWUsXHJcbiAgICAgICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzLFxyXG4gICAgICAgIGRpcmVjdGlvbjogRGlyZWN0aW9uLFxyXG4gICAgICAgIGNvbG9yOiBDb3dDb2xvcixcclxuICAgICAgICBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XHJcbiAgICAgICAgdGhpcy5fZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IHRoaXMuZ2VuZXJhdGVJbWdVcmwoKTtcclxuICAgICAgICB0aGlzLmxheWVyID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpcmVjdGlvbigpOiBEaXJlY3Rpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkaXJlY3Rpb24oZGlyZWN0aW9uOiBEaXJlY3Rpb24pIHtcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSB0aGlzLmdlbmVyYXRlSW1nVXJsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVJbWdVcmwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gQ09ORi5JbWdQYXRoW2BDb3dHcmV5JHt0aGlzLl9kaXJlY3Rpb259YF07XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShkaXJlY3Rpb246IERpcmVjdGlvbiA9IHRoaXMuX2RpcmVjdGlvbikge1xyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlcy55ID0gTWF0aC5yb3VuZCgodGhpcy5jb29yZGluYXRlcy55IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9PSBcIlVwXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiVXBcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiUmlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXMueCA9IE1hdGgucm91bmQoKHRoaXMuY29vcmRpbmF0ZXMueCArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPT0gXCJSaWdodFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlJpZ2h0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKHRoaXMuY29vcmRpbmF0ZXMueSArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPT0gXCJEb3duXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IFwiRG93blwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKCh0aGlzLmNvb3JkaW5hdGVzLnggLSAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IFwiTGVmdFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkxlZnRcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiV3JvbmcgY293IGRpcmVjdGlvblwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRW50aXR5TmFtZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVudGl0eSB7XHJcbiAgICBuYW1lOiBFbnRpdHlOYW1lO1xyXG4gICAgaW1nVXJsITogc3RyaW5nO1xyXG4gICAgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IEVudGl0eU5hbWUsIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5saW5rZWRIdG1sRWxlbWVudCA9IGxpbmtlZEh0bWxFbGVtZW50O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBDT05GIGZyb20gJy4uLy4uL0NvbmYnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIEVudGl0eU5hbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZCBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb29yZGluYXRlczogQ29vcmRpbmF0ZXM7XHJcbiAgICBpbXBhc3NhYmxlOiBib29sZWFuOyAvLyB0cnVlIC0g0L3QtdC/0YDQvtGF0L7QtNC40LzRi9C5XHJcbiAgICBpbWdVcmw6IHN0cmluZztcclxuICAgIG1vdmFibGU6IGJvb2xlYW47IC8vIHRydWUgLSDQvNC+0LbQvdC+INC00LLQuNCz0LDRgtGMXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbmFtZTogRW50aXR5TmFtZSxcclxuICAgICAgICBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMsXHJcbiAgICAgICAgaW1wYXNzYWJsZSA9IHRydWUsXHJcbiAgICAgICAgbW92YWJsZSA9IGZhbHNlLFxyXG4gICAgICAgIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgICB0aGlzLmltcGFzc2FibGUgPSBpbXBhc3NhYmxlO1xyXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG1vdmFibGU7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBDT05GLkltZ1BhdGhbdGhpcy5uYW1lXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9GaWVsZFwiO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvYmxldCBleHRlbmRzIEZpZWxkIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoXCJHb2JsZXRcIiwgY29vcmRpbmF0ZXMsIGZhbHNlLCBmYWxzZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gQ09ORi5JbWdQYXRoLkdvYmxldDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBFbnRpdHlOYW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGF5QmFsZSBleHRlbmRzIEVudGl0eSB7XHJcbiAgICBjb29yZGluYXRlczogQ29vcmRpbmF0ZXM7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogRW50aXR5TmFtZSwgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzLCBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBsaW5rZWRIdG1sRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5jb29yZGluYXRlcyA9IGNvb3JkaW5hdGVzO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gQ09ORi5JbWdQYXRoLkhheUJhbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgQXJyb3cgfSBmcm9tICcuL0Fycm93J1xyXG5leHBvcnQgeyBDb3cgfSBmcm9tICcuL0NvdydcclxuZXhwb3J0IHsgRW50aXR5IH0gZnJvbSAnLi9FbnRpdHknXHJcbmV4cG9ydCB7IEZpZWxkIH0gZnJvbSAnLi9GaWVsZCdcclxuZXhwb3J0IHsgR29ibGV0IH0gZnJvbSAnLi9Hb2JsZXQnXHJcbmV4cG9ydCB7IEhheUJhbGUgfSBmcm9tICcuL0hheUJhbGUnIiwiaW1wb3J0IFJlbmRlciBmcm9tICcuLi9SZW5kZXInO1xyXG5pbXBvcnQgVUkgZnJvbSAnLi4vVUknO1xyXG5pbXBvcnQgeyBJTGV2ZWwsIElDb3cgfSBmcm9tICcuLi9JbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgU3RhdGljRmllbGRzLCBFbnRpdHlOYW1lLCBBcnJvd0NvbG9yLCBNYXBBcnJvdywgRGlyZWN0aW9uLCBDb29yZGluYXRlcyB9IGZyb20gJy4uL3R5cGVzJztcclxuaW1wb3J0IHsgRmllbGQsIEhheUJhbGUsIEFycm93LCBHb2JsZXQsIENvdyB9IGZyb20gXCIuL0VudGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICAgIGxvb3AhOiBOb2RlSlMuVGltZXI7XHJcbiAgICBzdGF0aWNGaWVsZHM6IEZpZWxkW10gPSBbXTtcclxuICAgIG1vYmlsZUZpZWxkczogSGF5QmFsZVtdID0gW107XHJcbiAgICBtYXBBcnJvd3M6IEFycm93W10gPSBbXTtcclxuICAgIGFjdGl2ZUZpZWxkcyE6IEZpZWxkW107XHJcbiAgICBnb2JsZXQhOiBHb2JsZXQ7XHJcbiAgICBjb3dzITogQ293W107XHJcbiAgICBtYXBGaWVsZHMhOiAoRmllbGQgfCBIYXlCYWxlKVtdO1xyXG4gICAgYXJyb3dzITogQXJyb3dbXTtcclxuICAgIHJlbmRlcjogUmVuZGVyO1xyXG4gICAgdWk6IFVJO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlbmRlcjogUmVuZGVyLCB1aTogVUkpIHtcclxuICAgICAgICB0aGlzLnJlbmRlciA9IHJlbmRlcjtcclxuICAgICAgICB0aGlzLnVpID0gdWk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZExldmVsKGxldmVsOiBJTGV2ZWwpIHtcclxuICAgICAgICBjb25zdCB7bWFwT2JqZWN0czoge3N0YXRpY0ZpZWxkcywgbW9iaWxlRmllbGRzLCBtYXBBcnJvd3MsIGFjdGl2ZUZpZWxkcywgZ29ibGV0fSwgY293cywgYXJyb3dzfTogSUxldmVsID0gbGV2ZWw7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIuY3JlYXRlQ293SHRtbEVsZW1lbnRzKGNvd3MpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmNyZWF0ZU1vYmlsZUZpZWxkc0h0bWxFbGVtZW50cyhtb2JpbGVGaWVsZHMpO1xyXG4gICAgICAgIC8vIG1hcCBmaWVsZHNcclxuICAgICAgICB0aGlzLnN0YXRpY0ZpZWxkcyA9IHRoaXMuaW5pdFN0YXRpY0ZpZWxkcyhzdGF0aWNGaWVsZHMpO1xyXG4gICAgICAgIHRoaXMubW9iaWxlRmllbGRzID0gdGhpcy5pbml0TW9iaWxlRmllbGRzKG1vYmlsZUZpZWxkcyk7XHJcbiAgICAgICAgdGhpcy5tYXBBcnJvd3MgPSB0aGlzLmluaXRNYXBBcnJvd3MobWFwQXJyb3dzKTtcclxuICAgICAgICAvLyB0aGlzLmFjdGl2ZUZpZWxkcyA9IHRoaXMuaW5pdEFjdGl2ZUZpZWxkcyhhY3RpdmVGaWVsZHMpO1xyXG4gICAgICAgIHRoaXMuZ29ibGV0ID0gdGhpcy5pbml0R29ibGV0KGdvYmxldCk7XHJcbiAgICAgICAgdGhpcy5tYXBGaWVsZHMgPSB0aGlzLmdldE1hcEZpZWxkcygpO1xyXG4gICAgICAgIC8vIGdhbWUgb2JqZWN0c1xyXG4gICAgICAgIHRoaXMuY293cyA9IHRoaXMuaW5pdENvd3MoY293cyk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3MgPSB0aGlzLmluaXRBcnJvd3MoYXJyb3dzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0U3RhdGljRmllbGRzKHN0YXRpY0ZpZWxkcz86IFN0YXRpY0ZpZWxkcyk6IEZpZWxkW10ge1xyXG4gICAgICAgIGlmIChzdGF0aWNGaWVsZHMpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGljRmllbGRzQXJyYXk6IEZpZWxkW10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC5rZXlzKHN0YXRpY0ZpZWxkcykgYXMgRW50aXR5TmFtZVtdKS5mb3JFYWNoKChmaWVsZE5hbWU6IEVudGl0eU5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICBzdGF0aWNGaWVsZHNbZmllbGROYW1lXT8uZm9yRWFjaCgoZmllbGRDb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNGaWVsZHNBcnJheS5wdXNoKG5ldyBGaWVsZChmaWVsZE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt4OiBmaWVsZENvb3JkaW5hdGVzWzBdLCB5OiBmaWVsZENvb3JkaW5hdGVzWzFdfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuZ2FtZVRhYmxlW2ZpZWxkQ29vcmRpbmF0ZXNbMV0gLSAxXVtmaWVsZENvb3JkaW5hdGVzWzBdIC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0aWNGaWVsZHNBcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNb2JpbGVGaWVsZHMobW9iaWxlRmllbGRzPzogSUxldmVsWydtYXBPYmplY3RzJ11bJ21vYmlsZUZpZWxkcyddKTogSGF5QmFsZVtdIHtcclxuICAgICAgICBpZiAobW9iaWxlRmllbGRzKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiAoT2JqZWN0LmtleXMobW9iaWxlRmllbGRzKSBhcyBFbnRpdHlOYW1lW10pLnJlZHVjZSgobW9iaWxlRmllbGRzQXJyOiBIYXlCYWxlW10sIG9iak5hbWU6IEVudGl0eU5hbWUpID0+XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVGaWVsZHNBcnIuY29uY2F0KG1vYmlsZUZpZWxkc1tvYmpOYW1lXT8ubWFwKChjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBuZXcgSGF5QmFsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge3g6IGNvb3JkaW5hdGVzWzBdLCB5OiBjb29yZGluYXRlc1sxXX0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyLm1vYmlsZUZpZWxkc1tjb3VudCsrXSBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICkgPz8gW11cclxuICAgICAgICAgICAgICAgICksIFtdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRNYXBBcnJvd3MobWFwQXJyb3dzPzogSUxldmVsWydtYXBPYmplY3RzJ11bJ21hcEFycm93cyddKTogQXJyb3dbXSB7XHJcbiAgICAgICAgaWYgKG1hcEFycm93cykge1xyXG4gICAgICAgICAgICBjb25zdCBtYXBBcnJvd3NBcnJheTogQXJyb3dbXSA9IFtdO1xyXG4gICAgICAgICAgICAoT2JqZWN0LmtleXMobWFwQXJyb3dzKSBhcyBBcnJvd0NvbG9yW10pLmZvckVhY2goKGFycm93Q29sb3I6IEFycm93Q29sb3IpID0+XHJcbiAgICAgICAgICAgICAgICBtYXBBcnJvd3NbYXJyb3dDb2xvcl0/LmZvckVhY2goKGFycm93OiBNYXBBcnJvdykgPT5cclxuICAgICAgICAgICAgICAgICAgICBtYXBBcnJvd3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJyb3coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXJyb3cke2Fycm93Q29sb3IgKyBhcnJvdy5kaXJlY3Rpb259YCBhcyBFbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cuY29vcmRpbmF0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvdy5kaXJlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd0NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aS5nYW1lVGFibGVbYXJyb3cuY29vcmRpbmF0ZXMueSAtIDFdW2Fycm93LmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiBtYXBBcnJvd3NBcnJheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRDb3dzKGNvd3M6IElMZXZlbFsnY293cyddKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhjb3dzKS5tYXAoKGNvdzogSUNvdykgPT5cclxuICAgICAgICAgICAgbmV3IENvdyhcclxuICAgICAgICAgICAgICAgIGBDb3cke2Nvdy5jb2xvciArIGNvdy5kaXJlY3Rpb259YCBhcyBFbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgY293LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgY293LmRpcmVjdGlvbixcclxuICAgICAgICAgICAgICAgIGNvdy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyLmNvd0h0bWxFbGVtZW50c1tjb3VudCsrXVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0QXJyb3dzKGFycm93czogSUxldmVsWydhcnJvd3MnXSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgYXJyb3dzQXJyYXk6IEFycm93W10gPSBbXTtcclxuICAgICAgICAoT2JqZWN0LmtleXMoYXJyb3dzKSBhcyBBcnJvd0NvbG9yW10pLmZvckVhY2goKGFycm93Q29sb3I6IEFycm93Q29sb3IpID0+XHJcbiAgICAgICAgICAgIChPYmplY3Qua2V5cyhhcnJvd3NbYXJyb3dDb2xvcl0gYXMgeyBbayBpbiBEaXJlY3Rpb25dOiBudW1iZXIgfSkgYXMgRGlyZWN0aW9uW10pLmZvckVhY2goKGFycm93RGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFycm93c1thcnJvd0NvbG9yXSBhcyB7IFtrIGluIERpcmVjdGlvbl06IG51bWJlciB9KVthcnJvd0RpcmVjdGlvbl07IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFycm93c0FycmF5LnB1c2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBBcnJvdyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBBcnJvdyR7YXJyb3dDb2xvciArIGFycm93RGlyZWN0aW9ufWAgYXMgRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt4OiAwLCB5OiAwfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93RGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuYXJyb3dzVGFibGUuZmxhdDxIVE1MRWxlbWVudFtdW10+KDEpW2NvdW50KytdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYXJyb3dzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyppbml0QWN0aXZlRmllbGRzKGZpZWxkczogSUxldmVsWydtYXBPYmplY3RzJ11bXCJhY3RpdmVGaWVsZHNcIl0gfCB1bmRlZmluZWQpOiBGaWVsZFtdIHtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZUZpZWxkc0FycjogRmllbGRbXSA9IFtdO1xyXG4gICAgICAgICAgICAoT2JqZWN0LmtleXMoZmllbGRzKSBhcyBFbnRpdHlOYW1lW10pLmZvckVhY2goKGZpZWxkTmFtZTogRW50aXR5TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzW2ZpZWxkTmFtZV0/LmZvckVhY2goKGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH0qL1xyXG5cclxuICAgIGluaXRHb2JsZXQoZ29ibGV0OiBJTGV2ZWxbJ21hcE9iamVjdHMnXVsnZ29ibGV0J10pOiBHb2JsZXQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR29ibGV0KGdvYmxldC5jb29yZGluYXRlcywgdGhpcy51aS5nYW1lVGFibGVbZ29ibGV0LmNvb3JkaW5hdGVzLnkgLSAxXVtnb2JsZXQuY29vcmRpbmF0ZXMueCAtIDFdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsTWFwT2JqZWN0cygpOiAoRmllbGQgfCBDb3cgfCBIYXlCYWxlKVtdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRpY0ZpZWxkcyxcclxuICAgICAgICAgICAgLi4udGhpcy5tb2JpbGVGaWVsZHMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMubWFwQXJyb3dzLFxyXG4gICAgICAgICAgICB0aGlzLmdvYmxldCxcclxuICAgICAgICAgICAgLi4udGhpcy5jb3dzXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXBGaWVsZHMoKTogKEZpZWxkIHwgSGF5QmFsZSlbXSB7XHJcbiAgICAgICAgY29uc3QgbWFwRmllbGRzOiAoRmllbGQgfCBIYXlCYWxlKVtdID0gWy4uLnRoaXMuc3RhdGljRmllbGRzLCB0aGlzLmdvYmxldF07XHJcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlRmllbGRzKSB7XHJcbiAgICAgICAgICAgIG1hcEZpZWxkcy5jb25jYXQoLi4udGhpcy5tb2JpbGVGaWVsZHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hcEFycm93cykge1xyXG4gICAgICAgICAgICBtYXBGaWVsZHMuY29uY2F0KC4uLnRoaXMubWFwQXJyb3dzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbWVPYmplY3RzKCk6IChBcnJvdyB8IENvdylbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4udGhpcy5jb3dzLFxyXG4gICAgICAgICAgICAuLi50aGlzLm1hcEFycm93c1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJyb3dzKCk6IEFycm93W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycm93cztcclxuICAgIH1cclxuXHJcbiAgICBmaW5kRmllbGRCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyk6IEZpZWxkIHwgSGF5QmFsZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnN0YXRpY0ZpZWxkcywgLi4udGhpcy5tb2JpbGVGaWVsZHNdLmZpbmQoKGZpZWxkOiBGaWVsZCB8IEhheUJhbGUpID0+XHJcbiAgICAgICAgICAgIGZpZWxkLmNvb3JkaW5hdGVzLnggPT09IGNvb3JkaW5hdGVzLnggJiYgZmllbGQuY29vcmRpbmF0ZXMueSA9PT0gY29vcmRpbmF0ZXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEZpZWxkQnlIdG1sRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcEZpZWxkcy5maW5kKChmaWVsZDogRmllbGQgfCBIYXlCYWxlKSA9PlxyXG4gICAgICAgICAgICBodG1sRWxlbWVudCA9PT0gZmllbGQ/LmxpbmtlZEh0bWxFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kR2FtZU9iamVjdEJ5SHRtbEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogRmllbGQgfCBDb3cgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEdhbWVPYmplY3RzKCkuZmluZCgob2JqOiBBcnJvdyB8IENvdykgPT5cclxuICAgICAgICAgICAgaHRtbEVsZW1lbnQgPT09IChvYmo/LmxpbmtlZEh0bWxFbGVtZW50IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFycm93QnlIdG1sRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBBcnJvdyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzLmZpbmQoKGFycm93OiBBcnJvdykgPT4gYXJyb3cubGlua2VkSHRtbEVsZW1lbnQgPT09IGh0bWxFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QXJyb3dzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXdBcnJvd3ModGhpcy5hcnJvd3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXdTY2VuZShcclxuICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZHMsXHJcbiAgICAgICAgICAgIHttb2JpbGVGaWVsZHM6IHRoaXMubW9iaWxlRmllbGRzLCBjb3dzOiB0aGlzLmNvd3N9LFxyXG4gICAgICAgICAgICB0aGlzLm1hcEFycm93cywgdGhpcy5nb2JsZXRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyU2NlbmUoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIuY2xlYXJTY2VuZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQXJyb3dzKGNvdzogQ293KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMubWFwQXJyb3dzKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5tYXBBcnJvd3MpLmZvckVhY2goKGFycm93OiBBcnJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdy5jb29yZGluYXRlcy54ID09PSBhcnJvdy5jb29yZGluYXRlcy54ICYmIGNvdy5jb29yZGluYXRlcy55ID09PSBhcnJvdy5jb29yZGluYXRlcy55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY293LmRpcmVjdGlvbiA9IGFycm93LmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcEFycm93cy5zcGxpY2UodGhpcy5tYXBBcnJvd3MuaW5kZXhPZihhcnJvdyksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tHb2JsZXQoY293OiBDb3cpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gY293LmNvbG9yID09PSBcIkdyZXlcIiAmJlxyXG4gICAgICAgICAgICB0aGlzLmdvYmxldC5jb29yZGluYXRlcy54ID09PSBjb3cuY29vcmRpbmF0ZXMueCAmJlxyXG4gICAgICAgICAgICB0aGlzLmdvYmxldC5jb29yZGluYXRlcy55ID09PSBjb3cuY29vcmRpbmF0ZXMueTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydEdhbWUoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmxvb3ApIHtcclxuICAgICAgICAgICAgdGhpcy5sb29wID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRGaWVsZDogRmllbGQgfCBIYXlCYWxlIHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzVmljdG9yeSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvd3MpLmZvckVhY2goKGNvdzogQ293KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIoY293LmNvb3JkaW5hdGVzLngpICYmIE51bWJlci5pc0ludGVnZXIoY293LmNvb3JkaW5hdGVzLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tBcnJvd3MoY293KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWaWN0b3J5ID0gdGhpcy5jaGVja0dvYmxldChjb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVmljdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEZpZWxkOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQ/Lm5hbWUgPT09IFwiU2xpZGVVcFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkPy5uYW1lID09PSBcIlNsaWRlUmlnaHRcIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZD8ubmFtZSA9PT0gXCJTbGlkZURvd25cIiB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZD8ubmFtZSA9PT0gXCJTbGlkZUxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293LmxheWVyID0gY293LmxheWVyID09PSAxID8gMiA6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGNvdy5kaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiVXBcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY293LmNvb3JkaW5hdGVzLnkgLSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkLm5hbWUgPT09IFwiU2xpZGVVcFwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBjb3cuY29vcmRpbmF0ZXMueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdy5sYXllciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQubmFtZSA9PT0gXCJTbGlkZVJpZ2h0XCIpIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueCArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY293LmNvb3JkaW5hdGVzLnkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkLm5hbWUgPT09IFwiU2xpZGVEb3duXCIpIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy55ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnkgKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY293LmNvb3JkaW5hdGVzLnggLSAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY293LmNvb3JkaW5hdGVzLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQubmFtZSA9PT0gXCJTbGlkZUxlZnRcIikgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueCAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmRHYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllPVSBXSU4hISFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBGSVhNRTogZGVsZXRlIHN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dEZpZWxkOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY293LmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlVwXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY293LmNvb3JkaW5hdGVzLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55IC0gMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy55ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnkgLSAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiUmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBjb3cuY29vcmRpbmF0ZXMueCArIDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueCArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogY293LmNvb3JkaW5hdGVzLngsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IGNvdy5jb29yZGluYXRlcy55ICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnkgKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IGNvdy5jb29yZGluYXRlcy54IC0gMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogY293LmNvb3JkaW5hdGVzLnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueCA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy54IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNjZW5lKCk7XHJcbiAgICAgICAgICAgIH0sIDQwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5kR2FtZSgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMubG9vcCk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vR2FtZSc7IiwiaW1wb3J0IFVJIGZyb20gJy4uL1VJJztcclxuaW1wb3J0IHsgSUNvdywgSUxldmVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQXJyb3csIEZpZWxkLCBHb2JsZXQsIEhheUJhbGUsIENvdyB9IGZyb20gXCIuLi9HYW1lL0VudGl0aWVzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXIge1xyXG4gICAgaHRtbEdhbWVUYWJsZTogSFRNTEVsZW1lbnQ7XHJcbiAgICBodG1sQXJyb3dzVGFibGU6IEhUTUxFbGVtZW50O1xyXG4gICAgZ2FtZVRhYmxlOiBIVE1MRWxlbWVudFtdW107XHJcbiAgICBhcnJvd3NUYWJsZTogSFRNTEVsZW1lbnRbXVtdO1xyXG4gICAgY293SHRtbEVsZW1lbnRzITogSFRNTEVsZW1lbnRbXTtcclxuICAgIG1vYmlsZUZpZWxkczogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVpOiBVSSkge1xyXG4gICAgICAgIHRoaXMuaHRtbEdhbWVUYWJsZSA9IHVpLmh0bWxHYW1lVGFibGU7XHJcbiAgICAgICAgdGhpcy5odG1sQXJyb3dzVGFibGUgPSB1aS5odG1sQXJyb3dzVGFibGU7XHJcbiAgICAgICAgdGhpcy5nYW1lVGFibGUgPSB1aS5nYW1lVGFibGU7XHJcbiAgICAgICAgdGhpcy5hcnJvd3NUYWJsZSA9IHVpLmFycm93c1RhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvd0h0bWxFbGVtZW50cyhjb3dzOiBJTGV2ZWxbJ2Nvd3MnXSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgY29uc3QgaHRtbEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhjb3dzKS5mb3JFYWNoKChjb3c6IElDb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGl2Q293ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2Q293LmNsYXNzTmFtZSA9IGBjb3ctd3JhcHBlciBjb3ctJHtjb3VudCsrfWA7XHJcbiAgICAgICAgICAgIGRpdkNvdy5zdHlsZS50b3AgPSBgJHsodGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcclxuICAgICAgICAgICAgICAgIC5oZWlnaHQgKiAoY293LmNvb3JkaW5hdGVzLnkgLSAxKX1weGA7XHJcbiAgICAgICAgICAgIGRpdkNvdy5zdHlsZS5sZWZ0ID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcbiAgICAgICAgICAgICAgICAud2lkdGggKiAoY293LmNvb3JkaW5hdGVzLnggLSAxKX1weGA7XHJcbiAgICAgICAgICAgIGRpdkNvdy5zdHlsZS53aWR0aCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudFdpZHRofXB4YDtcclxuICAgICAgICAgICAgZGl2Q293LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgIGRpdkNvdy5zdHlsZS56SW5kZXggPSAnMzAnO1xyXG4gICAgICAgICAgICBodG1sRWxlbWVudHMucHVzaChkaXZDb3cpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtdGFibGUtd3JhcHBlclwiKT8uYXBwZW5kQ2hpbGQoZGl2Q293KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvd0h0bWxFbGVtZW50cyA9IGh0bWxFbGVtZW50cztcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNb2JpbGVGaWVsZHNIdG1sRWxlbWVudHMoZmllbGRzOiBJTGV2ZWxbJ21hcE9iamVjdHMnXVsnbW9iaWxlRmllbGRzJ10gfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGh0bWxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgICAgICAoT2JqZWN0LnZhbHVlcyhmaWVsZHMpKS5mb3JFYWNoKChjb29yZGluYXRlc0FycjogW251bWJlciwgbnVtYmVyXVtdKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlc0Fyci5mb3JFYWNoKChjb29yZGluYXRlczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpdkZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXZGaWVsZC5jbGFzc05hbWUgPSBgbW9iaWxlLWZpZWxkYDtcclxuICAgICAgICAgICAgICAgICAgICBkaXZGaWVsZC5zdHlsZS50b3AgPSBgJHsodGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICogKGNvb3JkaW5hdGVzWzBdIC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkZpZWxkLnN0eWxlLmxlZnQgPSBgJHsodGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAoY29vcmRpbmF0ZXNbMV0gLSAxKX1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBkaXZGaWVsZC5zdHlsZS56SW5kZXggPSAnMjAnO1xyXG4gICAgICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50cy5wdXNoKGRpdkZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtdGFibGUtd3JhcHBlclwiKT8uYXBwZW5kQ2hpbGQoZGl2RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMubW9iaWxlRmllbGRzID0gaHRtbEVsZW1lbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3RhdGljT2JqZWN0cyhmaWVsZHM6IEZpZWxkW10sIG1hcEFycm93czogQXJyb3dbXSwgZ29ibGV0OiBHb2JsZXQpIHtcclxuICAgICAgICBPYmplY3QudmFsdWVzKGZpZWxkcykuZm9yRWFjaCgoZmllbGQ6IEZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW0gPSAodGhpcy5nYW1lVGFibGVbZmllbGQuY29vcmRpbmF0ZXMueSAtIDFdW2ZpZWxkLmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiLi4vLi4vJHtmaWVsZC5pbWdVcmx9XCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdGA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIE9iamVjdC52YWx1ZXMobWFwQXJyb3dzKS5mb3JFYWNoKChhcnJvdzogQXJyb3cpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbSA9IHRoaXMuZ2FtZVRhYmxlW2Fycm93LmNvb3JkaW5hdGVzLnkgLSAxXVthcnJvdy5jb29yZGluYXRlcy54IC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7YXJyb3cuaW1nVXJsfVwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXRgO1xyXG4gICAgICAgICAgICBlbGVtLnN0eWxlLnpJbmRleCA9ICcxMCc7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGdvYmxldEVsZW0gPSAodGhpcy5nYW1lVGFibGVbZ29ibGV0LmNvb3JkaW5hdGVzLnkgLSAxXVtnb2JsZXQuY29vcmRpbmF0ZXMueCAtIDFdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgZ29ibGV0RWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7Z29ibGV0LmltZ1VybH1cIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0YDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3R2FtZU9iamVjdHMoZ2FtZU9iamVjdHM6IHsgbW9iaWxlRmllbGRzPzogSGF5QmFsZVtdLCBjb3dzOiBDb3dbXSB9KSB7XHJcbiAgICAgICAgaWYgKGdhbWVPYmplY3RzLm1vYmlsZUZpZWxkcykge1xyXG4gICAgICAgICAgICBnYW1lT2JqZWN0cy5tb2JpbGVGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IEhheUJhbGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IGAkeyh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKiAoZmllbGQuY29vcmRpbmF0ZXMueSAtIDEpfXB4YDtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHsodGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKSBhcyBIVE1MRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggKiAoZmllbGQuY29vcmRpbmF0ZXMueCAtIDEpfXB4YDtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgZmllbGQubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgICAgIGZpZWxkLmxpbmtlZEh0bWxFbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKFwiLi4vLi4vJHtmaWVsZC5pbWdVcmx9XCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdGA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhnYW1lT2JqZWN0cy5jb3dzKS5mb3JFYWNoKChjb3c6IENvdykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NUb3AgPSBjb3cubGF5ZXIgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb3cuY29vcmRpbmF0ZXMueSAtIDEpIC0gMzAgOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb3cuY29vcmRpbmF0ZXMueSAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NMZWZ0ID0gKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGNvdy5jb29yZGluYXRlcy54IC0gMSk7XHJcbiAgICAgICAgICAgIGNvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS50b3AgPSBgJHtjc3NUb3B9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2Nzc0xlZnR9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGNvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2Nvdy5pbWdVcmx9XCIpIG5vLXJlcGVhdCBjZW50ZXJgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdBcnJvd3MoYXJyb3dzOiBBcnJvd1tdKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFycm93c1RhYmxlKCk7XHJcbiAgICAgICAgYXJyb3dzLmZvckVhY2goKGFycm93OiBBcnJvdykgPT4ge1xyXG4gICAgICAgICAgICBhcnJvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7YXJyb3cuaW1nVXJsfVwiKSBuby1yZXBlYXQgY2VudGVyYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVRhYmxlLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKGZpZWxkOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGZpZWxkLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFycm93c1RhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaChmaWVsZCA9PlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlQXJyb3dzVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd3NUYWJsZS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKHRkID0+IHtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1NjZW5lKFxyXG4gICAgICAgIHN0YXRpY0ZpZWxkczogRmllbGRbXSxcclxuICAgICAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICAgICAgICBtb2JpbGVGaWVsZHM/OiBIYXlCYWxlW10sXHJcbiAgICAgICAgICAgIGNvd3M6IENvd1tdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXBBcnJvd3M6IEFycm93W10sXHJcbiAgICAgICAgZ29ibGV0OiBHb2JsZXRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZHJhd1N0YXRpY09iamVjdHMoc3RhdGljRmllbGRzLCBtYXBBcnJvd3MsIGdvYmxldCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R2FtZU9iamVjdHMoZ2FtZU9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVBcnJvd3NUYWJsZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1JlbmRlcic7IiwiaW1wb3J0IENPTkYgZnJvbSAnLi9Db25mJztcclxuaW1wb3J0IHsgQXJyb3cgfSBmcm9tIFwiLi9HYW1lL0VudGl0aWVzXCI7XHJcbmltcG9ydCB7IGdhbWUsIHN0YXJ0R2FtZSwgZW5kR2FtZSB9IGZyb20gJy4vaW5kZXgnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xyXG4gICAgaHRtbEdhbWVUYWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIGh0bWxBcnJvd3NUYWJsZTogSFRNTFRhYmxlRWxlbWVudDtcclxuICAgIGdhbWVUYWJsZTogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXVtdO1xyXG4gICAgYXJyb3dzVGFibGU6IEhUTUxUYWJsZUNlbGxFbGVtZW50W11bXTtcclxuICAgIHNlbGVjdGVkSXRlbTogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIG1vdXNlWCE6IG51bWJlcjtcclxuICAgIG1vdXNlWSE6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lQ29udGFpbmVyQ3NzU2VsZWN0b3I6IHN0cmluZywgYXJyb3dzVGFibGVDc3NTZWxlY3Rvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5odG1sR2FtZVRhYmxlID0gdGhpcy5jcmVhdGVHYW1lVGFibGUoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGdhbWVDb250YWluZXJDc3NTZWxlY3Rvcik/LmFwcGVuZENoaWxkKHRoaXMuaHRtbEdhbWVUYWJsZSk7XHJcbiAgICAgICAgdGhpcy5odG1sQXJyb3dzVGFibGUgPSB0aGlzLmNyZWF0ZUFycm93c1RhYmxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcnJvd3NUYWJsZUNzc1NlbGVjdG9yKT8uYXBwZW5kQ2hpbGQodGhpcy5odG1sQXJyb3dzVGFibGUpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRhYmxlID0gdGhpcy5odG1sVGFibGVUb0FycmF5KHRoaXMuaHRtbEdhbWVUYWJsZSk7XHJcbiAgICAgICAgdGhpcy5hcnJvd3NUYWJsZSA9IHRoaXMuaHRtbFRhYmxlVG9BcnJheSh0aGlzLmh0bWxBcnJvd3NUYWJsZSk7XHJcblxyXG4gICAgICAgIC8vIEV2ZW50TGlzdGVuZXJzXHJcbiAgICAgICAgLy8gQnV0dG9uc1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0YXJ0LWdhbWUtYnV0dG9uXCIpIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xyXG4gICAgICAgICAgICBzdGFydEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZW5kLWdhbWUtYnV0dG9uXCIpIGFzIEhUTUxFbGVtZW50KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVuZEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnRvcCA9IGAkey10aGlzLm1vdXNlWSArIGUuY2xpZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5sZWZ0ID0gYCR7LXRoaXMubW91c2VYICsgZS5jbGllbnRYfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZ2FtZS1maWVsZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdhbWUuZmluZEZpZWxkQnlIdG1sRWxlbWVudChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdhbWUuZmluZEdhbWVPYmplY3RCeUh0bWxFbGVtZW50KGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQvNC+0LbQvdC+INC/0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0L7Qu9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHN0ciA9PiBzdHIubWF0Y2goL14oeHx5KS1cXGQrJC9nKSkubWFwKHN0ciA9PiBOdW1iZXIoc3RyLnNsaWNlKDIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycm93OiBBcnJvdyB8IHVuZGVmaW5lZCA9IGdhbWUuZmluZEFycm93QnlIdG1sRWxlbWVudCh0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEFycm93OiBBcnJvdyB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93ID0gZ2FtZS5hcnJvd3Muc3BsaWNlKGdhbWUuYXJyb3dzLmluZGV4T2YoYXJyb3cpLCAxKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUubWFwQXJyb3dzLnB1c2goc2VsZWN0ZWRBcnJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93ID0gZ2FtZS5tYXBBcnJvd3MuZmluZCgoYXJyb3c6IEFycm93KSA9PiB0aGlzLnNlbGVjdGVkSXRlbSA9PT0gYXJyb3cubGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmNvb3JkaW5hdGVzLnggPSBjb29yZGluYXRlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueSA9IGNvb3JkaW5hdGVzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdy5saW5rZWRIdG1sRWxlbWVudCA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmxpbmtlZEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYXJyb3ctZmllbGRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvdyA9IGdhbWUubWFwQXJyb3dzLmZpbmQoYXJyb3cgPT4gdGhpcy5zZWxlY3RlZEl0ZW0gPT09IGFycm93LmxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRBcnJvdyA9IGdhbWUubWFwQXJyb3dzLnNwbGljZShnYW1lLm1hcEFycm93cy5pbmRleE9mKGFycm93KSwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cubGlua2VkSHRtbEVsZW1lbnQgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmFycm93cy5wdXNoKHNlbGVjdGVkQXJyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmRyYXdBcnJvd3MoKTtcclxuICAgICAgICAgICAgICAgIGdhbWUucmVuZGVyU2NlbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWxUYWJsZVRvQXJyYXkoaHRtbFRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXVtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShodG1sVGFibGUucm93cykubWFwKChyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpID0+IEFycmF5LmZyb20ocm93LmNlbGxzKSk7XHJcbiAgICAgICAgLy8g0L7QtNC90L7QvNC10YDQvdGL0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgLy8gcmV0dXJuIFsuLi5odG1sVGFibGUucm93c10ucmVkdWNlKChjZWxsczogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXSwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KSA9PiBjZWxscy5jb25jYXQoWy4uLnJvdy5jZWxsc10pLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZVRhYmxlKCk6IEhUTUxUYWJsZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRhYmxlLmlkID0gXCJnYW1lLXRhYmxlXCI7XHJcbiAgICAgICAgY29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT05GLk1hcC5oZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDT05GLk1hcC53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gYGdhbWUtZmllbGQgeC0ke2ogKyAxfSB5LSR7aSArIDF9YDtcclxuICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFycm93c1RhYmxlKCkge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRhYmxlLmlkID0gXCJ1aS10YWJsZVwiO1xyXG4gICAgICAgIGNvbnN0IHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQ09ORi5BcnJvd3NUYWJsZS5oZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDT05GLkFycm93c1RhYmxlLndpZHRoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIGRpdi5jbGFzc05hbWUgPSBgYXJyb3ctZmllbGQgeC0ke2ogKyAxfSB5LSR7aSArIDF9YDtcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLnRvcCA9IFwiMFwiO1xyXG4gICAgICAgICAgICAgICAgZGl2LnN0eWxlLmxlZnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Qm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRCb2R5KTtcclxuICAgICAgICByZXR1cm4gdGFibGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vUmVuZGVyJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuXHJcbmltcG9ydCB7IElMZXZlbCB9IGZyb20gXCIuL0ludGVyZmFjZXNcIjtcclxuXHJcbmltcG9ydCAqIGFzIGx2bDEgZnJvbSAnLi9sZXZlbHMvbHZsMS5qc29uJztcclxuaW1wb3J0ICogYXMgbHZsMiBmcm9tICcuL2xldmVscy9sdmwyLmpzb24nO1xyXG5pbXBvcnQgKiBhcyBsdmw0IGZyb20gJy4vbGV2ZWxzL2x2bDQuanNvbic7XHJcblxyXG5jb25zdCB1aTogVUkgPSBuZXcgVUkoXCIjZ2FtZS10YWJsZS13cmFwcGVyXCIsIFwiI3VpLXRhYmxlLXdyYXBwZXJcIik7XHJcbmNvbnN0IHJlbmRlcjogUmVuZGVyID0gbmV3IFJlbmRlcih1aSk7XHJcbi8vIEZJWE1FOiBkZWxldGUgZXhwb3J0XHJcbmV4cG9ydCBjb25zdCBnYW1lOiBHYW1lID0gbmV3IEdhbWUocmVuZGVyLCB1aSk7XHJcblxyXG5kb2N1bWVudC5vbmRyYWdzdGFydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xyXG4gICAgZ2FtZS5zdGFydEdhbWUoKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVuZEdhbWUoKSB7XHJcbiAgICBnYW1lLmVuZEdhbWUoKTtcclxufVxyXG5cclxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcclxuICAgIGdhbWUubG9hZExldmVsKGx2bDQgYXMgSUxldmVsKTtcclxuICAgIGdhbWUucmVuZGVyU2NlbmUoKTtcclxuICAgIGdhbWUuZHJhd0Fycm93cygpO1xyXG59XHJcblxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICBnYW1lLnJlbmRlclNjZW5lKCk7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsInZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiA/IChvYmopID0+IChPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqKSkgOiAob2JqKSA9PiAob2JqLl9fcHJvdG9fXyk7XG52YXIgbGVhZlByb3RvdHlwZXM7XG4vLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4vLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8vIG1vZGUgJiAxNjogcmV0dXJuIHZhbHVlIHdoZW4gaXQncyBQcm9taXNlLWxpa2Vcbi8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbl9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG5cdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IHRoaXModmFsdWUpO1xuXHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuXHRpZih0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlKSB7XG5cdFx0aWYoKG1vZGUgJiA0KSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG5cdFx0aWYoKG1vZGUgJiAxNikgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWx1ZTtcblx0fVxuXHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuXHR2YXIgZGVmID0ge307XG5cdGxlYWZQcm90b3R5cGVzID0gbGVhZlByb3RvdHlwZXMgfHwgW251bGwsIGdldFByb3RvKHt9KSwgZ2V0UHJvdG8oW10pLCBnZXRQcm90byhnZXRQcm90byldO1xuXHRmb3IodmFyIGN1cnJlbnQgPSBtb2RlICYgMiAmJiB2YWx1ZTsgdHlwZW9mIGN1cnJlbnQgPT0gJ29iamVjdCcgJiYgIX5sZWFmUHJvdG90eXBlcy5pbmRleE9mKGN1cnJlbnQpOyBjdXJyZW50ID0gZ2V0UHJvdG8oY3VycmVudCkpIHtcblx0XHRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhjdXJyZW50KS5mb3JFYWNoKChrZXkpID0+IChkZWZba2V5XSA9ICgpID0+ICh2YWx1ZVtrZXldKSkpO1xuXHR9XG5cdGRlZlsnZGVmYXVsdCddID0gKCkgPT4gKHZhbHVlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBkZWYpO1xuXHRyZXR1cm4gbnM7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==