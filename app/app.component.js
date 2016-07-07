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
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
// define an AppComponent class and add the @Component metadata decorator above the class with a my-app selector.
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // add a template with <h1> tags surrounding a binding to the title property.
            template: "\n  <h1>{{title}}</h1>\n  <nav>\n<a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n<a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n  </nav>\n  <router-outlet></router-outlet>\n",
            styleUrls: ['app/app.component.css'],
            // add the HeroesComponent to the directives array so Angular recognizes the <my-heroes> tags
            directives: [router_1.ROUTER_DIRECTIVES],
            // add the HeroService to the providers array because we'll need it in every other view
            providers: [
                hero_service_1.HeroService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map