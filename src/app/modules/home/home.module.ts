import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from './../../shared/components/table/table.module'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HideIfLoaderDirective } from 'src/app/shared/utils/directives/hide-if-loader.directive';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TableModule,
    SharedModule,
    SkeletonModule
    
  ],
  providers: []
   
})
export class HomeModule { }
