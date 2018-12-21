(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".screen, .main, .header, .footer {\r\n    width: 100%;\r\n}\r\n\r\n.screen {\r\n    height: 100%;\r\n    background-color:lightblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.header {\r\n    height: 5em;\r\n    background-color: lightgoldenrodyellow;\r\n    flex-direction: row;\r\n    display:flex;\r\n    justify-content: space-between;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"screen\">\n  <div class=\"header\">\n    <div class=\"stats\">\n    Hull: {{state.health.current}}/{{state.health.maximum}} <br/>\n    Energy: {{state.energy.current}}/{{state.energy.maximum}} <br/>\n    Shields: {{state.shield}} <br/>\n  </div>\n  <div>${{state.money}}</div>\n  <div class=\"stats\" style=\"text-align: right;\">\n    Hull: {{state.baddie.health.current}}/{{state.baddie.health.maximum}} <br/>\n    Shields: {{state.baddie.shield}} <br/>\n  </div>\n  </div>\n  <ng-container [ngSwitch]=\"state.view\">\n    <battle-screen *ngSwitchCase=\"'Battle'\"></battle-screen>\n    <store-screen *ngSwitchCase=\"'Store'\"></store-screen>\n    <map-screen *ngSwitchCase=\"'Map'\"></map-screen>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/command.service */ "./src/app/logic/command.service.ts");
/* harmony import */ var _logic_game_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/game-state.service */ "./src/app/logic/game-state.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ui_particles_particles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/particles/particles.component */ "./src/app/ui/particles/particles.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(commandService, stateService) {
        this.commandService = commandService;
        this.title = 'spire';
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.state = stateService.state;
        var self = this;
        /*
        stateService.subscribe({
          baddieHealthLoss: amount =>{
            const baddieRect = self.baddieRef.nativeElement.getBoundingClientRect();
            const explosion = self.particles.spawn(ExplosionComponent).instance;
            explosion.x=baddieRect.left+baddieRect.width/2;
            explosion.y=baddieRect.top+baddieRect.height/2;
            setTimeout(_=>{
            const text:any = self.particles.spawn(DamageTextComponent).instance;
            text.value=amount;
            text.x = baddieRect.left+baddieRect.width/2;
            text.y = baddieRect.top;
            },250);
          }
        },this.unsubscribe);
        */
    }
    Object.defineProperty(AppComponent.prototype, "cards", {
        get: function () { return this.state.hand; },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.commandService.startGame();
    };
    AppComponent.prototype.startDrag = function (card) {
        this.selectedCard = card;
    };
    AppComponent.prototype.playErrorMessage = function () {
        if (!this.selectedCard)
            return "No card selected";
        if (this.selectedCard.energyCost > this.state.energy.current)
            return "Not enough energy";
        return false;
    };
    AppComponent.prototype.verb = function () {
        if (!this.selectedCard)
            return "";
        switch (this.selectedCard.type) {
            case "Engineering": return "Make it so!";
            case "Attack": return "Fire!";
            case "Drone": return "Launch";
            case "Cargo": return "Jettison";
        }
    };
    AppComponent.prototype.style = function (i) {
        var index = i - Math.floor(this.cards.length / 2);
        var posX = 0;
        var posY = Math.abs(index) * (20);
        var rotation = index * 5;
        return { 'transform': "translateY(" + posY + "px) translateX(" + posX + "px) rotateZ(" + rotation + "deg)" };
    };
    AppComponent.prototype.play = function () {
        if (!this.selectedCard)
            return;
        this.commandService.play(this.selectedCard);
    };
    AppComponent.prototype.endTurn = function () {
        this.commandService.endTurn();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('particles'),
        __metadata("design:type", _ui_particles_particles_component__WEBPACK_IMPORTED_MODULE_4__["ParticlesComponent"])
    ], AppComponent.prototype, "particles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('player'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "playerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('baddie'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "baddieRef", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_command_service__WEBPACK_IMPORTED_MODULE_1__["CommandService"],
            _logic_game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ui_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/card/card.component */ "./src/app/ui/card/card.component.ts");
/* harmony import */ var _ui_particles_particles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/particles/particles.component */ "./src/app/ui/particles/particles.component.ts");
/* harmony import */ var _ui_battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/battle-screen/battle-screen.component */ "./src/app/ui/battle-screen/battle-screen.component.ts");
/* harmony import */ var _ui_particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/particles/damage-text/damage-text.component */ "./src/app/ui/particles/damage-text/damage-text.component.ts");
/* harmony import */ var _ui_player_ship_player_ship_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/player-ship/player-ship.component */ "./src/app/ui/player-ship/player-ship.component.ts");
/* harmony import */ var _ui_shield_shield_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/shield/shield.component */ "./src/app/ui/shield/shield.component.ts");
/* harmony import */ var _ui_particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/particles/explosion/explosion.component */ "./src/app/ui/particles/explosion/explosion.component.ts");
/* harmony import */ var _ui_store_screen_store_screen_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/store-screen/store-screen.component */ "./src/app/ui/store-screen/store-screen.component.ts");
/* harmony import */ var _ui_map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/map-screen/map-screen.component */ "./src/app/ui/map-screen/map-screen.component.ts");
/* harmony import */ var _remove_wrapper_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remove-wrapper.directive */ "./src/app/remove-wrapper.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _ui_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                _ui_particles_particles_component__WEBPACK_IMPORTED_MODULE_6__["ParticlesComponent"],
                _ui_battle_screen_battle_screen_component__WEBPACK_IMPORTED_MODULE_7__["BattleScreenComponent"],
                _ui_particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_8__["DamageTextComponent"],
                _ui_player_ship_player_ship_component__WEBPACK_IMPORTED_MODULE_9__["PlayerShipComponent"],
                _ui_shield_shield_component__WEBPACK_IMPORTED_MODULE_10__["ShieldComponent"],
                _ui_particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_11__["ExplosionComponent"],
                _ui_store_screen_store_screen_component__WEBPACK_IMPORTED_MODULE_12__["StoreScreenComponent"],
                _ui_map_screen_map_screen_component__WEBPACK_IMPORTED_MODULE_13__["MapScreenComponent"],
                _remove_wrapper_directive__WEBPACK_IMPORTED_MODULE_14__["RemoveWrapperDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            entryComponents: [_ui_particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_8__["DamageTextComponent"], _ui_particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_11__["ExplosionComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/logic/Baddie.ts":
/*!*********************************!*\
  !*** ./src/app/logic/Baddie.ts ***!
  \*********************************/
/*! exports provided: badShip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "badShip", function() { return badShip; });
/* harmony import */ var _BaddieAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaddieAction */ "./src/app/logic/BaddieAction.ts");

