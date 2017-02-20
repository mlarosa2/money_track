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
var http_1 = require('@angular/http');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
require('rxjs/add/operator/map');
var TransactionService = (function () {
    function TransactionService(http) {
        this.http = http;
        this.transactionUrl = 'http://localhost:3000/api/transactions';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.sessionToken = JSON.parse(window.localStorage.getItem('currentUser')).session_token;
        this.dataStore = { transactions: [] };
        this._transactions = new BehaviorSubject_1.BehaviorSubject([]);
        this.transactions = this._transactions.asObservable();
    }
    TransactionService.prototype.retrieveTransactions = function (month) {
        var _this = this;
        var transactionUrlParams = this.transactionUrl;
        transactionUrlParams += "?session_token=" + this.sessionToken + "&month=" + month;
        this.http.get(transactionUrlParams).map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.dataStore.transactions = data;
            _this._transactions.next(Object.assign({}, _this.dataStore).transactions);
        }, function (error) { return _this.handleError(error); });
    };
    TransactionService.prototype.create = function (kind, amount, name) {
        var _this = this;
        this.http
            .post(this.transactionUrl, JSON.stringify({
            "transaction": {
                "kind": kind,
                "amount": amount,
                "name": name,
                "session_token": this.sessionToken,
                "month": new Date().getMonth()
            }
        }), { headers: this.headers })
            .map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.dataStore.transactions.push(data);
            _this._transactions.next(Object.assign({}, _this.dataStore).transactions);
        }, function (error) { return _this.handleError(error); });
    };
    TransactionService.prototype.delete = function (id) {
        var _this = this;
        var transactionUrl = this.transactionUrl;
        transactionUrl += "/" + id;
        this.http
            .delete(transactionUrl, { search: "session_token=" + this.sessionToken })
            .subscribe(function (response) {
            _this.dataStore.transactions.forEach(function (t, i) {
                if (t.id === id)
                    _this.dataStore.transactions.splice(i, 1);
            });
        }, function (error) { return _this.handleError(error); });
    };
    TransactionService.prototype.handleError = function (error) {
        console.error('Error!', error);
        return Promise.reject(error.message || error);
    };
    TransactionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TransactionService);
    return TransactionService;
}());
exports.TransactionService = TransactionService;
//# sourceMappingURL=transaction.service.js.map