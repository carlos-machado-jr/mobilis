import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NavbarSkeletonComponent } from './pages/navbar-skeleton/navbar-skeleton.component';
import { TesteSkeletonComponent } from './pages/teste-skeleton/teste-skeleton.component';



@NgModule({
  declarations: [SkeletonComponent, NavbarSkeletonComponent, TesteSkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [SkeletonComponent, NavbarSkeletonComponent, TesteSkeletonComponent]
})
export class SkeletonModule { }
