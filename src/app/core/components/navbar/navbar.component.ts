import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/utils/services/account.service';
import { AuthserviceService } from 'src/app/shared/utils/services/authservice.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth: AuthserviceService){}

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }
}
