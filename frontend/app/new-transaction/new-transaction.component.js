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
var transaction_service_1 = require('../transaction/transaction.service');
var NewTransactionComponent = (function () {
    function NewTransactionComponent(transactionService, router) {
        this.transactionService = transactionService;
        this.router = router;
    }
    NewTransactionComponent.prototype.create = function (kind, amount, name) {
        name = name.trim();
        this.transactionService.create(kind, amount, name);
    };
    NewTransactionComponent = __decorate([
        core_1.Component({
            selector: 'new-transaction',
            templateUrl: 'app/new-transaction/new-transaction.component.html',
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService, router_1.Router])
    ], NewTransactionComponent);
    return NewTransactionComponent;
}());
exports.NewTransactionComponent = NewTransactionComponent;
//# sourceMappingURL=new-transaction.component.js.map