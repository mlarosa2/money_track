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
var transaction_service_1 = require('../transaction/transaction.service');
var TransactionComponent = (function () {
    function TransactionComponent(transactionService) {
        this.transactionService = transactionService;
        this.active = true;
    }
    TransactionComponent.prototype.ngOnInit = function () {
        this.transactionClicked = null;
        this.transactions = this.transactionService.transactions;
        var current = new Date();
        var month = String(current.getMonth() + 1);
        var year = String(current.getFullYear());
        var day = String(current.getDay());
        var currentDate = year + "-" + month + "-" + day;
        this.transactionService.retrieveTransactions(currentDate);
    };
    TransactionComponent.prototype.create = function (kind, amount, name, datePurchased) {
        name = name.trim();
        this.transactionService.create(kind, amount, name, datePurchased);
    };
    TransactionComponent.prototype.delete = function (id) {
        this.transactionService.delete(id);
    };
    TransactionComponent.prototype.update = function (kind, amount, name, id, datePurchased) {
        name = name.trim();
        this.transactionService.update(kind, amount, name, id, datePurchased);
        this.clickTransaction(id);
    };
    TransactionComponent.prototype.clickTransaction = function (trans) {
        this.transactionClicked = this.transactionClicked === trans ? null : trans;
    };
    TransactionComponent.prototype.resetForm = function (form) {
        var _this = this;
        form.reset();
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    TransactionComponent = __decorate([
        core_1.Component({
            selector: 'transactions',
            templateUrl: 'app/transaction/transaction.component.html',
            providers: [transaction_service_1.TransactionService]
        }), 
        __metadata('design:paramtypes', [transaction_service_1.TransactionService])
    ], TransactionComponent);
    return TransactionComponent;
}());
exports.TransactionComponent = TransactionComponent;
//# sourceMappingURL=transaction.component.js.map