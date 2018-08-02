import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';

@Injectable()
export class ConnectService{
    body :{'ipAddress':'',port:''};
    constructor(private _http:Http){}

        connect(){
     this._http.post('/api/items/add', this.body);
        }
}