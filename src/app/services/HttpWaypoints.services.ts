import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import{WayPointsComponent} from '../waypoints/waypoints.component';

@Injectable()
export class HttpWaypoints{
public subject = new Subject<any>();
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

showWayPoints(message:string)
{this.subject.next(message);

 console.log("in service"+message);
}

  getMessage(): Observable<any> {

console.log("inside get")
console.log(this.subject);
        return this.subject.asObservable();
    }

}
