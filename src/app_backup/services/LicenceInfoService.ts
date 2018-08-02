import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {ILicenceInfo} from './LicenceInfo';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()

export class LicenceInfoService {

    constructor(private _httpLicence : Http){

    }
    getLicenceInfoObservable() : Observable <ILicenceInfo[]>{
        return this._httpLicence.get("http://192.168.2.6:5000/droneLicenseInfo")
                    .map((response : Response) => <ILicenceInfo[]>response.json());
    }
}
