import {Component} from '@angular/core';
import {HttpWaypoints} from '../services/HttpWaypoints.services';
import {Http,Response} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector : 'waypoints',
    templateUrl : './waypoints.component.html',
    styleUrls: ['./waypoints.component.css'],
    providers :[]
})
export class WayPointsComponent{
postWaypoints:String;
csvUrl: string = './../assets/sample.csv';  // URL to web API
csvData: any[] = [];
waypointsArray:any[];
a:boolean=false;
showTable:boolean=false;
message:any;
subscription: Subscription;
    constructor(private _httpWaypoints:HttpWaypoints,
    private http:Http) {
      this.subscription = this._httpWaypoints.getMessage().subscribe(message => { this.message = message;
this.readCsvData(true); });
         }


readCsvData (a:boolean) {
        this.showTable=true;
        console.log("error abt to come");
        this.http.get(this.csvUrl)
        .subscribe(
          data => this.extractData(data),
          err => this.handleError(err)
        );
      }

      private extractData(res: Response) {

        let csvData = res['_body'] || '';
        let allTextLines = csvData.split(/\r\n|\n/);
        let headers = allTextLines[0].split(',');
        let lines = [];

        for ( let i = 0; i < allTextLines.length; i++) {
            // split content based on comma
            let data = allTextLines[i].split(',');
            if (data.length == headers.length) {
                let tarr = [];
                for ( let j = 0; j < headers.length; j++) {
                    tarr.push(data[j]);
                    //console.log(data[j]);
                }
                console.log("tarr"+tarr);
                lines.push(tarr);
            }
        }
        this.csvData = lines;
        console.log("csvData"+this.csvData[0]);

      }

      private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return errMsg;
      }
  //  connect(){
    //  this._connectService.connect();

    //}
postWaypoints1(){
      let appendedWaypoints=[];
      for(let i=0;i<this.csvData.length;i++)
      {let waypointTemp=this.csvData[i];
       //console.log(waypointTemp+"hi");
       let wayPointTempJSON={
       "v_id":Number(waypointTemp[0]),
       "wp_type":Number(waypointTemp[1]),
       "latitude":Number(waypointTemp[2]),
       "longitude":Number(waypointTemp[3]),
       "height":Number(waypointTemp[4]),
       "camera_roll":Number(waypointTemp[5]),
       "camera_pitch":Number(waypointTemp[6]),
       "camera_yaw":Number(waypointTemp[7]),
       "max_speed":Number(waypointTemp[8]),
       "max_acceleration":Number(waypointTemp[9]),
       "wp_event":Number(waypointTemp[10]),
       "wait_time":Number(waypointTemp[11]),
       "flags":Number(waypointTemp[12])
       }
       appendedWaypoints.push(wayPointTempJSON);
       console.log(JSON.stringify(appendedWaypoints)+"value of"+i);
 }
  let wayPointsList={
  "waypointlist":appendedWaypoints
  };
   //console.log("In postwaypoints state function");
        this._httpWaypoints.postWaypointsObservable(wayPointsList)
        .subscribe(
            data=>this.postWaypoints=JSON.stringify(data),
            error=>alert('Error in post request'),
            ()=>console.log("finished"+JSON.stringify(this.postWaypoints))
        )


    }
}
