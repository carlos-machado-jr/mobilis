import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { AccountService } from './utils/services/account.service';
import { StorageService } from './utils/services/storage.service';
import { CrudService } from './utils/services/crud.service';





@NgModule({
  declarations: [
      
  ],
  imports: [
    CommonModule,
  ],
  providers: [StorageService, AccountService, CrudService]
})
export class SharedModule { }
