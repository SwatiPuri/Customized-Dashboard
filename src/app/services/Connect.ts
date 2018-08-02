import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Connection} from './Connection';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
@Injectable()
export class ConnectService{
    ip : string;
    port : string;

    connectionObj : Connection;
   private sharedConnection = new BehaviorSubject<Connection>(this.connectionObj);
   connection = this.sharedConnection.asObservable();
    
   private ipSubject = new BehaviorSubject<string>("");
   ipSubjectOb = this.ipSubject.asObservable();

   private portSub = new BehaviorSubject<string>("");
   portSubjectOb = this.portSub.asObservable();
   
   constructor(private _http:Http){}

        connect(connectionObj:Connection):void{
            console.log("IP : "+connectionObj.ipAdress);
            console.log("Port : "+connectionObj.port);
            this.sharedConnection.next(connectionObj);
        }
        ipsetter(ip : string):void{
            console.log("IP in service: "+ ip);
            
            this.ipSubject.next(ip);
        }
     
        portsetter(port : string):void{
            console.log("Port in service: "+ port);
            
            this.portSub.next(port);
        }
     
        
}