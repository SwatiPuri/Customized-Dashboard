import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IGpsPositionInfo} from './gpsPositionInterface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GpsPositionServices{

constructor(private _http:Http){}

getGpsPositionObservable() : Observable<IGpsPositionInfo[]>{
    return this._http.get('http://192.168.2.6:5000/droneGPSPosition')
    .map((response : Response) => <IGpsPositionInfo[]>response.json());
}

}
