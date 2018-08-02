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
import {ConnectService} from './Connect'

@Injectable()
export class DroneStatsService{
ip :string;
port:string;
constructor(private _http:Http,
private connectService:ConnectService){}
ngOnInit(){
    this.connectService.ipSubjectOb.subscribe((data)=>this.ip=data);
    this.connectService.portSubjectOb.subscribe((data)=>this.port=data);
}
getDroneStatsObservable(ip:string,port:string) : Observable<IDroneStats[]>{
    return this._http.get('http://'+ip+':'+port+'/droneBasicInfo')
    .map((response : Response) => <IDroneStats[]>response.json());
}

getDroneOrientationObservable(ip:string,port:string) : Observable <IDroneOrientation[]>{
    console.log("IP -------------"+ip);
    console.log("PORT -------------"+port);
    return this._http.get('http://'+ip+':'+port+'/droneOrientation')
    .map((response : Response) => <IDroneOrientation[]>response.json());
}

getDroneENUPositionObservable(ip:string,port:string) : Observable <IDroneENUPositon[]>{
    return this._http.get('http://'+ip+':'+port+'/droneENUPosition')
    .map((response : Response) => <IDroneENUPositon[]>response.json());
}

getGPSStateObservable(ip:string,port:string) : Observable<IGPSState[]>{
    return this._http.get('http://'+ip+':'+port+'/droneGPSState')
    .map((response : Response) => <IGPSState[]>response.json());
}

getDroneFlightStateObservable(ip:string,port:string) : Observable <IDroneFlightState[]>{
    return this._http.get('http://'+ip+':'+port+'/droneFlightState')
    .map((response : Response) => <IDroneFlightState[]>response.json());
}

getDroneFlightModeObservable(ip:string,port:string) : Observable <IDroneFlightMode[]>{
    return this._http.get('http://'+ip+':'+port+'/droneFlightMode')
    .map((response : Response) => <IDroneFlightMode[]>response.json());
}

getDroneBatteryLevelObservable(ip:string,port:string) : Observable<number>{
    return this._http.get('http://'+ip+':'+port+'/droneBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getServiceInfoObservable(ip:string,port:string) : Observable<IServiceInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/serviceInfo')
    .map((response : Response) => <IServiceInfo[]>response.json());
}
getPayloadInfoObservable(ip:string,port:string) : Observable <IPayloadInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/dronePayloadInfo')
                .map((response : Response) => <IPayloadInfo[]>response.json());
}
getLicenceInfoObservable(ip:string,port:string) : Observable <ILicenceInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/droneLicenseInfo')
                .map((response : Response) => <ILicenceInfo[]>response.json());
}

getGpsPositionObservable(ip:string,port:string) : Observable<IGpsPositionInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/droneGPSPosition')
    .map((response : Response) => <IGpsPositionInfo[]>response.json());
}

getRecentAlerts(ip:string,port:string) :Observable<String[]>{
return this._http.get('http://'+ip+':'+port+'/allAlerts')
.map((response : Response) => <String[]>response.json());
}
getBatteryStateObservable(ip:string,port:string) : Observable <IBatteryState[]>{
    return this._http.get('http://'+ip+':'+port+'/droneBatteryState')
                .map((response : Response) => <IBatteryState[]>response.json());
}
getBatteryInfoObservable(ip:string,port:string) : Observable <IBatteryInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/droneBatteryInfo')
                .map((response : Response) => <IBatteryInfo[]>response.json());
}

getConnectionStateGUObservable(ip:string,port:string) : Observable <IGUConnectionState[]>{
    return this._http.get('http://'+ip+':'+port+'/guConnectionState')
                .map((response : Response) => <IGUConnectionState[]>response.json());
}

getTypeGUObservable(ip:string,port:string) : Observable <IGUType[]> {
    return this._http.get('http://'+ip+':'+port+'/guType')
                .map((response : Response) => <IGUType[]>response.json());
}

getVersionGUObservable(ip:string,port:string) : Observable <IGUVersion[]> {
    return this._http.get('http://'+ip+':'+port+'/guVersion')
                .map((response : Response)=> <IGUVersion[]>response.json());
}

getdroneFlightTimeObservable(ip:string,port:string) : Observable <String> {
    return this._http.get('http://'+ip+':'+port+'/droneFlightTime')
                     .map((response : Response)=> <String>response.json());
}
getCameraOrientationObservable(ip:string,port:string) : Observable<ICameraOrientation[]>{
    return this._http.get('http://'+ip+':'+port+'/cameraOrientation')
    .map((response : Response) => <ICameraOrientation[]>response.json());
}

getGroundUnitBatteryLevelObservable(ip:string,port:string) : Observable<number>{
    return this._http.get('http://'+ip+':'+port+'/guBatteryLevel')
    .map((response : Response) => <number>response.json());
}

getGUBatteryStateObservable(ip:string,port:string) : Observable <IBatteryState[]>{
    return this._http.get('http://'+ip+':'+port+'/guBatteryState')
                .map((response : Response) => <IBatteryState[]>response.json());
}

getGULinkStateObservable(ip:string,port:string) : Observable <IGULinkState[]>{
    return this._http.get('http://'+ip+':'+port+'/guLinkState')
                .map((response : Response) => <IGULinkState[]>response.json());
}

getBatteryInfoObservableGU(ip:string,port:string) : Observable <IBatteryInfo[]>{
    return this._http.get('http://'+ip+':'+port+'/guBatteryInfo')
                .map((response : Response) => <IBatteryInfo[]>response.json());
}

}
