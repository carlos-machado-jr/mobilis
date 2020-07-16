import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountService } from '../../utils/services/account.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  isLogg: Subject<Boolean>;
  constructor(
    private account: AccountService

  ) { }

  ngOnInit(): void {
    this.isLogg = this.account.login;

  }

}
