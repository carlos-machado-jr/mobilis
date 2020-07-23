import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NavbarSkeletonComponent } from './pages/navbar-skeleton/navbar-skeleton.component';



@NgModule({
  declarations: [SkeletonComponent, NavbarSkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [SkeletonComponent, NavbarSkeletonComponent]
})
export class SkeletonModule { }
