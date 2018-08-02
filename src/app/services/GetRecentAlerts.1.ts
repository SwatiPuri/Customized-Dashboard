import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
@Injectable()
export class RecentAlertsService{
    constructor(private _http:Http){}
    getRecentAlerts() :Observable<String[]>{
    return this._http.get('http://192.168.2.6:5000/allAlerts')
    .map((response : Response) => <String[]>response.json());

    }
}
