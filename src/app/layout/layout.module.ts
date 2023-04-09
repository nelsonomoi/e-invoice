import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BaseComponent } from './base.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BaseComponent
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    BaseComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class LayoutModule { }
