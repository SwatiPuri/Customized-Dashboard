import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class HttpWaypoints{
wayPointList:any[];
constructor(private _http:Http){}

postWaypointsObservable(data) {
this.wayPointList=data;
 console.log("hello"+JSON.stringify(this.wayPointList));
    //var params='json='+json;
    var headers=new Headers();
    //console.log("In postWaypointsObservable");
    headers.append('Content-Type','application/json');
    return this._http.post('http://192.168.2.6:5000/navigation/appendWayPoints', this.wayPointList,{
        headers:headers})
    .map((res=>res.json()));
}

}
