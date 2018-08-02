import { Component } from '@angular/core';
import {changeMapClass} from './services/changeMapClass';
import {SharedPostResponseService} from './services/SharedPostResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[changeMapClass],
})
export class AppComponent {
  title = 'Title';
  classToApply : string = 'col-md-9';
  mapClass : String =  this._changeMapClass.getMapDivWidth(); 
  constructor(private _changeMapClass : changeMapClass,
              private data : SharedPostResponseService){
  }
  ngOnInit(){
    this.data.currentClass.subscribe(classs => this.classToApply = classs);
  }
}
