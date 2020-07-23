import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'navbar-skeleton',
  templateUrl: './navbar-skeleton.component.html',
  styleUrls: ['./navbar-skeleton.component.css']
})
export class NavbarSkeletonComponent implements OnInit {
  public isLoading: Subject<Boolean>;

  constructor(private account: AccountService) { }

  ngOnInit(): void {
    this.isLoading = this.account.isLoading;

  }

}
