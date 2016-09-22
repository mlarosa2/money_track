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
var transaction_service_1 = require('./transaction.service');
var NewTransaction = (function () {
    function NewTransaction(transactionService, router) {
        this.transactionService = transactionService;
        this.router = router;
    }
    NewTransaction.prototype.create = function (type, committed, amount, name) {
        name = name.trim();
        this.transactionService.create(type, committed, amount, name);
    };
    NewTransaction = __decorate([
        core_1.Component({
            selector: 'new-transaction',
            templateUrl: 'app/new-transaction.component.html',
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService, router_1.Router])
    ], NewTransaction);
    return NewTransaction;
}());
exports.NewTransaction = NewTransaction;
//# sourceMappingURL=new-transaction.component.js.map