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
                            var currentField = _this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y });
                            if ((currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideUp" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideRight" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideDown" ||
                                (currentField === null || currentField === void 0 ? void 0 : currentField.name) === "SlideLeft") {
                                cow.layer = cow.layer === 1 ? 2 : 1;
                            }
                            switch (cow.direction) {
                                case "Up":
                                    nextField = _this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
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
                                    nextField = _this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y });
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
                                    nextField = _this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
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
                                    nextField = _this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y });
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
                                nextField_1 = _this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y - 1 });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.y = Math.round((nextField_1.coordinates.y - 0.1) * 100) / 100;
                                }
                                break;
                            case "Right":
                                nextField_1 = _this.findFieldByCoordinates({ x: cow.coordinates.x + 1, y: cow.coordinates.y });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.x = Math.round((nextField_1.coordinates.x + 0.1) * 100) / 100;
                                }
                                break;
                            case "Down":
                                nextField_1 = _this.findFieldByCoordinates({ x: cow.coordinates.x, y: cow.coordinates.y + 1 });
                                if (nextField_1 instanceof _Entities__WEBPACK_IMPORTED_MODULE_0__.HayBale) {
                                    nextField_1.coordinates.x = Math.round((nextField_1.coordinates.y + 0.1) * 100) / 100;
                                }
                                break;
                            case "Left":
                                nextField_1 = _this.findFieldByCoordinates({ x: cow.coordinates.x - 1, y: cow.coordinates.y });
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
            divCow.style.top = _this.htmlGameTable.querySelector("td").getBoundingClientRect().height * (cow.coordinates.y - 1) + "px";
            divCow.style.left = _this.htmlGameTable.querySelector("td").getBoundingClientRect().width * (cow.coordinates.x - 1) + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLEVBQUUsRUFBRSxDQUFDO2FBQ1g7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQy9FLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztnQkFDaEYsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM5RyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDL0M7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMvQjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0Y7WUFDSSxXQUFXLEVBQUUsRUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDekIsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSjtJQUNELE1BQU0sRUFBRTtRQUNKLEtBQUssRUFBRTtZQUNILElBQUksRUFBRSxDQUFDO1lBQ1AsT0FBTyxFQUFFLENBQUM7U0FDYjtLQUNKO0NBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDSyxJQUFNLElBQUksR0FBcUI7SUFDbEMsVUFBVSxFQUFFO1FBQ1IsWUFBWSxFQUFFO1lBQ1YsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDeEIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDcEI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNoRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzdELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUNoRixDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDM0Y7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ2xELENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDM0Q7U0FDSjtRQUNELFlBQVksRUFBRTtZQUNWLEtBQUssRUFBRTtnQkFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDVjtTQUNKO1FBQ0QsTUFBTSxFQUFFO1lBQ0osV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1NBQy9CO0tBQ0o7SUFDRCxJQUFJLEVBQUU7UUFDRjtZQUNJLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUMzQixTQUFTLEVBQUUsT0FBTztZQUNsQixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNKO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7WUFDUCxPQUFPLEVBQUUsQ0FBQztZQUNWLE1BQU0sRUFBRSxDQUFDO1NBQ1o7S0FDSjtDQUNKO0FBRUQsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaERiLElBQU0sSUFBSSxHQUFxQjtJQUNsQyxVQUFVLEVBQUU7UUFDUixZQUFZLEVBQUU7WUFDVixRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN4QixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDOUI7WUFDRCxRQUFRLEVBQUU7Z0JBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3RFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDdEUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2FBQzNGO1lBQ0QsUUFBUSxFQUFFO2dCQUNOLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUM5RyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQzNDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQzthQUNsRDtZQUNELFlBQVksRUFBRTtnQkFDVixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDVDtZQUNELFdBQVcsRUFBRTtnQkFDVCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDVjtZQUNELE9BQU8sRUFBRTtnQkFDTCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDNUI7U0FDSjtRQUNELFlBQVksRUFBRTtZQUNWLFNBQVMsRUFBRTtnQkFDUCxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUM7YUFDWDtTQUNKO1FBQ0QsU0FBUyxFQUFFO1lBQ1AsS0FBSyxFQUFFO2dCQUNIO29CQUNJLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtvQkFDNUIsU0FBUyxFQUFFLE9BQU87aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELE1BQU0sRUFBRTtZQUNKLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtTQUMvQjtLQUNKO0lBQ0QsSUFBSSxFQUFFO1FBQ0U7WUFDSSxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDM0IsU0FBUyxFQUFFLE9BQU87WUFDbEIsS0FBSyxFQUFFLE1BQU07U0FDaEI7UUFDRDtZQUNJLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRTtZQUM3QixTQUFTLEVBQUUsTUFBTTtZQUNqQixLQUFLLEVBQUUsTUFBTTtTQUNoQjtLQUNSO0lBQ0QsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFO1lBQ0gsSUFBSSxFQUFFLENBQUM7U0FDVjtLQUNKO0NBQ0osQ0FBQztBQUVGLGlFQUFlLElBQUksRUFBQzs7Ozs7OztVQ25FcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9Db25mLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL0dhbWUvRW50aXRpZXMvQXJyb3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9Db3cudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9FbnRpdHkudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9GaWVsZC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0dvYmxldC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0VudGl0aWVzL0hheUJhbGUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9FbnRpdGllcy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9HYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvR2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9SZW5kZXIvUmVuZGVyLnRzIiwid2VicGFjazovL2Nvdy1nYW1lLy4vc3JjL1JlbmRlci9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9VSS50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9jb3ctZ2FtZS8uL3NyYy9sZXZlbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDEudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDIudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvLi9zcmMvbGV2ZWxzL2x2bDQudHMiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY293LWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2Nvdy1nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jb3ctZ2FtZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ09ORiA9IHtcclxuICAgIE1hcDoge1xyXG4gICAgICAgIHdpZHRoOiAyMCxcclxuICAgICAgICBoZWlnaHQ6IDE0XHJcbiAgICB9LFxyXG4gICAgQXJyb3dzVGFibGU6IHtcclxuICAgICAgICB3aWR0aDogMyxcclxuICAgICAgICBoZWlnaHQ6IDdcclxuICAgIH0sXHJcbiAgICBJbWdQYXRoOiB7XHJcbiAgICAgICAgQ293QnJvd25VcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25VcC5zdmdcIixcclxuICAgICAgICBDb3dCcm93blJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dCcm93blJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIENvd0Jyb3duRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25Eb3duLnN2Z1wiLFxyXG4gICAgICAgIENvd0Jyb3duTGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293QnJvd25MZWZ0LnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlVcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleVVwLnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleVJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIENvd0dyZXlEb3duOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9Db3dHcmV5RG93bi5zdmdcIixcclxuICAgICAgICBDb3dHcmV5TGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQ293R3JleUxlZnQuc3ZnXCIsXHJcbiAgICAgICAgRmVuY2VIOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9GZW5jZUguc3ZnXCIsXHJcbiAgICAgICAgRmVuY2VWOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9GZW5jZVYuc3ZnXCIsXHJcbiAgICAgICAgUGlsbGFyOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9QaWxsYXIuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dSZWRVcDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWRVcC5zdmdcIixcclxuICAgICAgICBBcnJvd1JlZFJpZ2h0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd1JlZFJpZ2h0LnN2Z1wiLFxyXG4gICAgICAgIEFycm93UmVkRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWREb3duLnN2Z1wiLFxyXG4gICAgICAgIEFycm93UmVkTGVmdDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dSZWRMZWZ0LnN2Z1wiLFxyXG4gICAgICAgIEFycm93Qmx1ZVVwOiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVVcC5zdmdcIixcclxuICAgICAgICBBcnJvd0JsdWVSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dCbHVlUmlnaHQuc3ZnXCIsXHJcbiAgICAgICAgQXJyb3dCbHVlRG93bjogXCJhc3NldHMvc3ByaXRlcy9zdmcvQXJyb3dCbHVlRG93bi5zdmdcIixcclxuICAgICAgICBBcnJvd0JsdWVMZWZ0OiBcImFzc2V0cy9zcHJpdGVzL3N2Zy9BcnJvd0JsdWVMZWZ0LnN2Z1wiLFxyXG4gICAgICAgIEdvYmxldDogXCJhc3NldHMvc3ByaXRlcy9zdmcvR29ibGV0LnN2Z1wiLFxyXG4gICAgICAgIFNsaWRlVXA6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlVXAucG5nXCIsXHJcbiAgICAgICAgU2xpZGVSaWdodDogXCJhc3NldHMvc3ByaXRlcy9zdmcvU2xpZGVSaWdodC5wbmdcIixcclxuICAgICAgICBTbGlkZURvd246IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlRG93bi5wbmdcIixcclxuICAgICAgICBTbGlkZUxlZnQ6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL1NsaWRlTGVmdC5wbmdcIixcclxuICAgICAgICBCbG9jazogXCJhc3NldHMvc3ByaXRlcy9zdmcvQmxvY2sucG5nXCIsXHJcbiAgICAgICAgSGF5QmFsZTogXCJhc3NldHMvc3ByaXRlcy9zdmcvSGF5QmFsZS5wbmdcIixcclxuICAgICAgICBLZXk6IFwiYXNzZXRzL3Nwcml0ZXMvc3ZnL0tleS5wbmdcIixcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ09ORjsiLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiLi9GaWVsZFwiO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIEFycm93Q29sb3IsIEVudGl0eU5hbWUsIENvb3JkaW5hdGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyb3cgZXh0ZW5kcyBGaWVsZCB7XHJcbiAgICBkaXJlY3Rpb246IERpcmVjdGlvbjtcclxuICAgIGNvbG9yOiBBcnJvd0NvbG9yO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IEVudGl0eU5hbWUsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGNvbG9yOiBBcnJvd0NvbG9yLCBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCBjb29yZGluYXRlcywgZmFsc2UsIGZhbHNlLCBsaW5rZWRIdG1sRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGlua2VkSHRtbEVsZW1lbnQgPSBsaW5rZWRIdG1sRWxlbWVudDtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IENPTkYuSW1nUGF0aFt0aGlzLm5hbWVdO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IENPTkYgZnJvbSAnLi4vLi4vQ29uZic7XHJcbmltcG9ydCB7IEVudGl0eSB9IGZyb20gXCIuL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlcywgRGlyZWN0aW9uLCBDb3dDb2xvciwgRW50aXR5TmFtZX0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ293IGV4dGVuZHMgRW50aXR5IHtcclxuICAgIHB1YmxpYyBjb29yZGluYXRlczogQ29vcmRpbmF0ZXM7XHJcbiAgICBwcml2YXRlIF9kaXJlY3Rpb246IERpcmVjdGlvbjtcclxuICAgIHB1YmxpYyBjb2xvcjogQ293Q29sb3I7XHJcbiAgICBwdWJsaWMgbGF5ZXI6IDEgfCAyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IEVudGl0eU5hbWUsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGNvbG9yOiBDb3dDb2xvciwgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgICB0aGlzLl9kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gdGhpcy5nZW5lcmF0ZUltZ1VybCgpO1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZGlyZWN0aW9uKCk6IERpcmVjdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpcmVjdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IGRpcmVjdGlvbihkaXJlY3Rpb246IERpcmVjdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2RpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuICAgICAgICB0aGlzLmltZ1VybCA9IHRoaXMuZ2VuZXJhdGVJbWdVcmwoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUltZ1VybCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBDT05GLkltZ1BhdGhbYENvd0dyZXkke3RoaXMuX2RpcmVjdGlvbn1gXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGRpcmVjdGlvbjogRGlyZWN0aW9uID0gdGhpcy5fZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIFwiVXBcIjpcclxuICAgICAgICAgICAgICAgIHRoaXMuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKHRoaXMuY29vcmRpbmF0ZXMueSAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2RpcmVjdGlvbiAhPT0gXCJVcFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIlVwXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKCh0aGlzLmNvb3JkaW5hdGVzLnggKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IFwiUmlnaHRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJSaWdodFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJEb3duXCI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvb3JkaW5hdGVzLnkgPSBNYXRoLnJvdW5kKCh0aGlzLmNvb3JkaW5hdGVzLnkgKyAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9kaXJlY3Rpb24gIT09IFwiRG93blwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBcIkRvd25cIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiTGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgodGhpcy5jb29yZGluYXRlcy54IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZGlyZWN0aW9uICE9PSBcIkxlZnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gXCJMZWZ0XCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFbnRpdHlOYW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRW50aXR5IHtcclxuICAgIG5hbWU6IEVudGl0eU5hbWU7XHJcbiAgICBpbWdVcmwhOiBzdHJpbmc7XHJcbiAgICBsaW5rZWRIdG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogRW50aXR5TmFtZSwgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmxpbmtlZEh0bWxFbGVtZW50ID0gbGlua2VkSHRtbEVsZW1lbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ09ORiBmcm9tICcuLi8uLi9Db25mJztcclxuaW1wb3J0IHsgRW50aXR5IH0gZnJvbSBcIi4vRW50aXR5XCI7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzLCBFbnRpdHlOYW1lIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGQgZXh0ZW5kcyBFbnRpdHkge1xyXG4gICAgY29vcmRpbmF0ZXM6IENvb3JkaW5hdGVzO1xyXG4gICAgaW1wYXNzYWJsZTogYm9vbGVhbjsgLy8gdHJ1ZSAtINC90LXQv9GA0L7RhdC+0LTQuNC80YvQuVxyXG4gICAgaW1nVXJsOiBzdHJpbmc7XHJcbiAgICBtb3ZhYmxlOiBib29sZWFuOyAvLyB0cnVlIC0g0LzQvtC20L3QviDQtNCy0LjQs9Cw0YLRjFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IEVudGl0eU5hbWUsIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgaW1wYXNzYWJsZSA9IHRydWUsIG1vdmFibGUgPSBmYWxzZSwgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuY29vcmRpbmF0ZXMgPSBjb29yZGluYXRlcztcclxuICAgICAgICB0aGlzLmltcGFzc2FibGUgPSBpbXBhc3NhYmxlO1xyXG4gICAgICAgIHRoaXMubW92YWJsZSA9IG1vdmFibGU7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBDT05GLkltZ1BhdGhbdGhpcy5uYW1lXTtcclxuICAgIH1cclxufSIsImltcG9ydCBDT05GIGZyb20gJy4uLy4uL0NvbmYnO1xyXG5pbXBvcnQgeyBGaWVsZCB9IGZyb20gXCIuL0ZpZWxkXCI7XHJcbmltcG9ydCB7IENvb3JkaW5hdGVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR29ibGV0IGV4dGVuZHMgRmllbGQge1xyXG4gICAgY29uc3RydWN0b3IgKGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcywgbGlua2VkSHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KSB7XHJcbiAgICAgICAgc3VwZXIoXCJHb2JsZXRcIiwgY29vcmRpbmF0ZXMsIGZhbHNlLCBmYWxzZSwgbGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMuaW1nVXJsID0gQ09ORi5JbWdQYXRoLkdvYmxldDtcclxuICAgIH1cclxufSIsImltcG9ydCBDT05GIGZyb20gJy4uLy4uL0NvbmYnO1xyXG5pbXBvcnQgeyBFbnRpdHkgfSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXMsIEVudGl0eU5hbWUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIYXlCYWxlIGV4dGVuZHMgRW50aXR5IHtcclxuICAgIGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBFbnRpdHlOYW1lLCBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMsIGxpbmtlZEh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIGxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICB0aGlzLmNvb3JkaW5hdGVzID0gY29vcmRpbmF0ZXM7XHJcbiAgICAgICAgdGhpcy5pbWdVcmwgPSBDT05GLkltZ1BhdGguSGF5QmFsZTtcclxuICAgIH1cclxufSIsImV4cG9ydCB7IEFycm93IH0gZnJvbSAnLi9BcnJvdydcclxuZXhwb3J0IHsgQ293IH0gZnJvbSAnLi9Db3cnXHJcbmV4cG9ydCB7IEVudGl0eSB9IGZyb20gJy4vRW50aXR5J1xyXG5leHBvcnQgeyBGaWVsZCB9IGZyb20gJy4vRmllbGQnXHJcbmV4cG9ydCB7IEdvYmxldCB9IGZyb20gJy4vR29ibGV0J1xyXG5leHBvcnQgeyBIYXlCYWxlIH0gZnJvbSAnLi9IYXlCYWxlJyIsImltcG9ydCBSZW5kZXIgZnJvbSAnLi4vUmVuZGVyJztcclxuaW1wb3J0IFVJIGZyb20gJy4uL1VJJztcclxuaW1wb3J0IHsgSUxldmVsLCBJQ293IH0gZnJvbSAnLi4vSW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IFN0YXRpY0ZpZWxkcywgRW50aXR5TmFtZSwgQXJyb3dDb2xvciwgTWFwQXJyb3csIERpcmVjdGlvbiwgQ29vcmRpbmF0ZXMgfSBmcm9tICcuLi90eXBlcyc7XHJcbmltcG9ydCB7IEZpZWxkLCBIYXlCYWxlLCBBcnJvdywgR29ibGV0LCBDb3cgfSBmcm9tIFwiLi9FbnRpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XHJcbiAgICBsb29wITogTm9kZUpTLlRpbWVyO1xyXG4gICAgc3RhdGljRmllbGRzOiBGaWVsZFtdID0gW107XHJcbiAgICBtb2JpbGVGaWVsZHM6IEhheUJhbGVbXSA9IFtdO1xyXG4gICAgbWFwQXJyb3dzOiBBcnJvd1tdID0gW107XHJcbiAgICBhY3RpdmVGaWVsZHMhOiBGaWVsZFtdO1xyXG4gICAgZ29ibGV0ITogR29ibGV0O1xyXG4gICAgY293cyE6IENvd1tdO1xyXG4gICAgbWFwRmllbGRzITogKEZpZWxkIHwgSGF5QmFsZSlbXTtcclxuICAgIGFycm93cyE6IEFycm93W107XHJcbiAgICByZW5kZXI6IFJlbmRlcjtcclxuICAgIHVpOiBVSTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgcmVuZGVyOiBSZW5kZXIsXHJcbiAgICAgICAgICAgIHVpOiBVSVxyXG4gICAgICAgICkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyID0gcmVuZGVyO1xyXG4gICAgICAgIHRoaXMudWkgPSB1aTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGV2ZWwobGV2ZWw6IElMZXZlbCkge1xyXG4gICAgICAgIGNvbnN0IHsgbWFwT2JqZWN0czogeyBzdGF0aWNGaWVsZHMsIG1vYmlsZUZpZWxkcywgbWFwQXJyb3dzLCBhY3RpdmVGaWVsZHMsIGdvYmxldCB9LCBjb3dzLCBhcnJvd3MgfSA6IElMZXZlbCA9IGxldmVsO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmNyZWF0ZUNvd0h0bWxFbGVtZW50cyhjb3dzKTtcclxuICAgICAgICB0aGlzLnJlbmRlci5jcmVhdGVNb2JpbGVGaWVsZHNIdG1sRWxlbWVudHMobW9iaWxlRmllbGRzKTtcclxuICAgICAgICAvLyBtYXAgZmllbGRzXHJcbiAgICAgICAgdGhpcy5zdGF0aWNGaWVsZHMgPSB0aGlzLmluaXRTdGF0aWNGaWVsZHMoc3RhdGljRmllbGRzKTtcclxuICAgICAgICB0aGlzLm1vYmlsZUZpZWxkcyA9IHRoaXMuaW5pdE1vYmlsZUZpZWxkcyhtb2JpbGVGaWVsZHMpO1xyXG4gICAgICAgIHRoaXMubWFwQXJyb3dzID0gdGhpcy5pbml0TWFwQXJyb3dzKG1hcEFycm93cyk7XHJcbiAgICAgICAgLy8gdGhpcy5hY3RpdmVGaWVsZHMgPSB0aGlzLmluaXRBY3RpdmVGaWVsZHMoYWN0aXZlRmllbGRzKTtcclxuICAgICAgICB0aGlzLmdvYmxldCA9IHRoaXMuaW5pdEdvYmxldChnb2JsZXQpO1xyXG4gICAgICAgIHRoaXMubWFwRmllbGRzID0gdGhpcy5nZXRNYXBGaWVsZHMoKTtcclxuICAgICAgICAvLyBnYW1lIG9iamVjdHNcclxuICAgICAgICB0aGlzLmNvd3MgPSB0aGlzLmluaXRDb3dzKGNvd3MpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzID0gdGhpcy5pbml0QXJyb3dzKGFycm93cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFN0YXRpY0ZpZWxkcyhzdGF0aWNGaWVsZHM/OiBTdGF0aWNGaWVsZHMpOiBGaWVsZFtdIHtcclxuICAgICAgICBpZiAoc3RhdGljRmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRpY0ZpZWxkc0FycmF5OiBGaWVsZFtdID0gW107XHJcbiAgICAgICAgICAgIChPYmplY3Qua2V5cyhzdGF0aWNGaWVsZHMpIGFzIEVudGl0eU5hbWVbXSkuZm9yRWFjaCgoZmllbGROYW1lOiBFbnRpdHlOYW1lKSA9PlxyXG4gICAgICAgICAgICAgICAgc3RhdGljRmllbGRzW2ZpZWxkTmFtZV0/LmZvckVhY2goKGZpZWxkQ29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0pID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljRmllbGRzQXJyYXkucHVzaChuZXcgRmllbGQoZmllbGROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGZpZWxkQ29vcmRpbmF0ZXNbMF0sIHk6IGZpZWxkQ29vcmRpbmF0ZXNbMV19LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aS5nYW1lVGFibGVbZmllbGRDb29yZGluYXRlc1sxXSAtIDFdW2ZpZWxkQ29vcmRpbmF0ZXNbMF0gLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRpY0ZpZWxkc0FycmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdE1vYmlsZUZpZWxkcyhtb2JpbGVGaWVsZHM/OiBJTGV2ZWxbJ21hcE9iamVjdHMnXVsnbW9iaWxlRmllbGRzJ10pOiBIYXlCYWxlW10ge1xyXG4gICAgICAgIGlmIChtb2JpbGVGaWVsZHMpIHtcclxuICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIChPYmplY3Qua2V5cyhtb2JpbGVGaWVsZHMpIGFzIEVudGl0eU5hbWVbXSkucmVkdWNlKChtb2JpbGVGaWVsZHNBcnI6IEhheUJhbGVbXSwgb2JqTmFtZTogRW50aXR5TmFtZSkgPT5cclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpZWxkc0Fyci5jb25jYXQobW9iaWxlRmllbGRzW29iak5hbWVdPy5tYXAoKGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgSGF5QmFsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iak5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IGNvb3JkaW5hdGVzWzBdLCB5OiBjb29yZGluYXRlc1sxXSB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIubW9iaWxlRmllbGRzW2NvdW50KytdIGFzIEhUTUxFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICApID8/IFtdXHJcbiAgICAgICAgICAgICAgICApLCBbXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0TWFwQXJyb3dzKG1hcEFycm93cz86IElMZXZlbFsnbWFwT2JqZWN0cyddWydtYXBBcnJvd3MnXSk6IEFycm93W10ge1xyXG4gICAgICAgIGlmIChtYXBBcnJvd3MpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwQXJyb3dzQXJyYXk6IEFycm93W10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC5rZXlzKG1hcEFycm93cykgYXMgQXJyb3dDb2xvcltdKS5mb3JFYWNoKChhcnJvd0NvbG9yOiBBcnJvd0NvbG9yKSA9PlxyXG4gICAgICAgICAgICAgICAgbWFwQXJyb3dzW2Fycm93Q29sb3JdPy5mb3JFYWNoKChhcnJvdzogTWFwQXJyb3cpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgbWFwQXJyb3dzQXJyYXkucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IEFycm93KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEFycm93JHthcnJvd0NvbG9yICsgYXJyb3cuZGlyZWN0aW9ufWAgYXMgRW50aXR5TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93LmNvb3JkaW5hdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3cuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuZ2FtZVRhYmxlW2Fycm93LmNvb3JkaW5hdGVzLnkgLSAxXVthcnJvdy5jb29yZGluYXRlcy54IC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFwQXJyb3dzQXJyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0Q293cyhjb3dzOiBJTGV2ZWxbJ2Nvd3MnXSkge1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoY293cykubWFwKChjb3c6IElDb3cpID0+XHJcbiAgICAgICAgICAgICAgICBuZXcgQ293KFxyXG4gICAgICAgICAgICAgICAgICAgIGBDb3cke2Nvdy5jb2xvciArIGNvdy5kaXJlY3Rpb259YCBhcyBFbnRpdHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdy5jb29yZGluYXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBjb3cuZGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvdy5jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlci5jb3dIdG1sRWxlbWVudHNbY291bnQrK11cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRBcnJvd3MoYXJyb3dzOiBJTGV2ZWxbJ2Fycm93cyddKSB7XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBjb25zdCBhcnJvd3NBcnJheTogQXJyb3dbXSA9IFtdO1xyXG4gICAgICAgIChPYmplY3Qua2V5cyhhcnJvd3MpIGFzIEFycm93Q29sb3JbXSkuZm9yRWFjaCgoYXJyb3dDb2xvcjogQXJyb3dDb2xvcikgPT5cclxuICAgICAgICAgICAgKE9iamVjdC5rZXlzKGFycm93c1thcnJvd0NvbG9yXSBhcyB7W2sgaW4gRGlyZWN0aW9uXTogbnVtYmVyfSkgYXMgRGlyZWN0aW9uW10pLmZvckVhY2goKGFycm93RGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGFycm93c1thcnJvd0NvbG9yXSBhcyB7W2sgaW4gRGlyZWN0aW9uXTogbnVtYmVyfSlbYXJyb3dEaXJlY3Rpb25dOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJvd3NBcnJheS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgQXJyb3coXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXJyb3cke2Fycm93Q29sb3IgKyBhcnJvd0RpcmVjdGlvbn1gIGFzIEVudGl0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHg6IDAsIHk6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93RGlyZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudWkuYXJyb3dzVGFibGUuZmxhdDxIVE1MRWxlbWVudFtdW10+KDEpW2NvdW50KytdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gYXJyb3dzQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyppbml0QWN0aXZlRmllbGRzKGZpZWxkczogSUxldmVsWydtYXBPYmplY3RzJ11bXCJhY3RpdmVGaWVsZHNcIl0gfCB1bmRlZmluZWQpOiBGaWVsZFtdIHtcclxuICAgICAgICBpZiAoZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vYmlsZUZpZWxkc0FycjogRmllbGRbXSA9IFtdO1xyXG4gICAgICAgICAgICAoT2JqZWN0LmtleXMoZmllbGRzKSBhcyBFbnRpdHlOYW1lW10pLmZvckVhY2goKGZpZWxkTmFtZTogRW50aXR5TmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzW2ZpZWxkTmFtZV0/LmZvckVhY2goKGNvb3JkaW5hdGVzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH0qL1xyXG5cclxuICAgIGluaXRHb2JsZXQoZ29ibGV0OiBJTGV2ZWxbJ21hcE9iamVjdHMnXVsnZ29ibGV0J10pOiBHb2JsZXQge1xyXG4gICAgICAgIHJldHVybiBuZXcgR29ibGV0KGdvYmxldC5jb29yZGluYXRlcywgdGhpcy51aS5nYW1lVGFibGVbZ29ibGV0LmNvb3JkaW5hdGVzLnkgLSAxXVtnb2JsZXQuY29vcmRpbmF0ZXMueCAtIDFdLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWxsTWFwT2JqZWN0cygpOiAoRmllbGQgfCBDb3cgfCBIYXlCYWxlKVtdIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAuLi50aGlzLnN0YXRpY0ZpZWxkcyxcclxuICAgICAgICAgICAgLi4udGhpcy5tb2JpbGVGaWVsZHMsXHJcbiAgICAgICAgICAgIC4uLnRoaXMubWFwQXJyb3dzLFxyXG4gICAgICAgICAgICB0aGlzLmdvYmxldCxcclxuICAgICAgICAgICAgLi4udGhpcy5jb3dzXHJcbiAgICAgICAgXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNYXBGaWVsZHMoKTogKEZpZWxkIHwgSGF5QmFsZSlbXSB7XHJcbiAgICAgICAgY29uc3QgbWFwRmllbGRzOiAoRmllbGQgfCBIYXlCYWxlKVtdID0gWy4uLnRoaXMuc3RhdGljRmllbGRzLCB0aGlzLmdvYmxldF07XHJcbiAgICAgICAgaWYgKHRoaXMubW9iaWxlRmllbGRzKSB7XHJcbiAgICAgICAgICAgIG1hcEZpZWxkcy5jb25jYXQoLi4udGhpcy5tb2JpbGVGaWVsZHMpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1hcEFycm93cykge1xyXG4gICAgICAgICAgICBtYXBGaWVsZHMuY29uY2F0KC4uLnRoaXMubWFwQXJyb3dzKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWFwRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEdhbWVPYmplY3RzKCk6IChBcnJvdyB8IENvdylbXSB7XHJcbiAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4udGhpcy5jb3dzLFxyXG4gICAgICAgICAgICAuLi50aGlzLm1hcEFycm93c1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXJyb3dzKCk6IEFycm93W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFycm93cztcclxuICAgIH1cclxuXHJcbiAgICBmaW5kRmllbGRCeUNvb3JkaW5hdGVzKGNvb3JkaW5hdGVzOiBDb29yZGluYXRlcyk6IEZpZWxkIHwgSGF5QmFsZSB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIFsuLi50aGlzLnN0YXRpY0ZpZWxkcywgLi4udGhpcy5tb2JpbGVGaWVsZHNdLmZpbmQoKGZpZWxkOiBGaWVsZCB8IEhheUJhbGUpID0+XHJcbiAgICAgICAgICAgIGZpZWxkLmNvb3JkaW5hdGVzLnggPT09IGNvb3JkaW5hdGVzLnggJiYgZmllbGQuY29vcmRpbmF0ZXMueSA9PT0gY29vcmRpbmF0ZXMueSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEZpZWxkQnlIdG1sRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1hcEZpZWxkcy5maW5kKChmaWVsZDogRmllbGQgfCBIYXlCYWxlKSA9PlxyXG4gICAgICAgICAgICBodG1sRWxlbWVudCA9PT0gZmllbGQ/LmxpbmtlZEh0bWxFbGVtZW50XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kR2FtZU9iamVjdEJ5SHRtbEVsZW1lbnQoaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogRmllbGQgfCBDb3cgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEdhbWVPYmplY3RzKCkuZmluZCgob2JqOiBBcnJvdyB8IENvdykgPT5cclxuICAgICAgICAgICAgaHRtbEVsZW1lbnQgPT09IChvYmo/LmxpbmtlZEh0bWxFbGVtZW50IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZEFycm93QnlIdG1sRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpOiBBcnJvdyB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJyb3dzLmZpbmQoKGFycm93OiBBcnJvdykgPT4gYXJyb3cubGlua2VkSHRtbEVsZW1lbnQgPT09IGh0bWxFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QXJyb3dzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXdBcnJvd3ModGhpcy5hcnJvd3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlclNjZW5lKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2xlYXJTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyLmRyYXdTY2VuZShcclxuICAgICAgICAgICAgdGhpcy5zdGF0aWNGaWVsZHMsXHJcbiAgICAgICAgICAgIHsgbW9iaWxlRmllbGRzOiB0aGlzLm1vYmlsZUZpZWxkcywgY293czogdGhpcy5jb3dzIH0sXHJcbiAgICAgICAgICAgIHRoaXMubWFwQXJyb3dzLCB0aGlzLmdvYmxldFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJTY2VuZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJlbmRlci5jbGVhclNjZW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBcnJvd3MoY293OiBDb3cpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5tYXBBcnJvd3MpIHtcclxuICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLm1hcEFycm93cykuZm9yRWFjaCgoYXJyb3c6IEFycm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY293LmNvb3JkaW5hdGVzLnggPT09IGFycm93LmNvb3JkaW5hdGVzLnggJiYgY293LmNvb3JkaW5hdGVzLnkgPT09IGFycm93LmNvb3JkaW5hdGVzLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3cuZGlyZWN0aW9uID0gYXJyb3cuZGlyZWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFwQXJyb3dzLnNwbGljZSh0aGlzLm1hcEFycm93cy5pbmRleE9mKGFycm93KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0dvYmxldChjb3c6IENvdyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBjb3cuY29sb3IgPT09IFwiR3JleVwiICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ29ibGV0LmNvb3JkaW5hdGVzLnggPT09IGNvdy5jb29yZGluYXRlcy54ICYmXHJcbiAgICAgICAgICAgIHRoaXMuZ29ibGV0LmNvb3JkaW5hdGVzLnkgPT09IGNvdy5jb29yZGluYXRlcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0R2FtZSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9vcCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvb3AgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dEZpZWxkOiBGaWVsZCB8IEhheUJhbGUgfCB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNWaWN0b3J5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY293cykuZm9yRWFjaCgoY293OiBDb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjb3cuY29vcmRpbmF0ZXMueCkgJiYgTnVtYmVyLmlzSW50ZWdlcihjb3cuY29vcmRpbmF0ZXMueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0Fycm93cyhjb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZpY3RvcnkgPSB0aGlzLmNoZWNrR29ibGV0KGNvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNWaWN0b3J5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50RmllbGQ6IEZpZWxkIHwgSGF5QmFsZSB8IHVuZGVmaW5lZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7IHg6IGNvdy5jb29yZGluYXRlcy54LCB5OiBjb3cuY29vcmRpbmF0ZXMueX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRGaWVsZD8ubmFtZSA9PT0gXCJTbGlkZVVwXCIgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RmllbGQ/Lm5hbWUgPT09IFwiU2xpZGVSaWdodFwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkPy5uYW1lID09PSBcIlNsaWRlRG93blwiIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEZpZWxkPy5uYW1lID09PSBcIlNsaWRlTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubGF5ZXIgPSBjb3cubGF5ZXIgPT09IDEgPyAyIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoY293LmRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoeyB4OiBjb3cuY29vcmRpbmF0ZXMueCwgeTogY293LmNvb3JkaW5hdGVzLnkgLSAxIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkLm5hbWUgPT09IFwiU2xpZGVVcFwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7IHg6Y293LmNvb3JkaW5hdGVzLnggKyAxLCB5OiBjb3cuY29vcmRpbmF0ZXMueSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdy5sYXllciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQubmFtZSA9PT0gXCJTbGlkZVJpZ2h0XCIpIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueCArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3cubW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkRvd25cIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHsgeDogY293LmNvb3JkaW5hdGVzLngsIHk6IGNvdy5jb29yZGluYXRlcy55ICsgMSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZC5uYW1lID09PSBcIlNsaWRlRG93blwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueSA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy55ICsgMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHsgeDogY293LmNvb3JkaW5hdGVzLnggLSAxLCB5OiBjb3cuY29vcmRpbmF0ZXMueSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZC5uYW1lID09PSBcIlNsaWRlTGVmdFwiKSBjb3cubW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueCA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy54IC0gMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdy5tb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEdhbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWU9VIFdJTiEhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIEZJWE1FOiBkZWxldGUgc3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0RmllbGQ6IEZpZWxkIHwgSGF5QmFsZSB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChjb3cuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlXCJVcFwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7IHg6IGNvdy5jb29yZGluYXRlcy54LCB5OiBjb3cuY29vcmRpbmF0ZXMueSAtIDEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnkgPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueSAtIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VcIlJpZ2h0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkID0gdGhpcy5maW5kRmllbGRCeUNvb3JkaW5hdGVzKHsgeDogY293LmNvb3JkaW5hdGVzLnggKyAxLCB5OiBjb3cuY29vcmRpbmF0ZXMueSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV4dEZpZWxkIGluc3RhbmNlb2YgSGF5QmFsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQuY29vcmRpbmF0ZXMueCA9IE1hdGgucm91bmQoKG5leHRGaWVsZC5jb29yZGluYXRlcy54ICsgMC4xKSAqIDEwMCkgLyAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZVwiRG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZCA9IHRoaXMuZmluZEZpZWxkQnlDb29yZGluYXRlcyh7IHg6IGNvdy5jb29yZGluYXRlcy54LCB5OiBjb3cuY29vcmRpbmF0ZXMueSArIDEgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRGaWVsZCBpbnN0YW5jZW9mIEhheUJhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggPSBNYXRoLnJvdW5kKChuZXh0RmllbGQuY29vcmRpbmF0ZXMueSArIDAuMSkgKiAxMDApIC8gMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2VcIkxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0RmllbGQgPSB0aGlzLmZpbmRGaWVsZEJ5Q29vcmRpbmF0ZXMoeyB4OiBjb3cuY29vcmRpbmF0ZXMueCAtIDEsIHk6IGNvdy5jb29yZGluYXRlcy55IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0RmllbGQgaW5zdGFuY2VvZiBIYXlCYWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRGaWVsZC5jb29yZGluYXRlcy54ID0gTWF0aC5yb3VuZCgobmV4dEZpZWxkLmNvb3JkaW5hdGVzLnggLSAwLjEpICogMTAwKSAvIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY293Lm1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU2NlbmUoKTtcclxuICAgICAgICAgICAgfSwgNDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBlbmRHYW1lKCkge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sb29wKTtcclxuICAgIH1cclxufSIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0dhbWUnOyIsImltcG9ydCBVSSBmcm9tICcuLi9VSSc7XHJcbmltcG9ydCB7IElDb3csIElMZXZlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEFycm93LCBGaWVsZCwgR29ibGV0LCBIYXlCYWxlLCBDb3cgfSBmcm9tIFwiLi4vR2FtZS9FbnRpdGllc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVuZGVyIHtcclxuICAgIGh0bWxHYW1lVGFibGU6IEhUTUxFbGVtZW50O1xyXG4gICAgaHRtbEFycm93c1RhYmxlOiBIVE1MRWxlbWVudDtcclxuICAgIGdhbWVUYWJsZTogSFRNTEVsZW1lbnRbXVtdO1xyXG4gICAgYXJyb3dzVGFibGU6IEhUTUxFbGVtZW50W11bXTtcclxuICAgIGNvd0h0bWxFbGVtZW50cyE6IEhUTUxFbGVtZW50W107XHJcbiAgICBtb2JpbGVGaWVsZHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih1aTogVUkpIHtcclxuICAgICAgICB0aGlzLmh0bWxHYW1lVGFibGUgPSB1aS5odG1sR2FtZVRhYmxlO1xyXG4gICAgICAgIHRoaXMuaHRtbEFycm93c1RhYmxlID0gdWkuaHRtbEFycm93c1RhYmxlO1xyXG4gICAgICAgIHRoaXMuZ2FtZVRhYmxlID0gdWkuZ2FtZVRhYmxlO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUgPSB1aS5hcnJvd3NUYWJsZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb3dIdG1sRWxlbWVudHMoY293czogSUxldmVsWydjb3dzJ10pOiB2b2lkIHtcclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGNvbnN0IGh0bWxFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG4gICAgICAgIE9iamVjdC52YWx1ZXMoY293cykuZm9yRWFjaCgoY293OiBJQ293KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXZDb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2Q293LmNsYXNzTmFtZSA9IGBjb3ctd3JhcHBlciBjb3ctJHtjb3VudCsrfWA7XHJcbiAgICAgICAgICAgICAgICBkaXZDb3cuc3R5bGUudG9wID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb3cuY29vcmRpbmF0ZXMueSAtIDEpfXB4YDtcclxuICAgICAgICAgICAgICAgIGRpdkNvdy5zdHlsZS5sZWZ0ID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGNvdy5jb29yZGluYXRlcy54IC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZGl2Q293LnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgZGl2Q293LnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBkaXZDb3cuc3R5bGUuekluZGV4ID0gJzMwJztcclxuICAgICAgICAgICAgICAgIGh0bWxFbGVtZW50cy5wdXNoKGRpdkNvdyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtdGFibGUtd3JhcHBlclwiKT8uYXBwZW5kQ2hpbGQoZGl2Q293KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jb3dIdG1sRWxlbWVudHMgPSBodG1sRWxlbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTW9iaWxlRmllbGRzSHRtbEVsZW1lbnRzKGZpZWxkczogSUxldmVsWydtYXBPYmplY3RzJ11bJ21vYmlsZUZpZWxkcyddIHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGZpZWxkcykge1xyXG4gICAgICAgICAgICBjb25zdCBodG1sRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgICAgICAgICAgKE9iamVjdC52YWx1ZXMoZmllbGRzKSkuZm9yRWFjaCgoY29vcmRpbmF0ZXNBcnI6IFtudW1iZXIsIG51bWJlcl1bXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZXM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuY2xhc3NOYW1lID0gYG1vYmlsZS1maWVsZGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUudG9wID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb29yZGluYXRlc1swXSAtIDEpfXB4YDtcclxuICAgICAgICAgICAgICAgICAgICBkaXZGaWVsZC5zdHlsZS5sZWZ0ID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGNvb3JkaW5hdGVzWzFdIC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkZpZWxkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdkZpZWxkLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2RmllbGQuc3R5bGUuekluZGV4ID0gJzIwJztcclxuICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudHMucHVzaChkaXZGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLXRhYmxlLXdyYXBwZXJcIik/LmFwcGVuZENoaWxkKGRpdkZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm1vYmlsZUZpZWxkcyA9IGh0bWxFbGVtZW50cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1N0YXRpY09iamVjdHMoZmllbGRzOiBGaWVsZFtdLCBtYXBBcnJvd3M6IEFycm93W10sIGdvYmxldDogR29ibGV0KSB7XHJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhmaWVsZHMpLmZvckVhY2goKGZpZWxkOiBGaWVsZCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlbGVtID0gKHRoaXMuZ2FtZVRhYmxlW2ZpZWxkLmNvb3JkaW5hdGVzLnkgLSAxXVtmaWVsZC5jb29yZGluYXRlcy54IC0gMV0uZmlyc3RDaGlsZCBhcyBIVE1MRWxlbWVudClcclxuICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7ZmllbGQuaW1nVXJsfVwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXRgO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBPYmplY3QudmFsdWVzKG1hcEFycm93cykuZm9yRWFjaCgoYXJyb3c6IEFycm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtID0gdGhpcy5nYW1lVGFibGVbYXJyb3cuY29vcmRpbmF0ZXMueSAtIDFdW2Fycm93LmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7YXJyb3cuaW1nVXJsfVwiKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXRgO1xyXG4gICAgICAgICAgICAgICAgZWxlbS5zdHlsZS56SW5kZXggPSAnMTAnO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb25zdCBnb2JsZXRFbGVtID0gKHRoaXMuZ2FtZVRhYmxlW2dvYmxldC5jb29yZGluYXRlcy55IC0gMV1bZ29ibGV0LmNvb3JkaW5hdGVzLnggLSAxXS5maXJzdENoaWxkIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIGdvYmxldEVsZW0uc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2dvYmxldC5pbWdVcmx9XCIpIGNlbnRlci9jb250YWluIG5vLXJlcGVhdGA7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0dhbWVPYmplY3RzKGdhbWVPYmplY3RzOiB7IG1vYmlsZUZpZWxkcz86IEhheUJhbGVbXSwgY293czogQ293W10gfSkge1xyXG4gICAgICAgIGlmIChnYW1lT2JqZWN0cy5tb2JpbGVGaWVsZHMpIHtcclxuICAgICAgICAgICAgZ2FtZU9iamVjdHMubW9iaWxlRmllbGRzLmZvckVhY2goKGZpZWxkOiBIYXlCYWxlKSAgPT4ge1xyXG4gICAgICAgICAgICAgICAgZmllbGQubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUudG9wID0gYCR7KHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChmaWVsZC5jb29yZGluYXRlcy55IC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZmllbGQubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IGAkeyh0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpIGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAqIChmaWVsZC5jb29yZGluYXRlcy54IC0gMSl9cHhgO1xyXG4gICAgICAgICAgICAgICAgZmllbGQubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgICAgICBmaWVsZC5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICAgICAgZmllbGQubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2ZpZWxkLmltZ1VybH1cIikgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBPYmplY3QudmFsdWVzKGdhbWVPYmplY3RzLmNvd3MpLmZvckVhY2goKGNvdzogQ293KSAgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjc3NUb3AgPSBjb3cubGF5ZXIgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb3cuY29vcmRpbmF0ZXMueSAtIDEpIC0gMzAgOlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCAqIChjb3cuY29vcmRpbmF0ZXMueSAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBjc3NMZWZ0ID0gKHRoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIikgYXMgSFRNTEVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICogKGNvdy5jb29yZGluYXRlcy54IC0gMSk7XHJcbiAgICAgICAgICAgIGNvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS50b3AgPSBgJHtjc3NUb3B9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke2Nzc0xlZnR9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRXaWR0aH1weGA7XHJcbiAgICAgICAgICAgIGNvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLmh0bWxHYW1lVGFibGUucXVlcnlTZWxlY3RvcihcInRkXCIpPy5jbGllbnRIZWlnaHR9cHhgO1xyXG4gICAgICAgICAgICBjb3cubGlua2VkSHRtbEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoXCIuLi8uLi8ke2Nvdy5pbWdVcmx9XCIpIG5vLXJlcGVhdCBjZW50ZXJgO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdBcnJvd3MoYXJyb3dzOiBBcnJvd1tdKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckFycm93c1RhYmxlKCk7XHJcbiAgICAgICAgYXJyb3dzLmZvckVhY2goKGFycm93OiBBcnJvdykgPT4ge1xyXG4gICAgICAgICAgICBhcnJvdy5saW5rZWRIdG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybChcIi4uLy4uLyR7YXJyb3cuaW1nVXJsfVwiKSBuby1yZXBlYXQgY2VudGVyYDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclNjZW5lKCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZVRhYmxlLmZvckVhY2gocm93ID0+IHtcclxuICAgICAgICAgICAgcm93LmZvckVhY2goKGZpZWxkOiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgKGZpZWxkLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckFycm93c1RhYmxlKCkge1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUuZm9yRWFjaChyb3cgPT4ge1xyXG4gICAgICAgICAgICByb3cuZm9yRWFjaChmaWVsZCA9PlxyXG4gICAgICAgICAgICAgICAgKGZpZWxkLmZpcnN0Q2hpbGQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmQgPSBcIlwiXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlQXJyb3dzVGFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJvd3NUYWJsZS5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKHRkID0+IHtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLndpZHRoID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50V2lkdGh9cHhgO1xyXG4gICAgICAgICAgICAgICAgdGQuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5odG1sR2FtZVRhYmxlLnF1ZXJ5U2VsZWN0b3IoXCJ0ZFwiKT8uY2xpZW50SGVpZ2h0fXB4YDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1NjZW5lKFxyXG4gICAgICAgIHN0YXRpY0ZpZWxkczogRmllbGRbXSxcclxuICAgICAgICBnYW1lT2JqZWN0czoge1xyXG4gICAgICAgICAgICBtb2JpbGVGaWVsZHM/OiBIYXlCYWxlW10sXHJcbiAgICAgICAgICAgIGNvd3M6IENvd1tdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtYXBBcnJvd3M6IEFycm93W10sXHJcbiAgICAgICAgZ29ibGV0OiBHb2JsZXRcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuZHJhd1N0YXRpY09iamVjdHMoc3RhdGljRmllbGRzLCBtYXBBcnJvd3MsIGdvYmxldCk7XHJcbiAgICAgICAgdGhpcy5kcmF3R2FtZU9iamVjdHMoZ2FtZU9iamVjdHMpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVBcnJvd3NUYWJsZSgpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUmVuZGVyJzsiLCJpbXBvcnQgQ09ORiBmcm9tICcuL0NvbmYnO1xyXG5pbXBvcnQgeyBBcnJvd30gZnJvbSBcIi4vR2FtZS9FbnRpdGllc1wiO1xyXG5pbXBvcnQgeyBnYW1lLCBzdGFydEdhbWUsIGVuZEdhbWUgfSBmcm9tICcuL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcclxuICAgIGh0bWxHYW1lVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBodG1sQXJyb3dzVGFibGU6IEhUTUxUYWJsZUVsZW1lbnQ7XHJcbiAgICBnYW1lVGFibGU6IEhUTUxUYWJsZUNlbGxFbGVtZW50W11bXTtcclxuICAgIGFycm93c1RhYmxlOiBIVE1MVGFibGVDZWxsRWxlbWVudFtdW107XHJcbiAgICBzZWxlY3RlZEl0ZW06IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBtb3VzZVghOiBudW1iZXI7XHJcbiAgICBtb3VzZVkhOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ2FtZUNvbnRhaW5lckNzc1NlbGVjdG9yOiBzdHJpbmcsIGFycm93c1RhYmxlQ3NzU2VsZWN0b3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaHRtbEdhbWVUYWJsZSA9IHRoaXMuY3JlYXRlR2FtZVRhYmxlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihnYW1lQ29udGFpbmVyQ3NzU2VsZWN0b3IpPy5hcHBlbmRDaGlsZCh0aGlzLmh0bWxHYW1lVGFibGUpO1xyXG4gICAgICAgIHRoaXMuaHRtbEFycm93c1RhYmxlID0gdGhpcy5jcmVhdGVBcnJvd3NUYWJsZSgpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJyb3dzVGFibGVDc3NTZWxlY3Rvcik/LmFwcGVuZENoaWxkKHRoaXMuaHRtbEFycm93c1RhYmxlKTtcclxuICAgICAgICB0aGlzLmdhbWVUYWJsZSA9IHRoaXMuaHRtbFRhYmxlVG9BcnJheSh0aGlzLmh0bWxHYW1lVGFibGUpO1xyXG4gICAgICAgIHRoaXMuYXJyb3dzVGFibGUgPSB0aGlzLmh0bWxUYWJsZVRvQXJyYXkodGhpcy5odG1sQXJyb3dzVGFibGUpO1xyXG5cclxuICAgICAgICAvLyBFdmVudExpc3RlbmVyc1xyXG4gICAgICAgIC8vIEJ1dHRvbnNcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGFydC1nYW1lLWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc3RhcnQnKTtcclxuICAgICAgICAgICAgc3RhcnRHYW1lKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVuZC1nYW1lLWJ1dHRvblwiKSBhcyBIVE1MRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgIGVuZEdhbWUoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdXNlWCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgdGhpcy5tb3VzZVkgPSBlLmNsaWVudFk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnRvcCA9IGAkey10aGlzLm1vdXNlWSArIGUuY2xpZW50WX1weGA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5sZWZ0ID0gYCR7LXRoaXMubW91c2VYICsgZS5jbGllbnRYfXB4YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIChlOiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiZ2FtZS1maWVsZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdhbWUuZmluZEZpZWxkQnlIdG1sRWxlbWVudChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgIWdhbWUuZmluZEdhbWVPYmplY3RCeUh0bWxFbGVtZW50KGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQvNC+0LbQvdC+INC/0L7RgdGC0LDQstC40YLRjCDQvdCwINC/0L7Qu9C1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc05hbWUuc3BsaXQoXCIgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHN0ciA9PiBzdHIubWF0Y2goL14oeHx5KS1cXGQrJC9nKSkubWFwKHN0ciA9PiBOdW1iZXIoc3RyLnNsaWNlKDIpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycm93OiBBcnJvdyB8IHVuZGVmaW5lZCA9IGdhbWUuZmluZEFycm93QnlIdG1sRWxlbWVudCh0aGlzLnNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZEFycm93OiBBcnJvdyB8IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93ID0gZ2FtZS5hcnJvd3Muc3BsaWNlKGdhbWUuYXJyb3dzLmluZGV4T2YoYXJyb3cpLCAxKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWUubWFwQXJyb3dzLnB1c2goc2VsZWN0ZWRBcnJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93ID0gZ2FtZS5tYXBBcnJvd3MuZmluZCgoYXJyb3c6IEFycm93KSA9PiB0aGlzLnNlbGVjdGVkSXRlbSA9PT0gYXJyb3cubGlua2VkSHRtbEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEFycm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmNvb3JkaW5hdGVzLnggPSBjb29yZGluYXRlc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueSA9IGNvb3JkaW5hdGVzWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBcnJvdy5saW5rZWRIdG1sRWxlbWVudCA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEFycm93LmxpbmtlZEh0bWxFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKChlLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lLmluY2x1ZGVzKFwiYXJyb3ctZmllbGRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnJvdyA9IGdhbWUubWFwQXJyb3dzLmZpbmQoYXJyb3cgPT4gdGhpcy5zZWxlY3RlZEl0ZW0gPT09IGFycm93LmxpbmtlZEh0bWxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJyb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRBcnJvdyA9IGdhbWUubWFwQXJyb3dzLnNwbGljZShnYW1lLm1hcEFycm93cy5pbmRleE9mKGFycm93KSwgMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cuY29vcmRpbmF0ZXMueSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQXJyb3cubGlua2VkSHRtbEVsZW1lbnQgPSAoZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lLmFycm93cy5wdXNoKHNlbGVjdGVkQXJyb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0uc3R5bGUudG9wID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBnYW1lLmRyYXdBcnJvd3MoKTtcclxuICAgICAgICAgICAgICAgIGdhbWUucmVuZGVyU2NlbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWxUYWJsZVRvQXJyYXkoaHRtbFRhYmxlOiBIVE1MVGFibGVFbGVtZW50KTogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXVtdIHtcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShodG1sVGFibGUucm93cykubWFwKChyb3c6IEhUTUxUYWJsZVJvd0VsZW1lbnQpID0+IEFycmF5LmZyb20ocm93LmNlbGxzKSk7XHJcbiAgICAgICAgLy8g0L7QtNC90L7QvNC10YDQvdGL0Lkg0LzQsNGB0YHQuNCyXHJcbiAgICAgICAgLy8gcmV0dXJuIFsuLi5odG1sVGFibGUucm93c10ucmVkdWNlKChjZWxsczogSFRNTFRhYmxlQ2VsbEVsZW1lbnRbXSwgcm93OiBIVE1MVGFibGVSb3dFbGVtZW50KSA9PiBjZWxscy5jb25jYXQoWy4uLnJvdy5jZWxsc10pLCBbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlR2FtZVRhYmxlKCk6IEhUTUxUYWJsZUVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRhYmxlXCIpO1xyXG4gICAgICAgIHRhYmxlLmlkID0gXCJnYW1lLXRhYmxlXCI7XHJcbiAgICAgICAgY29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT05GLk1hcC5oZWlnaHQ7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBDT05GLk1hcC53aWR0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NOYW1lID0gYGdhbWUtZmllbGQgeC0ke2orMX0geS0ke2krMX1gO1xyXG4gICAgICAgICAgICAgICAgdGQuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0Qm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKHRCb2R5KTtcclxuICAgICAgICByZXR1cm4gdGFibGU7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQXJyb3dzVGFibGUoKSB7XHJcbiAgICAgICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgdGFibGUuaWQgPSBcInVpLXRhYmxlXCI7XHJcbiAgICAgICAgY29uc3QgdEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDT05GLkFycm93c1RhYmxlLmhlaWdodDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IENPTkYuQXJyb3dzVGFibGUud2lkdGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZC5zdHlsZS53aWR0aCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudFdpZHRofXB4YDtcclxuICAgICAgICAgICAgICAgIHRkLnN0eWxlLmhlaWdodCA9IGAke3RoaXMuaHRtbEdhbWVUYWJsZS5xdWVyeVNlbGVjdG9yKFwidGRcIik/LmNsaWVudEhlaWdodH1weGA7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgZGl2LmNsYXNzTmFtZSA9IGBhcnJvdy1maWVsZCB4LSR7aisxfSB5LSR7aSsxfWA7XHJcbiAgICAgICAgICAgICAgICBkaXYuc3R5bGUuekluZGV4ID0gJzEwJztcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS50b3AgPSBcIjBcIjtcclxuICAgICAgICAgICAgICAgIGRpdi5zdHlsZS5sZWZ0ID0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gKGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRkLmFwcGVuZENoaWxkKGRpdik7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmRDaGlsZCh0ZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdEJvZHkuYXBwZW5kQ2hpbGQodHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZCh0Qm9keSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IFVJIGZyb20gJy4vVUknO1xyXG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vUmVuZGVyJztcclxuaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcclxuaW1wb3J0IHsgbHZsMSwgbHZsMiwgbHZsNCB9IGZyb20gJy4vbGV2ZWxzJztcclxuXHJcbmNvbnN0IHVpOiBVSSA9IG5ldyBVSShcIiNnYW1lLXRhYmxlLXdyYXBwZXJcIiwgXCIjdWktdGFibGUtd3JhcHBlclwiKTtcclxuY29uc3QgcmVuZGVyOiBSZW5kZXIgPSBuZXcgUmVuZGVyKHVpKTtcclxuLy8gRklYTUU6IGRlbGV0ZSBleHBvcnRcclxuZXhwb3J0IGNvbnN0IGdhbWU6IEdhbWUgPSBuZXcgR2FtZShyZW5kZXIsIHVpKTtcclxuXHJcbmRvY3VtZW50Lm9uZHJhZ3N0YXJ0ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGFydEdhbWUoKSB7XHJcbiAgICBnYW1lLnN0YXJ0R2FtZSgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5kR2FtZSgpIHtcclxuICAgIGdhbWUuZW5kR2FtZSgpO1xyXG59XHJcblxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gICAgZ2FtZS5sb2FkTGV2ZWwobHZsMik7XHJcbiAgICBnYW1lLnJlbmRlclNjZW5lKCk7XHJcbiAgICBnYW1lLmRyYXdBcnJvd3MoKTtcclxufVxyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgZ2FtZS5yZW5kZXJTY2VuZSgpO1xyXG59IiwiZXhwb3J0IHsgbHZsMSB9IGZyb20gJy4vbHZsMSc7XHJcbmV4cG9ydCB7IGx2bDIgfSBmcm9tICcuL2x2bDInO1xyXG5leHBvcnQgeyBsdmw0IH0gZnJvbSAnLi9sdmw0JztcclxuXHJcbiIsImltcG9ydCB7IElMZXZlbCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbHZsMTogUmVhZG9ubHk8SUxldmVsPiA9IHtcclxuICAgIG1hcE9iamVjdHM6IHtcclxuICAgICAgICBzdGF0aWNGaWVsZHM6IHtcclxuICAgICAgICAgICAgXCJQaWxsYXJcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDFdLFxyXG4gICAgICAgICAgICAgICAgWzIwLCAxXSxcclxuICAgICAgICAgICAgICAgIFsxLCAxNF0sXHJcbiAgICAgICAgICAgICAgICBbMjAsIDE0XVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIkZlbmNlSFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMiwgMV0sIFszLCAxXSwgWzQsIDFdLCBbNSwgMV0sIFs2LCAxXSwgWzcsIDFdLCBbOCwgMV0sIFs5LCAxXSwgWzEwLCAxXSxcclxuICAgICAgICAgICAgICAgIFsxMSwgMV0sIFsxMiwgMV0sIFsxMywgMV0sIFsxNCwgMV0sIFsxNSwgMV0sIFsxNiwgMV0sIFsxNywgMV0sIFsxOCwgMV0sIFsxOSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMiwgMTRdLCBbMywgMTRdLCBbNCwgMTRdLCBbNSwgMTRdLCBbNiwgMTRdLCBbNywgMTRdLCBbOCwgMTRdLCBbOSwgMTRdLCBbMTAsIDE0XSxcclxuICAgICAgICAgICAgICAgIFsxMSwgMTRdLCBbMTIsIDE0XSwgWzEzLCAxNF0sIFsxNCwgMTRdLCBbMTUsIDE0XSwgWzE2LCAxNF0sIFsxNywgMTRdLCBbMTgsIDE0XSwgWzE5LCAxNF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiRmVuY2VWXCI6IFtcclxuICAgICAgICAgICAgICAgIFsxLCAyXSwgWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdLCBbMSwgN10sIFsxLCA4XSwgWzEsIDldLCBbMSwgMTBdLCBbMSwgMTFdLCBbMSwgMTJdLCBbMSwgMTNdLFxyXG4gICAgICAgICAgICAgICAgWzIwLCAyXSwgWzIwLCAzXSwgWzIwLCA0XSwgWzIwLCA1XSwgWzIwLCA2XSwgWzIwLCA3XSwgWzIwLCA4XSwgWzIwLCA5XSwgWzIwLCAxMF0sIFsyMCwgMTFdLCBbMjAsIDEyXSwgWzIwLCAxM10sXHJcbiAgICAgICAgICAgICAgICBbMTEsIDZdLCBbMTEsIDddLCBbMTEsIDhdLCBbMTEsIDldLCBbMTEsIDEwXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb2JsZXQ6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogMTYsIHk6IDMgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3dzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczoge3g6IDUsIHk6IDh9LFxyXG4gICAgICAgICAgICBkaXJlY3Rpb246IFwiUmlnaHRcIixcclxuICAgICAgICAgICAgY29sb3I6IFwiR3JleVwiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGFycm93czoge1xyXG4gICAgICAgIFwiUmVkXCI6IHtcclxuICAgICAgICAgICAgXCJVcFwiOiAxLFxyXG4gICAgICAgICAgICBcIlJpZ2h0XCI6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgSUxldmVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsdmwyOiBSZWFkb25seTxJTGV2ZWw+ID0ge1xyXG4gICAgbWFwT2JqZWN0czoge1xyXG4gICAgICAgIHN0YXRpY0ZpZWxkczoge1xyXG4gICAgICAgICAgICBcIlBpbGxhclwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMV0sIFsxMiwgMV0sIFsyMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMTIsIDZdLCBbMTUsIDZdLCBbMTcsIDZdLCBbMjAsIDZdLFxyXG4gICAgICAgICAgICAgICAgWzEsIDE0XSwgWzIwLCAxNF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZUhcIjogW1xyXG4gICAgICAgICAgICAgICAgWzIsIDFdLCBbMywgMV0sIFs0LCAxXSwgWzUsIDFdLCBbNiwgMV0sIFs3LCAxXSwgWzgsIDFdLCBbOSwgMV0sIFsxMCwgMV0sIFsxMSwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMTMsIDFdLCBbMTQsIDFdLCBbMTUsIDFdLCBbMTYsIDFdLCBbMTcsIDFdLCBbMTgsIDFdLCBbMTksIDFdLFxyXG4gICAgICAgICAgICAgICAgWzEzLCA2XSwgWzE0LCA2XSwgWzE4LCA2XSwgWzE5LCA2XSxcclxuICAgICAgICAgICAgICAgIFsyLCAxNF0sIFszLCAxNF0sIFs0LCAxNF0sIFs1LCAxNF0sIFs2LCAxNF0sIFs3LCAxNF0sIFs4LCAxNF0sIFs5LCAxNF0sIFsxMCwgMTRdLFxyXG4gICAgICAgICAgICAgICAgWzExLCAxNF0sIFsxMiwgMTRdLCBbMTMsIDE0XSwgWzE0LCAxNF0sIFsxNSwgMTRdLCBbMTYsIDE0XSwgWzE3LCAxNF0sIFsxOCwgMTRdLCBbMTksIDE0XSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZVZcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEsIDJdLCBbMSwgM10sIFsxLCA0XSwgWzEsIDVdLCBbMSwgNl0sIFsxLCA3XSxcclxuICAgICAgICAgICAgICAgIFsxLCA4XSwgWzEsIDldLCBbMSwgMTBdLCBbMSwgMTFdLCBbMSwgMTJdLCBbMSwgMTNdLFxyXG4gICAgICAgICAgICAgICAgWzEyLCAyXSwgWzEyLCAzXSwgWzEyLCA0XSwgWzEyLCA1XSxcclxuICAgICAgICAgICAgICAgIFsyMCwgMl0sIFsyMCwgM10sIFsyMCwgNF0sIFsyMCwgNV0sIFsyMCwgN10sXHJcbiAgICAgICAgICAgICAgICBbMjAsIDhdLCBbMjAsIDldLCBbMjAsIDEwXSwgWzIwLCAxMV0sIFsyMCwgMTJdLCBbMjAsIDEzXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhY3RpdmVGaWVsZHM6IHtcclxuICAgICAgICAgICAgXCJLZXlcIjogW1xyXG4gICAgICAgICAgICAgICAgWzEwLCA4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb2JsZXQ6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogMTYsIHk6IDMgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3dzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb29yZGluYXRlczogeyB4OiA1LCB5OiAzIH0sXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCJHcmV5XCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYXJyb3dzOiB7XHJcbiAgICAgICAgXCJSZWRcIjoge1xyXG4gICAgICAgICAgICBcIlVwXCI6IDEsXHJcbiAgICAgICAgICAgIFwiUmlnaHRcIjogMSxcclxuICAgICAgICAgICAgXCJEb3duXCI6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGx2bDI7IiwiaW1wb3J0IHsgSUxldmVsIH0gZnJvbSBcIi4uL0ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBsdmw0OiBSZWFkb25seTxJTGV2ZWw+ID0ge1xyXG4gICAgbWFwT2JqZWN0czoge1xyXG4gICAgICAgIHN0YXRpY0ZpZWxkczoge1xyXG4gICAgICAgICAgICBcIlBpbGxhclwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMSwgMV0sIFsxMSwgMV0sIFsyMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwgMTRdLCBbMTAsIDE0XSwgWzIwLCAxNF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJGZW5jZUhcIjogW1xyXG4gICAgICAgICAgICAgICAgWzIsIDFdLCBbMywgMV0sIFs0LCAxXSwgWzUsIDFdLCBbNiwgMV0sIFs3LCAxXSwgWzgsIDFdLCBbOSwgMV0sIFsxMCwgMV0sXHJcbiAgICAgICAgICAgICAgICBbMTIsIDFdLCBbMTMsIDFdLCBbMTQsIDFdLCBbMTUsIDFdLCBbMTYsIDFdLCBbMTcsIDFdLCBbMTgsIDFdLCBbMTksIDFdLFxyXG4gICAgICAgICAgICAgICAgWzIsIDE0XSwgWzMsIDE0XSwgWzQsIDE0XSwgWzUsIDE0XSwgWzYsIDE0XSwgWzcsIDE0XSwgWzgsIDE0XSwgWzksIDE0XSxcclxuICAgICAgICAgICAgICAgIFsxMSwgMTRdLCBbMTIsIDE0XSwgWzEzLCAxNF0sIFsxNCwgMTRdLCBbMTUsIDE0XSwgWzE2LCAxNF0sIFsxNywgMTRdLCBbMTgsIDE0XSwgWzE5LCAxNF0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiRmVuY2VWXCI6IFtcclxuICAgICAgICAgICAgICAgIFsxLCAyXSwgWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdLCBbMSwgN10sIFsxLCA4XSwgWzEsIDldLCBbMSwgMTBdLCBbMSwgMTFdLCBbMSwgMTJdLCBbMSwgMTNdLFxyXG4gICAgICAgICAgICAgICAgWzIwLCAyXSwgWzIwLCAzXSwgWzIwLCA0XSwgWzIwLCA1XSwgWzIwLCA2XSwgWzIwLCA3XSwgWzIwLCA4XSwgWzIwLCA5XSwgWzIwLCAxMF0sIFsyMCwgMTFdLCBbMjAsIDEyXSwgWzIwLCAxM10sXHJcbiAgICAgICAgICAgICAgICBbMTEsIDJdLCBbMTEsIDNdLCBbMTEsIDRdLCBbMTEsIDVdLCBbMTEsIDZdLFxyXG4gICAgICAgICAgICAgICAgWzEwLCA5XSwgWzEwLCAxMF0sIFsxMCwgMTFdLCBbMTAsIDEyXSwgWzEwLCAxM11cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgXCJTbGlkZVJpZ2h0XCI6IFtcclxuICAgICAgICAgICAgICAgIFs5LCA4XVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBcIlNsaWRlTGVmdFwiOiBbXHJcbiAgICAgICAgICAgICAgICBbMTMsIDhdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFwiQmxvY2tcIjogW1xyXG4gICAgICAgICAgICAgICAgWzExLCA3XSwgWzEwLCA4XSwgWzEyLCA4XVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb2JpbGVGaWVsZHM6IHtcclxuICAgICAgICAgICAgXCJIYXlCYWxlXCI6IFtcclxuICAgICAgICAgICAgICAgIFsxMSwgMTBdXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hcEFycm93czoge1xyXG4gICAgICAgICAgICBcIlJlZFwiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogMTEsIHk6IDkgfSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnb2JsZXQ6IHtcclxuICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHsgeDogMTYsIHk6IDMgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb3dzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiB7IHg6IDUsIHk6IDggfSxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogXCJSaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiR3JleVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiB7IHg6IDEzLCB5OiAxMSB9LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIkxlZnRcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIkdyZXlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYXJyb3dzOiB7XHJcbiAgICAgICAgXCJSZWRcIjoge1xyXG4gICAgICAgICAgICBcIlVwXCI6IDJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsdmw0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=