var badShip = function () { return ({
    health: {
        maximum: 50,
        current: 50
    },
    shield: 10,
    plan: [_BaddieAction__WEBPACK_IMPORTED_MODULE_0__["attack"](20)],
    act: function (v) { return v.damagePlayer(20); }
}); };


/***/ }),

/***/ "./src/app/logic/BaddieAction.ts":
/*!***************************************!*\
  !*** ./src/app/logic/BaddieAction.ts ***!
  \***************************************/
/*! exports provided: attack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attack", function() { return attack; });
var attack = function (damage) { return ({
    id: "attack",
    name: "Attack",
    apply: function (v) { return v.damagePlayer(damage); }
}); };


/***/ }),

/***/ "./src/app/logic/Card.ts":
/*!*******************************!*\
  !*** ./src/app/logic/Card.ts ***!
  \*******************************/
/*! exports provided: laser, shield, reactorOverload, attackDrone, spices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "laser", function() { return laser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shield", function() { return shield; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactorOverload", function() { return reactorOverload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attackDrone", function() { return attackDrone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spices", function() { return spices; });
var CardType;
(function (CardType) {
    CardType["Attack"] = "Attack";
    CardType["Engineering"] = "Engineering";
    CardType["Drone"] = "Drone";
    CardType["Cargo"] = "Cargo";
})(CardType || (CardType = {}));
var laser = function () { return ({
    id: 0,
    purchasePrice: -1,
    name: "laser",
    title: "Laser",
    type: "Attack",
    energyCost: 1,
    description: "5 Damage",
    apply: function (v) { return v.damageBaddie(5); }
}); };
var shield = function () { return ({
    id: 0,
    purchasePrice: -1,
    name: "shield",
    title: "Shield",
    type: "Engineering",
    energyCost: 1,
    description: "+5 Shield",
    apply: function (v) { return v.addShields(5); }
}); };
var reactorOverload = function () { return ({
    id: 0,
    purchasePrice: 50,
    name: "reactorOverload",
    title: "Reactor overload",
    type: "Engineering",
    energyCost: 0,
    description: "+1 Energy",
    apply: function (v) { return v.addEnergy(1); }
}); };
var attackDrone = function () { return ({
    id: 0,
    purchasePrice: 25,
    name: "attackDrone",
    title: "Combat Wasp",
    type: "Drone",
    energyCost: 3,
    description: "At the start of your turn, deal 1 damage to a random enemy (not working yet)",
    apply: function (v) { return console.log("drone launched"); }
}); };
var spices = function () { return ({
    id: 0,
    purchasePrice: 10,
    name: "spices",
    title: "Exotic Spices",
    type: "Cargo",
    energyCost: 0,
    description: "Cannot be played. Can be sold. Sale prices increases wth each jump taken",
    apply: function (v) { return null; }
}); };


/***/ }),

/***/ "./src/app/logic/command.service.ts":
/*!******************************************!*\
  !*** ./src/app/logic/command.service.ts ***!
  \******************************************/
/*! exports provided: CommandService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function() { return CommandService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _game_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-state.service */ "./src/app/logic/game-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandService = /** @class */ (function () {
    function CommandService(state) {
        this.state = state;
    }
    CommandService.prototype.jump = function (planet) {
        this.state.jump(planet);
    };
    CommandService.prototype.buy = function (i) {
        this.state.buy(i);
    };
    CommandService.prototype.play = function (card) {
        this.state.play(card);
    };
    CommandService.prototype.endTurn = function () {
        this.state.endTurn();
    };
    CommandService.prototype.startGame = function () {
        this.state.startGame();
    };
    CommandService.prototype.startJump = function () {
        this.state.startJump();
    };
    CommandService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_game_state_service__WEBPACK_IMPORTED_MODULE_1__["GameStateService"]])
    ], CommandService);
    return CommandService;
}());



/***/ }),

/***/ "./src/app/logic/game-state.service.ts":
/*!*********************************************!*\
  !*** ./src/app/logic/game-state.service.ts ***!
  \*********************************************/
