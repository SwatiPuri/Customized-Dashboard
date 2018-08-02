import {Component,OnInit} from '@angular/core';
import {SharedPostResponseService} from '../services/SharedPostResponse';

@Component({
    selector : 'map',
    'templateUrl' : './map.componenet.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
   message : string = "hello";
   showhide : boolean = true;
   arrowRight : boolean = true;
   constructor(private data:SharedPostResponseService,
               private _showHide : SharedPostResponseService,
               private responseClass : SharedPostResponseService) {}

   ngOnInit(){
       this.data.currentMessage.subscribe(message => this.message = message);
       this._showHide.currentWidget.subscribe(showHide => this.showhide = showHide);
   }
   showHideWidget(){
    this.arrowRight = !this.arrowRight;   
    var iconRotate = document.getElementById('rightArrow');
    this.arrowRight? iconRotate.style.transform = 'rotate(360deg)' : iconRotate.style.transform = 'rotate(180deg)'; 
    this._showHide.showHideWidget(!this.showhide);
    this.showhide? this.responseClass.changeClass("col-md-9") : this.responseClass.changeClass("col-md-12");
   }
}
