import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from './transaction.service';
import { Transaction } from './transaction'

@Component({
  selector: 'transactions',
  templateUrl: 'app/transaction.component.html',
  providers: [TransactionService]
})

export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService,
              private router: Router) {}

  ngOnInit(): void {
    let current = new Date();
    let month: string = (current.getMonth() + 1).toString();
    this.transactionService.getTransactions(month).then( trans => this.transactions = trans);
  }
}