/*! exports provided: GameStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStateService", function() { return GameStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/app/logic/state.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var defaultHandlers = {
    baddieHealthLoss: function (_) { return null; },
    playerBlocksDamage: function (_) { return null; },
    baddieBlocksDamage: function (_) { return null; },
    playerHealthLoss: function (_) { return null; },
};
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
var GameStateService = /** @class */ (function () {
    function GameStateService() {
        this.events = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.state = _state__WEBPACK_IMPORTED_MODULE_1__["START_STATE"];
    }
    GameStateService.prototype.startBattle = function (baddie) {
        this.state.view = _state__WEBPACK_IMPORTED_MODULE_1__["View"].Battle;
        this.state.baddie = baddie;
    };
    GameStateService.prototype.startJump = function () {
        this.state.view = _state__WEBPACK_IMPORTED_MODULE_1__["View"].Map;
    };
    GameStateService.prototype.jump = function (location) {
        this.state.level++;
        location.land(this);
    };
    GameStateService.prototype.buy = function (i) {
        var card = this.state.store.forSale[i];
        if (card.purchasePrice > this.state.money)
            return;
        this.state.money -= card.purchasePrice;
        this.state.store.forSale.splice(i, 1);
        this.state.deck.push(card);
    };
    GameStateService.prototype.addEnergy = function (amount) {
        this.state.energy.current += amount;
    };
    GameStateService.prototype.startGame = function () {
        this.state = _state__WEBPACK_IMPORTED_MODULE_1__["START_STATE"];
        this.state.drawStack = this.state.deck.slice();
        shuffle(this.state.drawStack);
        this.startTurn();
    };
    GameStateService.prototype.subscribe = function (handler, terminator) {
        var allHandlers = __assign({}, defaultHandlers);
        Object.assign(allHandlers, handler);
        this.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(terminator))
            .subscribe(function (v) {
            v(allHandlers);
        });
    };
    GameStateService.prototype.damagePlayer = function (damage) {
        var blockedDamage = Math.min(damage, this.state.shield);
        if (blockedDamage > 0) {
            this.events.next(function (v) { return v.playerBlocksDamage(blockedDamage); });
            this.state.shield -= blockedDamage;
        }
        var effectiveDamage = Math.min(this.state.health.current, damage - blockedDamage);
        this.state.health.current -= effectiveDamage;
        this.events.next(function (v) { return v.playerHealthLoss(effectiveDamage); });
        if (this.state.health.current <= 0) {
            this.killPlayer();
        }
    };
    GameStateService.prototype.killPlayer = function () {
        alert("Game over man!");
    };
    GameStateService.prototype.discard = function (card) {
        var index = this.state.hand.indexOf(card);
        if (index == -1)
            return;
        this.state.hand.splice(index, 1);
        this.state.discards.push(card);
    };
    GameStateService.prototype.damageBaddie = function (damage) {
        var blockedDamage = Math.min(damage, this.state.baddie.shield);
        if (blockedDamage > 0) {
            this.events.next(function (v) { return v.baddieBlocksDamage(blockedDamage); });
            this.state.baddie.shield -= blockedDamage;
        }
        var effectiveDamage = Math.min(this.state.baddie.health.current, damage - blockedDamage);
        this.state.baddie.health.current -= effectiveDamage;
        this.events.next(function (v) { return v.baddieHealthLoss(effectiveDamage); });
        if (this.state.baddie.health.current <= 0) {
            this.killBaddie();
        }
    };
    GameStateService.prototype.killBaddie = function () {
        alert("Victory!");
    };
    GameStateService.prototype.addShields = function (shields) {
        this.state.shield += shields;
    };
    GameStateService.prototype.play = function (card) {
        if (this.state.energy.current < card.energyCost)
            return;
        this.state.energy.current -= card.energyCost;
        card.apply(this);
        switch (card.type) {
            case "Cargo":
                this.jettison(card);
                break;
            case "Attack":
            case "Engineering":
                this.discard(card);
                break;
            case "Drone":
                this.discard(card);
                break;
        }
        this.discard(card);
    };
    GameStateService.prototype.jettison = function (card) {
        this.state.deck.splice(this.state.deck.indexOf(card), 1);
        this.state.hand.splice(this.state.hand.indexOf(card), 1);
    };
    GameStateService.prototype.endTurn = function () {
        this.state.baddie.act(this);
        this.startTurn();
    };
    GameStateService.prototype.refreshDrawStack = function () {
        this.state.drawStack = this.state.drawStack.concat(this.state.discards);
        shuffle(this.state.drawStack);
        this.state.discards = [];
    };
    GameStateService.prototype.startTurn = function () {
        this.state.shield = 0;
        this.state.energy.current = this.state.energy.maximum;
        for (var _i = 0, _a = this.state.hand.slice(); _i < _a.length; _i++) {
            var card = _a[_i];
            this.discard(card);
        }
        for (var i = 0; i < 5; i++) {
            this.draw();
        }
    };
    GameStateService.prototype.draw = function () {
        if (this.state.drawStack.length == 0 && this.state.discards.length > 0)
            this.refreshDrawStack();
        if (this.state.drawStack.length == 0)
            return;
        var card = this.state.drawStack.pop();
        this.state.hand.push(card);
    };
    GameStateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GameStateService);
    return GameStateService;
}());



/***/ }),

/***/ "./src/app/logic/planet.ts":
/*!*********************************!*\
  !*** ./src/app/logic/planet.ts ***!
  \*********************************/
