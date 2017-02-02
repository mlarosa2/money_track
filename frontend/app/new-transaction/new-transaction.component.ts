import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Transaction } from '../transaction/transaction';
import { TransactionService } from '../transaction/transaction.service';

@Component({
  selector: 'new-transaction',
  templateUrl: 'app/new-transaction/new-transaction.component.html',
  providers: [TransactionService]
})

export class NewTransaction {
  constructor(private transactionService: TransactionService,
              private router: Router) {}

  create(type: string, committed: string, amount: number, name: string): void {
    name = name.trim();
    this.transactionService.create(type, committed, amount, name);
  }
}
