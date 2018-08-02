import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IBatteryInfo} from './BatteryInfo';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class BatteryInfoService {

    constructor(private _httpBattery : Http){

    }
    getBatteryInfoObservable() : Observable <IBatteryInfo[]>{
        return this._httpBattery.get("http://192.168.2.6:5000/droneBatteryInfo")
                    .map((response : Response) => <IBatteryInfo[]>response.json());
    }
}