/*! exports provided: SAMPLE_MAP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAMPLE_MAP", function() { return SAMPLE_MAP; });
/* harmony import */ var src_app_logic_Baddie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/logic/Baddie */ "./src/app/logic/Baddie.ts");

;
var SAMPLE_MAP = [
    [
        { name: "A desert planet",
            type: "desert-planet",
            land: function (v) { return v.startBattle(Object(src_app_logic_Baddie__WEBPACK_IMPORTED_MODULE_0__["badShip"])()); }
        },
        { name: "A water planet",
            type: "water-planet",
            land: function (v) { return v.startBattle(Object(src_app_logic_Baddie__WEBPACK_IMPORTED_MODULE_0__["badShip"])()); }
        }
    ]
];


/***/ }),

/***/ "./src/app/logic/state.ts":
/*!********************************!*\
  !*** ./src/app/logic/state.ts ***!
  \********************************/
/*! exports provided: View, START_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "START_STATE", function() { return START_STATE; });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./src/app/logic/Card.ts");
/* harmony import */ var _Baddie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Baddie */ "./src/app/logic/Baddie.ts");
/* harmony import */ var _planet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./planet */ "./src/app/logic/planet.ts");



var View;
(function (View) {
    View["Store"] = "Store";
    View["Map"] = "Map";
    View["Battle"] = "Battle";
})(View || (View = {}));
var START_STATE = {
    level: 0,
    map: _planet__WEBPACK_IMPORTED_MODULE_2__["SAMPLE_MAP"],
    view: View.Store,
    money: 100,
    deck: [
        Object(_Card__WEBPACK_IMPORTED_MODULE_0__["laser"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["laser"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["laser"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["laser"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["laser"])(),
        Object(_Card__WEBPACK_IMPORTED_MODULE_0__["shield"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["shield"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["shield"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["shield"])(), Object(_Card__WEBPACK_IMPORTED_MODULE_0__["shield"])()
    ],
    drawStack: [],
    hand: [],
    discards: [],
    trash: [],
    energy: {
        maximum: 3,
        current: 3
    },
    health: {
        maximum: 80,
        current: 80
    },
    shield: 0,
    baddie: Object(_Baddie__WEBPACK_IMPORTED_MODULE_1__["badShip"])(),
    store: {
        forSale: [
            Object(_Card__WEBPACK_IMPORTED_MODULE_0__["reactorOverload"])(),
            Object(_Card__WEBPACK_IMPORTED_MODULE_0__["attackDrone"])(),
            Object(_Card__WEBPACK_IMPORTED_MODULE_0__["spices"])(),
            Object(_Card__WEBPACK_IMPORTED_MODULE_0__["spices"])(),
        ]
    }
};


/***/ }),

/***/ "./src/app/remove-wrapper.directive.ts":
/*!*********************************************!*\
  !*** ./src/app/remove-wrapper.directive.ts ***!
  \*********************************************/
/*! exports provided: RemoveWrapperDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveWrapperDirective", function() { return RemoveWrapperDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RemoveWrapperDirective = /** @class */ (function () {
    function RemoveWrapperDirective(el) {
        this.el = el;
        debugger;
        var parentElement = el.nativeElement.parentElement;
        var element = el.nativeElement;
        parentElement.removeChild(element);
        parentElement.parentNode.insertBefore(element, parentElement.nextSibling);
        parentElement.parentNode.removeChild(parentElement);
    }
    RemoveWrapperDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[remove-wrapper]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], RemoveWrapperDirective);
    return RemoveWrapperDirective;
}());



/***/ }),

/***/ "./src/app/ui/battle-screen/battle-screen.component.css":
/*!**************************************************************!*\
  !*** ./src/app/ui/battle-screen/battle-screen.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    flex-grow: 99;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n .main, .footer {\r\n    width: 100%;\r\n}\r\n\r\n .main{\r\n    background-color:lightgray;\r\n    width:100%;\r\n    height:100%;\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    background-size:cover;\r\n    flex-grow:999;\r\n}\r\n\r\n .footer {\r\n    height: 5em;\r\n    background-color:lightslategray;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n}\r\n\r\n .hand {\r\n    display: flex;\r\n    flex-direction:row;\r\n}\r\n\r\n .card {\r\n    width: 200px;\r\n    height: 300px;\r\n    background-color:orange;\r\n    position: relative;\r\n    margin-top:-100px;\r\n    margin-left:-75px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n .hand .card:hover{\r\n    -webkit-transform: translateY(-100px)!important;\r\n            transform: translateY(-100px)!important;\r\n    transition: margin 0.5s;\r\n    z-index:50;\r\n}\r\n\r\n .cdk-drag-placeholder {\r\n    margin:auto;\r\n    position: absolute;\r\n    color: green;\r\n    font-size: 1.5em;\r\n    border: dashed green 2px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    width:50%;\r\n    height:50%;\r\n}\r\n\r\n .cdk-drag-placeholder.error {\r\n    color:red;\r\n    border: dashed red 2px;\r\n}\r\n\r\n .cdk-drag-animating {\r\n  /*transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);*/\r\n}\r\n\r\n .hand > .cdk-drag-placeholder {\r\n    display:none;\r\n}\r\n\r\n .cdk-drag-preview {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  -webkit-transform: unset;\r\n          transform: unset;\r\n}"

/***/ }),

