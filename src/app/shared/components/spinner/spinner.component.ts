import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AccountService } from '../../utils/services/account.service';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  public isLoading: Subject<Boolean>;
  public color = "primary";
  public mode = "indeterminate";
  public value = '';

  constructor(
    private account: AccountService

  ) { }

  ngOnInit(): void {
    this.isLoading = this.account.isLoading;
  }

}
