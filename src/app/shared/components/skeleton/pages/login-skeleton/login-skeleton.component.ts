import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'login-skeleton',
  templateUrl: './login-skeleton.component.html',
  styleUrls: ['./login-skeleton.component.css']
})
export class LoginSkeletonComponent implements OnInit {

  public isLoading: Subject<Boolean>;

  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.isLoading = this.account.isLoading;

  }

}