/***/ "./src/app/ui/battle-screen/battle-screen.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ui/battle-screen/battle-screen.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<particles #particles></particles>\n  <div class=\"main\" cdkDropList (cdkDropListDropped)=\"play($event)\"\n  #playDropRegion=\"cdkDropList\"\n    [cdkDropListConnectedTo]=\"[handDropRegion]\"\n  >\n  <div style=\"position:static;\">\n      <img #player src=\"assets/hero.png\" style=\"width:300px;\"/>\n      <shield *ngIf=\"state.shield>0\"></shield>\n  </div>\n  <div style=\"position:unset;\">\n    <img #baddie src=\"assets/baddie.png\" style=\"width:300px;\"/>\n      <shield *ngIf=\"state.baddie.shield>0\"></shield>\n  </div>\n</div>\n  <div class=\"footer\">\n    <div class=\"deck\">Draw stack: {{state.drawStack.length}}\n    </div>\n    <div class=\"hand\" \n    #handDropRegion=\"cdkDropList\"\n    [cdkDropListConnectedTo]=\"[playDropRegion]\"\n    cdkDropList cdkDropListOrientation=\"horizontal\"\n    >\n      <div class=\"card\" *ngFor=\"let card of cards; let i = index\" \n      [ngStyle] = \"style(i)\"  cdkDrag\n      (cdkDragStarted)=\"startDrag(card)\"\n      >\n      <div class=\"example-custom-placeholder\" *cdkDragPlaceholder [class.error]=\"playErrorMessage()\">\n        {{ playErrorMessage() || verb() }}</div>\n        <card [card]=\"card\"></card>\n    </div>\n    </div>\n    <div class=\"discards\">\n      Discards: {{state.discards.length}}<br/>\n      <button (click)=\"endTurn()\">End Turn</button>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/ui/battle-screen/battle-screen.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/battle-screen/battle-screen.component.ts ***!
  \*************************************************************/
/*! exports provided: BattleScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BattleScreenComponent", function() { return BattleScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _particles_particles_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../particles/particles.component */ "./src/app/ui/particles/particles.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _logic_command_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../logic/command.service */ "./src/app/logic/command.service.ts");
/* harmony import */ var _logic_game_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../logic/game-state.service */ "./src/app/logic/game-state.service.ts");
/* harmony import */ var _particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../particles/explosion/explosion.component */ "./src/app/ui/particles/explosion/explosion.component.ts");
/* harmony import */ var _particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../particles/damage-text/damage-text.component */ "./src/app/ui/particles/damage-text/damage-text.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BattleScreenComponent = /** @class */ (function () {
    function BattleScreenComponent(commandService, stateService) {
        this.commandService = commandService;
        this.title = 'spire';
        this.unsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.state = stateService.state;
        var self = this;
        stateService.subscribe({
            baddieHealthLoss: function (amount) {
                var rect = self.baddieRef.nativeElement.getBoundingClientRect();
                var explosion = self.particles.spawn(_particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_5__["ExplosionComponent"]).instance;
                explosion.x = rect.left + rect.width / 2;
                explosion.y = rect.top + rect.height / 2;
                setTimeout(function (_) {
                    var text = self.particles.spawn(_particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_6__["DamageTextComponent"]).instance;
                    text.value = amount;
                    text.x = rect.left + rect.width / 2;
                    text.y = rect.top;
                }, 250);
            },
            playerHealthLoss: function (amount) {
                var rect = self.playerRef.nativeElement.getBoundingClientRect();
                var explosion = self.particles.spawn(_particles_explosion_explosion_component__WEBPACK_IMPORTED_MODULE_5__["ExplosionComponent"]).instance;
                explosion.x = rect.left + rect.width / 2;
                explosion.y = rect.top + rect.height / 2;
                setTimeout(function (_) {
                    var text = self.particles.spawn(_particles_damage_text_damage_text_component__WEBPACK_IMPORTED_MODULE_6__["DamageTextComponent"]).instance;
                    text.value = amount;
                    text.x = rect.left + rect.width / 2;
                    text.y = rect.top;
                }, 250);
            }
        }, this.unsubscribe);
    }
    Object.defineProperty(BattleScreenComponent.prototype, "cards", {
        get: function () { return this.state.hand; },
        enumerable: true,
        configurable: true
    });
    BattleScreenComponent.prototype.ngOnInit = function () {
        this.commandService.startGame();
    };
    BattleScreenComponent.prototype.startDrag = function (card) {
        this.selectedCard = card;
    };
    BattleScreenComponent.prototype.playErrorMessage = function () {
        if (!this.selectedCard)
            return "No card selected";
        if (this.selectedCard.energyCost > this.state.energy.current)
            return "Not enough energy";
        return false;
    };
    BattleScreenComponent.prototype.verb = function () {
        if (!this.selectedCard)
            return "";
        switch (this.selectedCard.type) {
            case "Engineering": return "Make it so!";
            case "Attack": return "Fire!";
            case "Drone": return "Launch";
            case "Cargo": return "Jettison";
        }
    };
    BattleScreenComponent.prototype.style = function (i) {
        var index = i - Math.floor(this.cards.length / 2);
        var posX = 0;
        var posY = Math.abs(index) * (20);
        var rotation = index * 5;
        return { 'transform': "translateY(" + posY + "px) translateX(" + posX + "px) rotateZ(" + rotation + "deg)" };
    };
    BattleScreenComponent.prototype.play = function () {
        if (!this.selectedCard)
            return;
        this.commandService.play(this.selectedCard);
    };
    BattleScreenComponent.prototype.endTurn = function () {
        this.commandService.endTurn();
    };
    BattleScreenComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('particles'),
        __metadata("design:type", _particles_particles_component__WEBPACK_IMPORTED_MODULE_1__["ParticlesComponent"])
    ], BattleScreenComponent.prototype, "particles", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('player'),
        __metadata("design:type", Object)
    ], BattleScreenComponent.prototype, "playerRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('baddie'),
        __metadata("design:type", Object)
    ], BattleScreenComponent.prototype, "baddieRef", void 0);
    BattleScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'battle-screen',
            template: __webpack_require__(/*! ./battle-screen.component.html */ "./src/app/ui/battle-screen/battle-screen.component.html"),
            styles: [__webpack_require__(/*! ./battle-screen.component.css */ "./src/app/ui/battle-screen/battle-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_command_service__WEBPACK_IMPORTED_MODULE_3__["CommandService"],
            _logic_game_state_service__WEBPACK_IMPORTED_MODULE_4__["GameStateService"]])
    ], BattleScreenComponent);
    return BattleScreenComponent;
}());



