import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
    export class SharedPostResponseService{
        private msgSource = new BehaviorSubject<string>("default message");
        currentMessage = this.msgSource.asObservable();
        constructor(){ }
        changeMessage(message : string){
             console.log("inside change message" + message);
            this.msgSource.next(message);
        }
}