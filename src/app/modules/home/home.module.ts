import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './../../shared/components/table/table.module'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule
    
    
  ],
  providers: []
   
})
export class HomeModule { }
