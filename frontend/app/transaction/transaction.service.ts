import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise'

import { Transaction } from './transaction';

@Injectable()
export class TransactionService {
  private transactionUrl: string = 'http://localhost:3000/api/transactions';
  private headers = new Headers({'Content-Type': 'application/json'});
  private sessionToken: string = JSON.parse(window.localStorage.getItem('currentUser')).session_token;

  constructor(private http: Http) {}

  create(type: string, committed: string, amount: number, name: string): Promise<Transaction> {
    return this.http
      .post(this.transactionUrl, JSON.stringify({"transaction": {"type": type, "committed": committed, "amount": amount, "name": name, "session_token": this.sessionToken}}), {headers: this.headers})
      .toPromise()
      .then( res => res.json().dat)
      .catch(this.handleError);
  }

  getTransactions(month: string): Promise<Transaction[]> {
    let transactionUrlParams: string = this.transactionUrl;
    transactionUrlParams += `?session_token=${this.sessionToken}&month=${month}`;
    return this.http.get(transactionUrlParams)
      .toPromise()
      .then(response => response.json().data as Transaction[])
      .catch(this.handleError)
  }
  private handleError(error: any): Promise<any> {
    console.error('Error!', error);
    return Promise.reject(error.message || error);
  }
}
