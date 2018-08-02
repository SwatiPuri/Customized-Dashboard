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
   claas : string = 'col-md-9';
   showHideWP : boolean = false;
   arrowRight : boolean = true;
   arrowDown : boolean = true;
   mapheight : number = 70;

   constructor(private data:SharedPostResponseService,
               private _showHide : SharedPostResponseService,
               private responseClass : SharedPostResponseService,
               private _showHideWP : SharedPostResponseService,
               private reponseHeight : SharedPostResponseService) {}

   ngOnInit(){
       this.data.currentMessage.subscribe(message => this.message = message);
       this._showHide.currentWidget.subscribe(showHide => this.showhide = showHide);
       this.responseClass.currentClass.subscribe(classs => this.claas = classs);
       this._showHideWP.currentWayPoint.subscribe(showHideWP =>this.showHideWP = showHideWP);
       this.reponseHeight.currentHeight.subscribe(height => this.mapheight = height);
   }
   showHideWidget(){
    this.arrowRight = !this.arrowRight;   
    var iconRotate = document.getElementById('rightArrow');
    this.arrowRight? iconRotate.style.transform = 'rotate(360deg)' : iconRotate.style.transform = 'rotate(180deg)'; 
    this._showHide.showHideWidget(!this.showhide);
    this.showhide? this.responseClass.changeClass("col-md-9") : this.responseClass.changeClass("col-md-12");
   }

   showHideWaypoints(){
    this.arrowDown = !this.arrowDown;
    var iconRotate1 = document.getElementById('downArrow');
    this.arrowDown? iconRotate1.style.transform = 'rotate(180deg)' : iconRotate1.style.transform = 'rotate(360deg)';
    this._showHideWP.showHideWayPoints(!this.showHideWP);
    this.showHideWP? this.reponseHeight.changeHeight(70) : this.reponseHeight.changeHeight(100);
    } 

}
