import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {
  transactions: Observable<Transaction[]>;
  private _transactions: BehaviorSubject<Transaction[]>;
  private transactionUrl: string = 'http://localhost:3000/api/transactions';
  private headers = new Headers({'Content-Type': 'application/json'});
  private sessionToken: string = JSON.parse(window.localStorage.getItem('currentUser')).session_token;
  private dataStore: {
    transactions: Transaction[]
  };
  constructor(private http: Http) {
    this.dataStore = { transactions: [] };
    this._transactions = <BehaviorSubject<Transaction[]>>new BehaviorSubject([]);
    this.transactions = this._transactions.asObservable();
  }

  retrieveTransactions(month: string): void {
    let transactionUrlParams: string = this.transactionUrl;
    transactionUrlParams += `?session_token=${this.sessionToken}&month=${month}`;
    this.http.get(transactionUrlParams).map(response =>  response.json())
        .subscribe( data => {
          this.dataStore.transactions = data;
          this._transactions.next(Object.assign({}, this.dataStore).transactions);
        }, error => this.handleError(error));
  }

  create(kind: string, amount: number, name: string): void {
    this.http
      .post(this.transactionUrl, JSON.stringify({
        "transaction": {
          "kind": kind, 
          "amount": amount, 
          "name": name, 
          "session_token": this.sessionToken,
          "month": new Date().getMonth()
        }
      }), {headers: this.headers})
      .map(response => response.json()).subscribe(data => {
        this.dataStore.transactions.push(data);
        this._transactions.next(Object.assign({}, this.dataStore).transactions);
      }, error => this.handleError(error));
  }

  delete(id: number) {
    let transactionUrl: string = this.transactionUrl;
    transactionUrl += `/${id}`;
    this.http
      .delete(transactionUrl, {search: `session_token=${this.sessionToken}`})
        .subscribe(response => {
          this.dataStore.transactions.forEach((t, i) => {
            if (t.id === id) this.dataStore.transactions.splice(i, 1);
        });
      }, error => this.handleError(error));
  }

  private handleError(error: any): Promise<any> {
    console.error('Error!', error);
    return Promise.reject(error.message || error);
  }
}
