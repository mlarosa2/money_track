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
var router_1 = require('@angular/router');
var user_uservice_1 = require('./user.uservice');
var SignupComponent = (function () {
    function SignupComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    SignupComponent.prototype.signUp = function (email, password) {
        email = email.trim();
        password = password.trim();
        this.userService.signUp(email, password);
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'sign-up',
            templateUrl: 'app/signup.component.html',
            providers: [user_uservice_1.UserService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof user_uservice_1.UserService !== 'undefined' && user_uservice_1.UserService) === 'function' && _a) || Object, router_1.Router])
    ], SignupComponent);
    return SignupComponent;
    var _a;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map