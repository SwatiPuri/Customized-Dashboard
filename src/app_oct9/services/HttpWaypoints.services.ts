import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';

@Injectable()
export class HttpWaypoints{

constructor(private _http:Http){}

postWaypointsObservable() {
    var json=JSON.stringify({var1:'test',var2:3});
    var params='json='+json;
    var headers=new Headers();
    console.log("In postWaypointsObservable");
    headers.append('Content-Type','application/x-www-form-urlencoded');
    return this._http.post('http://validate.jsontest.com',params,{
        headers:headers})
    .map((res=>res.json()));
}

}