/***/ }),

/***/ "./src/app/ui/card/card.component.css":
/*!********************************************!*\
  !*** ./src/app/ui/card/card.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 200px;\r\n    height: 300px;\r\n}\r\n\r\n.attack {\r\n    background-color:lightcoral;\r\n}\r\n\r\n.engineering {\r\n    background-color:lightskyblue;\r\n}\r\n\r\n.cargo{\r\n    background-color:lightyellow;\r\n}\r\n\r\n.drone{\r\n    background-color:lightgray;\r\n}\r\n\r\n.title {\r\n    width:100%;\r\n    font-size: 1.2em;\r\n    margin-top:0.2em;\r\n    margin-bottom:0.2em;\r\n    border-top:solid black 1px;\r\n    border-bottom:solid black 1px;\r\n}\r\n\r\n.description {\r\n    border: dashed black 1px; \r\n    width: 180px;\r\n    height:180px;\r\n    margin:auto;\r\n    padding:0.2em;\r\n}\r\n\r\n.energyCost {\r\n  top:-.25em; \r\n  left:-.25em; \r\n  border: solid black 1px;\r\n  position: absolute;\r\n  height: 1.3em;\r\n  width: 1.3em;\r\n  background-color:gold;\r\n  border-radius: 50%;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  font-size: 1.2em;\r\n  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.5);\r\n}"

/***/ }),

/***/ "./src/app/ui/card/card.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/card/card.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position:relative;\">\r\n<div class=\"card\" \r\n[class.attack]=\"card.type==='Attack'\"\r\n[class.cargo]=\"card.type==='Cargo'\"\r\n[class.engineering]=\"card.type==='Engineering'\"\r\n[class.drone]=\"card.type==='Drone'\"\r\n>\r\n<div class=\"energyCost\">{{card.energyCost}}</div>\r\n<div class=\"title\">{{card.title}}</div>\r\n<!--<img [src]=\"'assets/cards/'+card.name+'.png'\"/>-->\r\n<div class=\"type\">{{card.type}}</div>\r\n<div class=\"description\">{{card.description}}</div>\r\n</div> \r\n</div>"

/***/ }),

/***/ "./src/app/ui/card/card.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/card/card.component.ts ***!
  \*******************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "card", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/ui/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/ui/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/ui/map-screen/map-screen.component.css":
/*!********************************************************!*\
  !*** ./src/app/ui/map-screen/map-screen.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map {\r\n    display:flex;\r\n    flex-direction: row;\r\n    justify-content: space-evenly;\r\n    text-align: center;\r\n    background-color:black;\r\n    color:white;\r\n}\r\nh1 {\r\n    text-align: center;\r\n}\r\n.location {\r\n    width:200px;\r\n    height:200px;\r\n    border-radius: 10px;\r\n    border:dashed blue 2px;\r\n    flex-direction: column;\r\n    display:flex;\r\n    justify-content: space-between;\r\n}\r\n.planet {\r\n  width: 100px;\r\n  height: 100px;\r\n  border-radius: 50%;\r\n  -webkit-transform: rotate(-15deg);\r\n          transform: rotate(-15deg);\r\n  margin: auto;\r\n}\r\n.water-planet {\r\n  background: linear-gradient(to bottom, lightblue 1%, blue 50%, darkblue 100%);\r\n}\r\n.desert-planet {\r\n  background: linear-gradient(to bottom, lightgoldenrodyellow 1%, goldenrod 50%, brown 100%);\r\n}"

/***/ }),

/***/ "./src/app/ui/map-screen/map-screen.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/map-screen/map-screen.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Select Jump</h1>\n<div class=\"map\">\n<div *ngFor=\"let location of state.map[state.level]\" class=\"location\">\n  <div class=\"planet\" [ngClass]=\"location.type\"></div>\n  {{location.name}} <button (click)=\"jump(location)\">Jump</button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/ui/map-screen/map-screen.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/map-screen/map-screen.component.ts ***!
  \*******************************************************/
