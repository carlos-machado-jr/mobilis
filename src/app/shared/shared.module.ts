import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// services
import { AccountService } from './utils/services/account.service';
import { StorageService } from './utils/services/storage.service';
import { CrudService } from './utils/services/crud.service';
import { HideIfLoaderDirective } from './utils/directives/hide-if-loader.directive';
import { ShowIfLoggedDirective } from './utils/directives/show-if-logged.directive';





@NgModule({
  declarations: [
    HideIfLoaderDirective,
    
  ],
  imports: [
    CommonModule,
  ],
  exports: [HideIfLoaderDirective],
  providers: [StorageService, AccountService]
})
export class SharedModule { }
