import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IPayloadInfo} from './PayloadInfo';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class PayloadInfoService {

    constructor(private _httpPayloadInfo : Http){

    }
    getPayloadInfoObservable() : Observable <IPayloadInfo[]>{
        return this._httpPayloadInfo.get("http://192.168.2.6:5000/dronePayloadInfo")
                    .map((response : Response) => <IPayloadInfo[]>response.json());
    }
}
