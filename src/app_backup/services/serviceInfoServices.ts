import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {IServiceInfo} from './serviceInfoInterface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceInfoServices{

constructor(private _http:Http){}

getServiceInfoObservable() : Observable<IServiceInfo[]>{
    return this._http.get('http://192.168.2.6:5000/serviceInfo')
    .map((response : Response) => <IServiceInfo[]>response.json());
}

}