/*! exports provided: MapScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapScreenComponent", function() { return MapScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_command_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/command.service */ "./src/app/logic/command.service.ts");
/* harmony import */ var _logic_game_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/game-state.service */ "./src/app/logic/game-state.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapScreenComponent = /** @class */ (function () {
    function MapScreenComponent(commandService, stateService) {
        this.commandService = commandService;
        this.state = stateService.state;
    }
    MapScreenComponent.prototype.jump = function (location) {
        this.commandService.jump(location);
    };
    MapScreenComponent.prototype.ngOnInit = function () {
    };
    MapScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'map-screen',
            template: __webpack_require__(/*! ./map-screen.component.html */ "./src/app/ui/map-screen/map-screen.component.html"),
            styles: [__webpack_require__(/*! ./map-screen.component.css */ "./src/app/ui/map-screen/map-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_command_service__WEBPACK_IMPORTED_MODULE_1__["CommandService"],
            _logic_game_state_service__WEBPACK_IMPORTED_MODULE_2__["GameStateService"]])
    ], MapScreenComponent);
    return MapScreenComponent;
}());



/***/ }),

/***/ "./src/app/ui/particles/damage-text/damage-text.component.css":
/*!********************************************************************!*\
  !*** ./src/app/ui/particles/damage-text/damage-text.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    position:fixed;\r\n    top: 50px;\r\n    left: 50px;\r\n    font-size: 3em;\r\n    color:black;\r\n    text-shadow: 0 0 0.2em #FF0000;\r\n}"

/***/ }),

/***/ "./src/app/ui/particles/damage-text/damage-text.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/ui/particles/damage-text/damage-text.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"d\" \n[style.top.px]=\"y\" \n[style.left.px]=\"x\" \n[@animate]=\"'finished'\"\n(@animate.done)=\"done($event)\"\n>\n  {{value}}\n</div>\n"

/***/ }),

/***/ "./src/app/ui/particles/damage-text/damage-text.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/ui/particles/damage-text/damage-text.component.ts ***!
  \*******************************************************************/
/*! exports provided: DamageTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DamageTextComponent", function() { return DamageTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DamageTextComponent = /** @class */ (function () {
    function DamageTextComponent() {
        this.value = 0;
        this.x = 0;
        this.y = 0;
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DamageTextComponent.prototype.done = function (event) {
        this.destroy.emit();
    };
    DamageTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DamageTextComponent.prototype, "destroy", void 0);
    DamageTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-damage-text',
            template: __webpack_require__(/*! ./damage-text.component.html */ "./src/app/ui/particles/damage-text/damage-text.component.html"),
            styles: [__webpack_require__(/*! ./damage-text.component.css */ "./src/app/ui/particles/damage-text/damage-text.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('finished', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateY(-100px)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => finished', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s')
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], DamageTextComponent);
    return DamageTextComponent;
}());



/***/ }),

/***/ "./src/app/ui/particles/explosion/explosion.component.css":
/*!****************************************************************!*\
  !*** ./src/app/ui/particles/explosion/explosion.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    position:fixed;\r\n    margin-left:-38px;\r\n    margin-top:-38px;\r\n    width: 96px;\r\n    height: 96px;\r\n    background: url('/assets/explosion.png') left center;\r\n}"

/***/ }),

/***/ "./src/app/ui/particles/explosion/explosion.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/ui/particles/explosion/explosion.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.top.px]=\"y\" \n     [style.left.px]=\"x\" \n    [@animate]=\"'finished'\"\n    (@animate.done)=\"done($event)\"\n></div>"

/***/ }),

/***/ "./src/app/ui/particles/explosion/explosion.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/ui/particles/explosion/explosion.component.ts ***!
  \***************************************************************/
/*! exports provided: ExplosionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplosionComponent", function() { return ExplosionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExplosionComponent = /** @class */ (function () {
    function ExplosionComponent() {
        this.x = 0;
        this.y = 0;
        this.destroy = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ExplosionComponent.prototype.done = function (event) {
        this.destroy.emit();
    };
    ExplosionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExplosionComponent.prototype, "destroy", void 0);
    ExplosionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'explosion',
            template: __webpack_require__(/*! ./explosion.component.html */ "./src/app/ui/particles/explosion/explosion.component.html"),
            styles: [__webpack_require__(/*! ./explosion.component.css */ "./src/app/ui/particles/explosion/explosion.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('animate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('finished', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        backgroundPosition: "-1152px"
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => finished', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('1s steps(12)')
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [])
    ], ExplosionComponent);
    return ExplosionComponent;
}());



/***/ }),

/***/ "./src/app/ui/particles/particles.component.css":
/*!******************************************************!*\
  !*** ./src/app/ui/particles/particles.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".particles {\r\n    pointer-events: none;\r\n    background-color:0;\r\n    position: fixed;\r\n    top:0;\r\n    left:0;\r\n    width:100%;\r\n    height:100%;\r\n    z-index:99;\r\n}\r\n\r\n.particle {\r\n    position: fixed;\r\n    top:250px;\r\n    left: 500px;\r\n    background:White;\r\n    width:10em;\r\n    height:1em;\r\n}"

/***/ }),

/***/ "./src/app/ui/particles/particles.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/particles/particles.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"particles\">\n</div>"

/***/ }),

/***/ "./src/app/ui/particles/particles.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/particles/particles.component.ts ***!
  \*****************************************************/
