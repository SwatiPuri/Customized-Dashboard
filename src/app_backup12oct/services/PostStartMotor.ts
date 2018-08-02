import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http'
import {Connection} from '../services/Connection';
import {ConnectService} from '../services/Connect';
@Injectable()
export class MotorApis{
    ipAdress:string;
    port:string;
    connectionstring : string;
    constructor(private _http:Http,
    	private connectObj : ConnectService    
    ){

    }

    ngOnInit(){
        this.connectObj.ipSubjectOb.subscribe((data)=>{
            this.ipAdress=data;
            console.log("Subscribed in POST"+data);
        });

        this.connectObj.portSubjectOb.subscribe((data)=>{
            this.port=data;
            console.log("Subscribed in POST"+data);
        });
    }   
postStartMotor(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In postStartMotor");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/startMotor',params,{
        headers:headers})
    .map((res=>res.json()));
}

postStopMotor(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In post Stop Motor");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/stopMotor',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendA7RType(ip:string,port:string){

    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendA7RType");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/sendA7RType',params,{
        headers:headers})
    .map((res=>res.json()));
}

stickCommand(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In stick Command");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/stickCommand',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendA7RPitch(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendA7RPitch");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/sendA7RPitch',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendInspectPitch(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In send Inspect Pitch");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/sendInspectPitch',params,{
        headers:headers})
    .map((res=>res.json()));
}

sendInspectType(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In sendInspectType");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/sendInspectType',params,{
        headers:headers})
    .map((res=>res.json()));
}

setEmergencyProc(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In setEmergencyProc");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/droneSettings/setEmergencyProc',params,{
        headers:headers})
    .map((res=>res.json()));
}
setFlightMode(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In set Fligh tMode");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/droneSettings/setFlightMode',params,{
        headers:headers})
    .map((res=>res.json()));
}

batteryProgressUpdate(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In batteryProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/batteryProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}
uploadProgressUpdate(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In uploadProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/uploadProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}

flightProgressUpdate(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In flightProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/flightProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}
initProgressUpdate(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In initProgressUpdate");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/initProgressUpdate',params,{
        headers:headers})
    .map((res=>res.json()));
}

flyToWayPoint(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In flyToWayPoint");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/flyToWayPoint',params,{
        headers:headers})
    .map((res=>res.json()));
}

clearWayPoints(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In clearWayPoints");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/clearWayPoints',params,{
        headers:headers})
    .map((res=>res.json()));
}

comeHome(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In comeHome");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/comeHome',params,{
        headers:headers})
    .map((res=>res.json()));
}

pauseFlight(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In pauseFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/pauseFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}

startFlight(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In startFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/startFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}

stopFlight(ip:string,port:string){
    var json=JSON.stringify({});
    var params = json;
    var headers=new Headers();
    console.log("In stopFlight");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://'+ip+':'+port+'/navigation/stopFlight',params,{
        headers:headers})
    .map((res=>res.json()));
}
connect(ip:string,port:string){
var json=JSON.stringify({"ipAddress":"192.168.2.98","port":3001});
var params = json;
var headers=new Headers();
this.connectObj.portsetter(port);
this.connectObj.ipsetter(ip);
console.log("In connect" + "http://"+ip+':'+port+'/connect',params);
headers.append('Content-Type','application/json');
return this._http.post('http://'+ip+':'+port+'/connect',params,{
    headers:headers})
.map((res=>res.json()));
}
}
