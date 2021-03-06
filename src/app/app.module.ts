import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SidePanelComponent} from './mapSidePanel/mapsidepanel.component';
import {MapComponent} from './map/map.component';
import {UpperStatusBarComponent} from './upperBarStatus/upperbarstatus.component';
import {WayPointsComponent} from './waypoints/waypoints.component';
import {WidgetOneComponent} from './widgets/latitude.component';
import {SharedPostResponseService} from './services/SharedPostResponse';
import {HttpWaypoints} from './services/HttpWaypoints.services';
import {ConnectService} from './services/Connect';
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
  providers : [SharedPostResponseService,HttpWaypoints,ConnectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
