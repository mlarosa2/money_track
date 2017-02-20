import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction/transaction.service';
import { Transaction } from '../transaction/transaction';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'transactions',
  templateUrl: 'app/transaction/transaction.component.html',
  providers: [TransactionService]
})

export class TransactionComponent implements OnInit {
  private transactions: Observable<Transaction[]>;
  private transactionClicked;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionClicked = null;
    this.transactions = this.transactionService.transactions;
    let current = new Date();
    let month: string = (current.getMonth()).toString();
    this.transactionService.retrieveTransactions(month);
  }

  create(kind: string, amount: number, name: string): void {
    name = name.trim();
    this.transactionService.create(kind, amount, name);
  }

  delete(id: number): void {
    this.transactionService.delete(id);
  }

  update(kind: string, amount: number, name: string, id: number, month :number): void {
    name = name.trim();
    this.transactionService.update(kind, amount, name, id, month);
    this.clickTransaction(id);
  }

  clickTransaction(trans) {
    this.transactionClicked = this.transactionClicked === trans ? null : trans;
  }
}
