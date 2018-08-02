import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IGPSState} from './GPSState';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class GPSStateServices{

constructor(private _http:Http){}
getGPSStateObservable() : Observable<IGPSState[]>{
    return this._http.get('http://192.168.2.6:5000/droneGPSState')
    .map((response : Response) => <IGPSState[]>response.json());
}

}
