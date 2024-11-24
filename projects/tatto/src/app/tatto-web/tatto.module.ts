import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TattoRoutingModule } from './tatto-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TattoRoutingModule,
    MenubarModule,
    ButtonModule
  ]
})
export class TattoModule { }
