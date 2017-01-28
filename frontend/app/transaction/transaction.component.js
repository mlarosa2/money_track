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
var TransactionComponent = (function () {
    function TransactionComponent(transactionService, router) {
        this.transactionService = transactionService;
        this.router = router;
        this.transactions = [];
    }
    TransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var current = new Date();
        var month = (current.getMonth() + 1).toString();
        this.transactionService.getTransactions(month).then(function (trans) { return _this.transactions = trans; });
    };
    TransactionComponent = __decorate([
        core_1.Component({
            selector: 'transactions',
            templateUrl: 'app/transaction.component.html',
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService, router_1.Router])
    ], TransactionComponent);
    return TransactionComponent;
}());
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map