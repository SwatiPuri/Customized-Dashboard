import {Injectable,OnInit} from '@angular/core';
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
import {Connection} from './Connection';
import {ConnectService} from './Connect';
@Injectable()
export class DroneStatsService{
    connectionObj : Connection;
    connectionstring : string = ""; 
constructor(private _http:Http,
    private ConnectService:ConnectService){}
    ngOnInit(){
        this.ConnectService.connection.subscribe((connection)=>
        {this.connectionObj=connection;
            this.connectionstring = "http://"+connection.ipAdress+":"+connection.port;
            
        });
    }
getDroneStatsObservable() : Observable<IDroneStats[]>{
    return this._http.get(this.connectionstring+'/droneBasicInfo')
    .map((response : Response) => <IDroneStats[]>response.json());
}

getDroneOrientationObservable() : Observable <IDroneOrientation[]>{
    return this._http.get(this.connectionstring+'/droneOrientation')
    .map((response : Response) => <IDroneOrientation[]>response.json());
}

getDroneENUPositionObservable() : Observable <IDroneENUPositon[]>{
    return this._http.get(this.connectionstring+'/droneENUPosition')
    .map((response : Response) => <IDroneENUPositon[]>response.json());
}

getGPSStateObservable() : Observable<IGPSState[]>{
    return this._http.get(this.connectionstring+'/droneGPSState')
    .map((response : Response) => <IGPSState[]>response.json());
}

getDroneFlightStateObservable() : Observable <IDroneFlightState[]>{
    return this._http.get(this.connectionstring+'/droneFlightState')
    .map((response : Response) => <IDroneFlightState[]>response.json());
}

getDroneFlightModeObservable() : Observable <IDroneFlightMode[]>{
    return this._http.get(this.connectionstring+'/droneFlightMode')
    .map((response : Response) => <IDroneFlightMode[]>response.json());
}

getDroneBatteryLevelObservable() : Observable<number>{
    return this._http.get(this.connectionstring+'/droneBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getServiceInfoObservable() : Observable<IServiceInfo[]>{
    return this._http.get(this.connectionstring+'/serviceInfo')
    .map((response : Response) => <IServiceInfo[]>response.json());
}
getPayloadInfoObservable() : Observable <IPayloadInfo[]>{
    return this._http.get(this.connectionstring+'/dronePayloadInfo')
                .map((response : Response) => <IPayloadInfo[]>response.json());
}
getLicenceInfoObservable() : Observable <ILicenceInfo[]>{
    return this._http.get(this.connectionstring+'/droneLicenseInfo')
                .map((response : Response) => <ILicenceInfo[]>response.json());
}

getGpsPositionObservable() : Observable<IGpsPositionInfo[]>{
    return this._http.get(this.connectionstring+'/droneGPSPosition')
    .map((response : Response) => <IGpsPositionInfo[]>response.json());
}

getRecentAlerts() :Observable<String[]>{
return this._http.get(this.connectionstring+'/allAlerts')
.map((response : Response) => <String[]>response.json());
}
getBatteryStateObservable() : Observable <IBatteryState[]>{
    return this._http.get(this.connectionstring+'/droneBatteryState')
                .map((response : Response) => <IBatteryState[]>response.json());
}
getBatteryInfoObservable() : Observable <IBatteryInfo[]>{
    return this._http.get(this.connectionstring+'/droneBatteryInfo')
                .map((response : Response) => <IBatteryInfo[]>response.json());
}

getConnectionStateGUObservable() : Observable <IGUConnectionState[]>{
    return this._http.get(this.connectionstring+'guConnectionState')
                .map((response : Response) => <IGUConnectionState[]>response.json());
}

getTypeGUObservable() : Observable <IGUType[]> {
    return this._http.get(this.connectionstring+'/guType')
                .map((response : Response) => <IGUType[]>response.json());
}

getVersionGUObservable() : Observable <IGUVersion[]> {
    return this._http.get(this.connectionstring+'/guVersion')
                .map((response : Response)=> <IGUVersion[]>response.json());
}

getdroneFlightTimeObservable() : Observable <String> {
    return this._http.get(this.connectionstring+'/droneFlightTime')
                     .map((response : Response)=> <String>response.json());
}
getCameraOrientationObservable() : Observable<ICameraOrientation[]>{
    return this._http.get(this.connectionstring+'/cameraOrientation')
    .map((response : Response) => <ICameraOrientation[]>response.json());
}

getGroundUnitBatteryLevelObservable() : Observable<number>{
    return this._http.get(this.connectionstring+'/guBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getGUBatteryStateObservable() : Observable <IBatteryState[]>{
    return this._http.get(this.connectionstring+'/guBatteryState')
                .map((response : Response) => <IBatteryState[]>response.json());
}

getGULinkStateObservable() : Observable <IGULinkState[]>{
    return this._http.get(this.connectionstring+'/guLinkState')
                .map((response : Response) => <IGULinkState[]>response.json());
}

getBatteryInfoObservableGU() : Observable <IBatteryInfo[]>{
    return this._http.get(this.connectionstring+'/guBatteryInfo')
                .map((response : Response) => <IBatteryInfo[]>response.json());
}

}
