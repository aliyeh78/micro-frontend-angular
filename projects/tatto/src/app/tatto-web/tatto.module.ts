import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TattoRoutingModule } from './tatto-routing.module';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SharedAssetModule } from '../../../../shell/shared-asset.module';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TattoRoutingModule,
    MenubarModule,
    ButtonModule,
    GalleriaModule
  ]
})
export class TattoModule {
  constructor() {
    // Set the base URL for assets
    console.log(window.__MF_ASSET_PATH__)
    SharedAssetModule.setAssetBaseUrl(window.__MF_ASSET_PATH__);
  }
}
