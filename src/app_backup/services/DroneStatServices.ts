import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {IDroneStats} from './DroneStat';
import {IGPSState} from './GPSState';
import {IServiceInfo} from './serviceInfoInterface';
import {IPayloadInfo} from './PayloadInfo';
import {ILicenceInfo} from './LicenceInfo';
import {IGpsPositionInfo} from './gpsPositionInterface';
import {IBatteryState} from './BatteryState';
import {IBatteryInfo} from './BatteryInfo';
import {IGUConnectionState} from '../services/guConnectionState';
import {IGUType} from '../services/guType';
import {IGUVersion} from '../services/guVersion';

@Injectable()
export class DroneStatsService{

constructor(private _http:Http){}
getDroneStatsObservable() : Observable<IDroneStats[]>{
    return this._http.get('http://192.168.2.6:5000/droneBasicInfo')
    .map((response : Response) => <IDroneStats[]>response.json());
}

getGPSStateObservable() : Observable<IGPSState[]>{
    return this._http.get('http://192.168.2.6:5000/droneGPSState')
    .map((response : Response) => <IGPSState[]>response.json());
}

getDroneBatteryLevelObservable() : Observable<number>{
    return this._http.get('http://192.168.2.6:5000/droneBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getServiceInfoObservable() : Observable<IServiceInfo[]>{
    return this._http.get('http://192.168.2.6:5000/serviceInfo')
    .map((response : Response) => <IServiceInfo[]>response.json());
}
getPayloadInfoObservable() : Observable <IPayloadInfo[]>{
    return this._http.get("http://192.168.2.6:5000/dronePayloadInfo")
                .map((response : Response) => <IPayloadInfo[]>response.json());
}
getLicenceInfoObservable() : Observable <ILicenceInfo[]>{
    return this._http.get("http://192.168.2.6:5000/droneLicenseInfo")
                .map((response : Response) => <ILicenceInfo[]>response.json());
}
getGpsPositionObservable() : Observable<IGpsPositionInfo[]>{
    return this._http.get('http://192.168.2.6:5000/droneGPSPosition')
    .map((response : Response) => <IGpsPositionInfo[]>response.json());
}

getRecentAlerts() :Observable<String[]>{
return this._http.get('http://192.168.2.6:5000/allAlerts')
.map((response : Response) => <String[]>response.json());
}
getBatteryStateObservable() : Observable <IBatteryState[]>{
    return this._http.get("http://192.168.2.6:5000/guBatteryState")
                .map((response : Response) => <IBatteryState[]>response.json());
}
getBatteryInfoObservable() : Observable <IBatteryInfo[]>{
    return this._http.get("http://192.168.2.6:5000/droneBatteryInfo")
                .map((response : Response) => <IBatteryInfo[]>response.json());
}

getConnectionStateGUObservable() : Observable <IGUConnectionState[]>{
    return this._http.get("http://192.168.2.6:5000/guConnectionStatus")
                .map((response : Response) => <IGUConnectionState[]>response.json());
}

getTypeGUObservable() : Observable <IGUType[]> {
    return this._http.get("http:192.168.2.6:5000/guType")
                .map((response : Response) => <IGUType[]>response.json());
}

getVersionGUObservable() : Observable <IGUVersion[]> {
    return this._http.get("192.168.2.6:5000/guVersion")
                .map((response : Response)=> <IGUVersion[]>response.json());
}

getdroneFlightTimeObservable() : Observable <String> {
    return this._http.get("192.168.2.6:5000/droneFlightTime")
                     .map((response : Response)=> <String>response.json());
}

}
