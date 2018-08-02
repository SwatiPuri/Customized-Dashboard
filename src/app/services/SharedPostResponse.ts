import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
    export class SharedPostResponseService{
        private classSource = new BehaviorSubject<string>("col-md-9");
        currentClass = this.classSource.asObservable();
        private heightSource = new BehaviorSubject<number>(100);
        currentHeight = this.heightSource.asObservable();
        private msgSource = new BehaviorSubject<string>("SDK UI App started");
        currentMessage = this.msgSource.asObservable();
        private showHideSource = new BehaviorSubject<boolean>(true);
        currentWidget = this.showHideSource.asObservable();
        private showHideWPSource = new BehaviorSubject<boolean>(false);
        currentWayPoint = this.showHideWPSource.asObservable();
        constructor(){ }
        changeMessage(message : string){
             console.log("inside change message" + message);
            this.msgSource.next(message);
        }
        changeClass(classs : string){
            console.log("class is " + classs);
            this.classSource.next(classs);
       }
       showHideWidget(showHide : boolean){
           console.log("show hide widget is "+showHide);
           this.showHideSource.next(showHide);
       }
       showHideWayPoints(showHideWP : boolean){
           console.log("show hide waypoint is "+showHideWP);
           this.showHideWPSource.next(showHideWP);
       }
       changeHeight(height : number){
           console.log("height is "+height);
           this.heightSource.next(height);
       }

}