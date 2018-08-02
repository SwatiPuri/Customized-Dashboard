import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class DroneBatteryLevelService{

constructor(private _http:Http){}
getDroneBatteryLevelObservable() : Observable<number>{
    return this._http.get('http://192.168.2.6:5000/DroneBatteryLevel')
    .map((response : Response) => <number>response.json());
}

}
