import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http'

@Injectable()
export class MotorApis{
    constructor(private _http:Http){

    }
postStartMotor(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In postStartMotor");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/startMotor',params,{
        headers:headers})
    .map((res=>res.json()));
}

postStopMotor(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In post Stop Motor");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/stopMotor',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendA7RType(){

    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendA7RType");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/sendA7RType',params,{
        headers:headers})
    .map((res=>res.json()));
}

stickCommand(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In stick Command");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/stickCommand',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendA7RPitch(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendA7RPitch");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/sendA7RPitch',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendInspectPitch(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In send Inspect Pitch");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/sendInspectPitch',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendInspectType(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendInspectType");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/sendInspectType',params,{
        headers:headers})
    .map((res=>res.json()));
}

setEmergencyProc(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In setEmergencyProc");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/droneSettings/setEmergencyProc',params,{
        headers:headers})
    .map((res=>res.json()));
}
setFlightMode(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In set Fligh tMode");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/droneSettings/setFlightMode',params,{
        headers:headers})
    .map((res=>res.json()));
}

batteryProgressUpdate(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In batteryProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/batteryProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}
uploadProgressUpdate(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In uploadProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/uploadProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}

flightProgressUpdate(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In flightProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/flightProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}
initProgressUpdate(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In initProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/initProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}

flyToWayPoint(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In flyToWayPoint");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/flyToWayPoint',params,{
        headers:headers})
    .map((res=>res.json()));
}

clearWayPoints(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In clearWayPoints");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/clearWayPoints',params,{
        headers:headers})
    .map((res=>res.json()));
}

comeHome(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In comeHome");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/comeHome',params,{
        headers:headers})
    .map((res=>res.json()));
}

pauseFlight(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In pauseFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/pauseFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}

startFlight(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In startFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/startFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}

stopFlight(){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In stopFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://192.168.2.6:5000/navigation/stopFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}
connect(){
var json=JSON.stringify({"ipAddress":"192.168.2.6","port":3001});
var params = json;
var headers=new Headers();
console.log("In connect");
headers.append('Content-Type','application/json');
return this._http.post('http://192.168.2.6:5000/connect',params,{
    headers:headers})
.map((res=>res.json()));
}
}
