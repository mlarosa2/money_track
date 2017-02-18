import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction/transaction.service';
import { Transaction } from '../transaction/transaction'

@Component({
  selector: 'transactions',
  templateUrl: 'app/transaction/transaction.component.html',
  providers: [TransactionService]
})

export class TransactionComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private transactionService: TransactionService,
              private router: Router) {}

  ngOnInit(): void {
    let current = new Date();
    let month: string = (current.getMonth()).toString();
    this.transactionService.getTransactions(month).then( trans => this.transactions = trans);
  }
}
