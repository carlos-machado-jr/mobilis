import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { AccountService } from './utils/services/account.service';
import { StorageService } from './utils/services/storage.service';





@NgModule({
  declarations: [
      
  ],
  imports: [
    CommonModule,
  ],
  providers: [StorageService, AccountService]
})
export class SharedModule { }
