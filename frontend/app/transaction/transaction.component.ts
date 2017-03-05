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
  private active = true;
  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.transactionClicked = null;
    this.transactions = this.transactionService.transactions;
    let current = new Date();
    let month: string = String(current.getMonth() + 1);
    let year: string = String(current.getFullYear());
    let day: string = String(current.getDay());
    let currentDate: string = `${year}-${month}-${day}`;
    this.transactionService.retrieveTransactions(currentDate);
  }

  create(kind: string, amount: number, name: string, datePurchased: string): void {
    name = name.trim();
    this.transactionService.create(kind, amount, name, datePurchased);
  }

  delete(id: number): void {
    this.transactionService.delete(id);
  }

  update(kind: string, amount: number, name: string, id: number, datePurchased :string): void {
    name = name.trim();
    this.transactionService.update(kind, amount, name, id, datePurchased);
    this.clickTransaction(id);
  }

  clickTransaction(trans): void {
    this.transactionClicked = this.transactionClicked === trans ? null : trans;
  }

  resetForm(form): void {
    form.reset();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}
