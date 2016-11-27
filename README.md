# angular2-esri4-component

An Angular 2 component to create an ESRI map in your applications using [ArcGIS API for JavaScript v4.1](https://developers.arcgis.com/javascript/)

## Install

```
npm install --save angular2-esri4-component
```

## Usage

Include `Angular2Esri4Module` in your main module:

```
// ...

import { Angular2Esri4Module } from 'angular2-esri4-component';

@NgModule({
  // ...
  imports: [
    Angular2Esri4Module
  ],
  // ...
})
export class AppModule { }

```

Using the `angular2-esri4-component` in one of the components of your application:

```
import { Component, OnInit, ViewChild } from '@angular/core';

import { EsriLoaderService } from 'angular2-esri-loader';
import { Angular2Esri4Component } from 'angular2-esri4-component';

@Component({
  selector: 'app-map',
  template: `
    <angular2-esri4 [mapProperties]="mapProperties" [mapViewProperties]="mapViewProperties" (mapInit)="onMapInit($event)"></angular2-esri4>
  `,
  styleUrls: ['./map.component.scss'],
  providers: [EsriLoaderService]
})
export class MapComponent implements OnInit {
  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8
  };
  map: __esri.Map;

  @ViewChild(Angular2Esri4Component) esriComponent: Angular2Esri4Component;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() { }

  onMapInit(map: __esri.Map) {
    this.map = map;
  }
}
```