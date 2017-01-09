"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("zone.js/dist/zone");
require("reflect-metadata");
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const components_1 = require("angular-x-data-table/components");
let App = class App {
    constructor() {
        this.message = "";
    }
    onKeyUp(input) {
        this.message = input.value;
    }
};
App = __decorate([
    core_1.Component({
        selector: 'app',
        directives: [components_1.HelloWorld],
        template: `<div>
                   <input (keyup)="onKeyUp(input)" #input placeholder="Type Here">
                   {{message}}
                   <hello-world></hello-world>
               </div>`
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
platform_browser_dynamic_1.bootstrap(App);
//# sourceMappingURL=app.js.map