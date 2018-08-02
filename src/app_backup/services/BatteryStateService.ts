import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IBatteryState} from './BatteryState';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class BatteryStateService {

    constructor(private _httpBatteryState : Http){

    }
    getBatteryStateObservable() : Observable <IBatteryState[]>{
        return this._httpBatteryState.get("http://192.168.2.6:5000/guBatteryState")
                    .map((response : Response) => <IBatteryState[]>response.json());
    }
}
