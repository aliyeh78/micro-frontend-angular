import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})
export class SharedAssetModule {
  static assetBaseUrl: string;

  static setAssetBaseUrl(url: string) {
    SharedAssetModule.assetBaseUrl = url;
  }
}
