import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NavbarSkeletonComponent } from './pages/navbar-skeleton/navbar-skeleton.component';
import { LoginSkeletonComponent } from './pages/login-skeleton/login-skeleton.component';



@NgModule({
  declarations: [SkeletonComponent, NavbarSkeletonComponent, LoginSkeletonComponent],
  imports: [
    CommonModule
  ],
  exports: [SkeletonComponent, NavbarSkeletonComponent, LoginSkeletonComponent]
})
export class SkeletonModule { }
