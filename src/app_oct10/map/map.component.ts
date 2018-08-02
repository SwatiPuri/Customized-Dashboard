import {Component,OnInit} from '@angular/core';
import {SharedPostResponseService} from '../services/SharedPostResponse';

@Component({
    selector : 'map',
    'templateUrl' : './map.componenet.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
   message : string = "hello";
   constructor(private data:SharedPostResponseService){}
   ngOnInit(){
       this.data.currentMessage.subscribe(message => this.message = message);
   }
}
