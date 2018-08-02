import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Connection} from './Connection';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class ConnectService{
    connectionObj : Connection;
   private sharedConnection = new BehaviorSubject<Connection>(null);
   connection = this.sharedConnection.asObservable();
    constructor(private _http:Http){}

        connect(connectionObj:Connection):void{
            console.log("IP : "+connectionObj.ipAdress);
            console.log("Port : "+connectionObj.port);
            this.sharedConnection.next(connectionObj);
        }
     
    
}