import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module'
import { StorageService } from './shared/utils/services/storage.service'
import { AccountService } from './shared/utils/services/account.service';
import { ShowIfLoggedDirective } from './shared/utils/directives/show-if-logged.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShowIfLoggedDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [StorageService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
