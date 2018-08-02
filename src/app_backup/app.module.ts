import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SidePanelComponent} from './mapSidePanel/mapsidepanel.component';
import {MapComponent} from './map/map.component';
import {UpperStatusBarComponent} from './upperBarStatus/upperbarstatus.component'
import {WayPointsComponent} from './waypoints/waypoints.component'
import {WidgetOneComponent} from './widgets/latitude.component'

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    MapComponent,
    UpperStatusBarComponent,
    WayPointsComponent,
    WidgetOneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
