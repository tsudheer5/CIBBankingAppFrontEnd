import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

declare var $: any;
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts;
  totalBalance;
  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getAccounts().subscribe((data) => {
      let totalBalance = 0;
      (data as any).forEach(element => {
        element.cssClass = this.isWithdrawablecss(element);
        element.isDisabled = !this.isWithdrawable(element);
        totalBalance += parseFloat(element.balance);
      });
      this.accounts = data;
      this.totalBalance = totalBalance;
    });
  }

  withdraw(event, account) {
    this.showModal();
  }
  showModal() {
    $("#modalSuccess").modal('show');
  }
  isWithdrawablecss(data) {
    let isAllowed = false;

    if (data.account_type === 'savings') {
      isAllowed = data.balance > 0 ? true : false;
    } else if (data.account_type === 'cheque') {
      isAllowed = (parseFloat(data.balance) + 500) >= 0;
    }
    return {
      btn: true,
      'btn-success': isAllowed,
      'btn-secondary btn-disabled': !isAllowed
    };
  }
  isWithdrawable(data) {
    let isAllowed = false;

    if (data.account_type === 'savings') {
      isAllowed = data.balance > 0 ? true : false;
    } else if (data.account_type === 'cheque') {
      isAllowed = (parseFloat(data.balance) + 500) >= 0;
    }
    console.log(isAllowed);
    return isAllowed;
  }




}
