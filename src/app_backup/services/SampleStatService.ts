import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';

import {ISample} from './SampleStat';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SampleStatsService{

constructor(private _http:Http){}

getSampleDataObservable() : Observable<ISample[]>{
    return this._http.get('https://jsonplaceholder.typicode.com/posts/1')
    .map((response : Response) => <ISample[]>response.json());
}

}
