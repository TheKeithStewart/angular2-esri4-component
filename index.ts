import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Angular2Esri4Component } from './src/angular2-esri4.component';

import { EsriLoaderService } from 'angular2-esri-loader';

export * from './src/angular2-esri4.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Angular2Esri4Component],
  exports: [Angular2Esri4Component],
  providers: [EsriLoaderService]
})
export class Angular2Esri4Module { }