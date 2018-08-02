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
import {IDroneOrientation} from '../services/droneOrientation';
import {IDroneENUPositon} from '../services/droneENUPosition';
import {IDroneFlightState} from '../services/droneFlightState';
import {IDroneFlightMode} from '../services/droneFlightMode';

import {ICameraOrientation} from './cameraOrientationInterface';
import {IGULinkState} from './GULinkStateInterface';

@Injectable()
export class DroneStatsService{

constructor(private _http:Http){}
getDroneStatsObservable() : Observable<IDroneStats[]>{
    return this._http.get('http://192.168.2.6:5000/droneBasicInfo')
    .map((response : Response) => <IDroneStats[]>response.json());
}

getDroneOrientationObservable() : Observable <IDroneOrientation[]>{
    return this._http.get('http://192.168.2.6:5000/droneOrientation')
    .map((response : Response) => <IDroneOrientation[]>response.json());
}

getDroneENUPositionObservable() : Observable <IDroneENUPositon[]>{
    return this._http.get('http://192.168.2.6:5000/droneENUPosition')
    .map((response : Response) => <IDroneENUPositon[]>response.json());
}

getGPSStateObservable() : Observable<IGPSState[]>{
    return this._http.get('http://192.168.2.6:5000/droneGPSState')
    .map((response : Response) => <IGPSState[]>response.json());
}

getDroneFlightStateObservable() : Observable <IDroneFlightState[]>{
    return this._http.get('http://192.168.2.6:5000/droneFlightState')
    .map((response : Response) => <IDroneFlightState[]>response.json());
}

getDroneFlightModeObservable() : Observable <IDroneFlightMode[]>{
    return this._http.get('http://192.168.2.6:5000/droneFlightMode')
    .map((response : Response) => <IDroneFlightMode[]>response.json());
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
    return this._http.get("http://192.168.2.6:5000/droneBatteryState")
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
    return this._http.get("http://192.168.2.6:5000/guType")
                .map((response : Response) => <IGUType[]>response.json());
}

getVersionGUObservable() : Observable <IGUVersion[]> {
    return this._http.get("http://192.168.2.6:5000/guVersion")
                .map((response : Response)=> <IGUVersion[]>response.json());
}

getdroneFlightTimeObservable() : Observable <String> {
    return this._http.get("http://192.168.2.6:5000/droneFlightTime")
                     .map((response : Response)=> <String>response.json());
}
getCameraOrientationObservable() : Observable<ICameraOrientation[]>{
    return this._http.get('http://192.168.2.6:5000/cameraOrientation')
    .map((response : Response) => <ICameraOrientation[]>response.json());
}

getGroundUnitBatteryLevelObservable() : Observable<number>{
    return this._http.get('http://192.168.2.6:5000/guBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getGUBatteryStateObservable() : Observable <IBatteryState[]>{
    return this._http.get("http://192.168.2.6:5000/guBatteryState")
                .map((response : Response) => <IBatteryState[]>response.json());
}

getGULinkStateObservable() : Observable <IGULinkState[]>{
    return this._http.get("http://192.168.2.6:5000/guLinkState")
                .map((response : Response) => <IGULinkState[]>response.json());
}


}
