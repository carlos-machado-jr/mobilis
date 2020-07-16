import { Component } from '@angular/core';
import { AuthserviceService } from './shared/utils/services/authservice.service';
import { StorageService } from './shared/utils/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mobilis';
  usuario: any;
  
  constructor(
    private auth: AuthserviceService,
    private storage: StorageService,
    
    ){
    }
  ngOnInit() {
    
    
  }

  
}
