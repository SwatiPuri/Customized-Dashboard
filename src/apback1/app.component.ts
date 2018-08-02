import { Component } from '@angular/core';
import {changeMapClass} from './services/changeMapClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[changeMapClass],
})
export class AppComponent {
  title = 'Title';
  mapClass : String =  this._changeMapClass.getMapDivWidth(); 
  constructor(private _changeMapClass : changeMapClass){
  
   
  }
}
