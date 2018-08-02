import {Component} from '@angular/core'
@Component({
    selector : 'waypoints',
    templateUrl : './waypoints.component.html',
    styleUrls: ['./waypoints.component.css']
})
export class WayPointsComponent{

waypointsArray:any[];

constructor(){
this.waypointsArray=[
{waypoint:'Waypoint 1', latitude:35.0407928, longitude:117.8299887, altitude:100},
{waypoint:'Waypoint 2', latitude:35.0407786, longitude:117.8299993, altitude:100},
{waypoint:'Waypoint 3', latitude:35.0407873, longitude:117.8299418, altitude:100},
{waypoint:'Waypoint 4', latitude:35.0407572, longitude:117.8299612, altitude:100},
{waypoint:'Waypoint 5', latitude:35.0407675, longitude:117.8299443, altitude:100}
]
}

}