/*! exports provided: ParticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParticlesComponent = /** @class */ (function () {
    function ParticlesComponent(resolver) {
        this.resolver = resolver;
    }
    ParticlesComponent.prototype.spawn = function (type) {
        var _this = this;
        var factory = this.resolver.resolveComponentFactory(type);
        var component = this.container.createComponent(factory);
        component.instance.destroy.subscribe(function (_) { return _this.destroy(component); });
        return component;
    };
    ParticlesComponent.prototype.destroy = function (component) {
        this.container.remove(this.container.indexOf(component.hostView));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("container", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], ParticlesComponent.prototype, "container", void 0);
    ParticlesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'particles',
            template: __webpack_require__(/*! ./particles.component.html */ "./src/app/ui/particles/particles.component.html"),
            styles: [__webpack_require__(/*! ./particles.component.css */ "./src/app/ui/particles/particles.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]])
    ], ParticlesComponent);
    return ParticlesComponent;
}());



/***/ }),

/***/ "./src/app/ui/player-ship/player-ship.component.css":
/*!**********************************************************!*\
  !*** ./src/app/ui/player-ship/player-ship.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/player-ship/player-ship.component.html":
/*!***********************************************************!*\
  !*** ./src/app/ui/player-ship/player-ship.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  player-ship works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/player-ship/player-ship.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/ui/player-ship/player-ship.component.ts ***!
  \*********************************************************/
/*! exports provided: PlayerShipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerShipComponent", function() { return PlayerShipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlayerShipComponent = /** @class */ (function () {
    function PlayerShipComponent() {
    }
    PlayerShipComponent.prototype.ngOnInit = function () {
    };
    PlayerShipComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-ship',
            template: __webpack_require__(/*! ./player-ship.component.html */ "./src/app/ui/player-ship/player-ship.component.html"),
            styles: [__webpack_require__(/*! ./player-ship.component.css */ "./src/app/ui/player-ship/player-ship.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerShipComponent);
    return PlayerShipComponent;
}());



/***/ }),

/***/ "./src/app/ui/shield/shield.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/shield/shield.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n      margin-top:-200px;\r\n      width: 300px;\r\n      height: 200px;\r\n      background: blue;\r\n      opacity: 0.2;\r\n      border-radius: 300px / 200px;\r\n      background-image: radial-gradient(white 0%, blue 100%);\r\n    }"

/***/ }),

/***/ "./src/app/ui/shield/shield.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/shield/shield.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"onClick()\"></div>"

/***/ }),

/***/ "./src/app/ui/shield/shield.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/shield/shield.component.ts ***!
  \***********************************************/
/*! exports provided: ShieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShieldComponent", function() { return ShieldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShieldComponent = /** @class */ (function () {
    function ShieldComponent() {
    }
    ShieldComponent.prototype.ngOnInit = function () {
    };
    ShieldComponent.prototype.onClick = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ShieldComponent.prototype, "target", void 0);
    ShieldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'shield',
            template: __webpack_require__(/*! ./shield.component.html */ "./src/app/ui/shield/shield.component.html"),
            styles: [__webpack_require__(/*! ./shield.component.css */ "./src/app/ui/shield/shield.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShieldComponent);
    return ShieldComponent;
}());



/***/ }),

/***/ "./src/app/ui/store-screen/store-screen.component.css":
/*!************************************************************!*\
  !*** ./src/app/ui/store-screen/store-screen.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offers {\r\n    display:flex;\r\n    justify-content: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n.offer {\r\n    padding:1em;\r\n}\r\n\r\n.buy {\r\n    text-align: center;\r\n}\r\n\r\n.footer {\r\n    height: 5em;\r\n    background-color:lightslategray;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/ui/store-screen/store-screen.component.html":
/*!*************************************************************!*\
  !*** ./src/app/ui/store-screen/store-screen.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Shop</h1>\n<div class=\"offers\" >\n<div class=\"offer\" *ngFor=\"let card of state.store.forSale; let i=index\">\n  <card [card]=\"card\"></card>\n  <div class=\"buy\">\n  ${{card.purchasePrice}} <button (click)=\"buy(i)\">Buy</button>\n  </div>\n</div>\n</div>\n<div class=\"footer\"><button (click)=\"done()\">Done</button></div>"

/***/ }),

/***/ "./src/app/ui/store-screen/store-screen.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/ui/store-screen/store-screen.component.ts ***!
  \***********************************************************/
/*! exports provided: StoreScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreScreenComponent", function() { return StoreScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _logic_game_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/game-state.service */ "./src/app/logic/game-state.service.ts");
/* harmony import */ var _logic_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../logic/command.service */ "./src/app/logic/command.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StoreScreenComponent = /** @class */ (function () {
    function StoreScreenComponent(commandService, stateService) {
        this.commandService = commandService;
        this.state = stateService.state;
    }
    StoreScreenComponent.prototype.done = function () {
        this.commandService.startJump();
    };
    StoreScreenComponent.prototype.buy = function (i) {
        this.commandService.buy(i);
    };
    StoreScreenComponent.prototype.ngOnInit = function () {
    };
    StoreScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'store-screen',
            template: __webpack_require__(/*! ./store-screen.component.html */ "./src/app/ui/store-screen/store-screen.component.html"),
            styles: [__webpack_require__(/*! ./store-screen.component.css */ "./src/app/ui/store-screen/store-screen.component.css")]
        }),
        __metadata("design:paramtypes", [_logic_command_service__WEBPACK_IMPORTED_MODULE_2__["CommandService"],
            _logic_game_state_service__WEBPACK_IMPORTED_MODULE_1__["GameStateService"]])
    ], StoreScreenComponent);
    return StoreScreenComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\murray.long\Workspace\spire\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map