import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from './shared/shared.module';
import { SpinnerModule } from './shared/components/spinner/spinner.module';
import { ShowIfLoggedDirective } from './shared/utils/directives/show-if-logged.directive';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // directives
    ShowIfLoggedDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    CoreModule,
    SpinnerModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
