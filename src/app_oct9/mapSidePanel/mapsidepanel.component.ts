import {Component} from '@angular/core';
import {MotorApis} from '../services/PostStartMotor';
import {SharedPostResponseService} from '../services/SharedPostResponse';
@Component({
    selector : 'side-panel',
    templateUrl : './sidepanel.copmonet.html',
    styleUrls : ['./sidepanel.component.css'],
    providers : [MotorApis]
})
export class SidePanelComponent{
    
    ShowMissionPlan : boolean = false;
    flag : number = 0;
    connectionPanel : boolean = false;
    missionPanel : boolean = false;
    flightPanel : boolean = false;
    MainPanel : boolean = true;

    postStartMotorResponse : string;
    postStopMotorResponse : string;
    poststartFlightResponse : string;
    poststopFlightResponse : string;
    postpauseFlightResponse : string;
    postcomeHomeResponse : string;
    postclearWayPointsResponse : string;
    postflyToWayPointResponse : string;
    postinitProgressUpdateResponse : string;
    postflightProgressUpdateResponse : string;
    postuploadProgressUpdateResponse : string;
    postbatteryProgressUpdateResponse : string;
    postsetFlightModeResponse : string;
    postsetEmergencyProcResponse : string;
    postsendInspectTypeResponse : string;
    postsendInspectPitchResponse : string;
    postsendA7RTypeResponse : string;
    postsendA7RPitchResponse : string;
    poststickCommandResponse : string;
    postConnectResponse : string;
    postResponse : string;
    message : String;
    ImageClicked(value : string) : void{
        console.log("status : " +  value);
    }
    constructor(private _motorApis:MotorApis,
        private responseData:SharedPostResponseService
    ){}

    ngOnInit(){
        this.responseData.currentMessage.subscribe(message => this.message = message);
    }
    MissionPlan() : void{
        console.log("mission plan is ready");
        this.missionPanel = true;
        this.MainPanel = false;
        this.connectionPanel = false;
        this.flightPanel = false;
    }

    flyDrone() : void{
        console.log("Drone is ready to fly");
        this.MainPanel = false;
        this.flightPanel = true;
        this.missionPanel = false;
        this.connectionPanel = false;
    }

    OtherOptions() : void{
        console.log("for other options");
    }

    goToMainPanel() :void{
        this.missionPanel = false;
        this.MainPanel = true;
        this.connectionPanel = false;
        this.flightPanel = false;
    }
    connectfn() : void{
        console.log("connect");
        this.MainPanel = false;
        this.connectionPanel = true;
        this.flightPanel = false;
        this.missionPanel = false;
    }

    connect(){
        
        this.responseData.changeMessage("Connection");
        this._motorApis.connect()
        .subscribe(
            data=>this.postConnectResponse=JSON.stringify(data),
            error=>alert('Error in postConnectResponse request'),
            ()=>console.log("finished"+JSON.stringify(this.postConnectResponse))
        )
      }
      postStartMotor(){
        this.responseData.changeMessage("Start Motor");
          this._motorApis.postStartMotor()
          .subscribe(
             // data=>this.postStartMotorResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
              error=>alert('Error in post start motor request'),
              ()=>console.log("finished"+JSON.stringify(this.postStartMotorResponse))
          )
  
  
      }
  
      poststopMotor(){
  
           this._motorApis.postStopMotor()
           .subscribe(
               //data=>this.postStopMotorResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postStopMotorResponse))
           )
  
  
       }
  
       poststopFlight(){
  
           this._motorApis.stopFlight()
           .subscribe(
               //data=>this.poststopFlightResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sto flight request'),
               ()=>console.log("finished"+JSON.stringify(this.poststopFlightResponse))
           )
  
  
       }
  
       poststartFlight(){
  
           this._motorApis.startFlight()
           .subscribe(
               //data=>this.poststartFlightResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.poststartFlightResponse))
           )
  
  
       }
  
       pauseFlight(){
  
           this._motorApis.pauseFlight()
           .subscribe(
               //data=>this.postpauseFlightResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post postpauseFlightResponse request'),
               ()=>console.log("finished"+JSON.stringify(this.postpauseFlightResponse))
           )
  
  
       }
  
  
       comeHome(){
  
           this._motorApis.comeHome()
           .subscribe(
               //data=>this.postcomeHomeResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postcomeHomeResponse))
           )
  
  
       }
  
  
       clearWayPoints(){
  
           this._motorApis.clearWayPoints()
           .subscribe(
              // data=>this.postclearWayPointsResponse=JSON.stringify(data),
              data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postclearWayPointsResponse))
           )
  
  
       }
  
       flyToWayPoint(){
  
           this._motorApis.flyToWayPoint()
           .subscribe(
              // data=>this.postflyToWayPointResponse=JSON.stringify(data),
              data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postflyToWayPointResponse))
           )
  
  
       }
  
       initProgressUpdate(){
  
           this._motorApis.initProgressUpdate()
           .subscribe(
             //  data=>this.postinitProgressUpdateResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postinitProgressUpdateResponse))
           )
  
  
       }
  
       flightProgressUpdate(){
  
           this._motorApis.flightProgressUpdate()
           .subscribe(
               //data=>this.postflightProgressUpdateResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postflightProgressUpdateResponse))
           )
  
  
       }
  
       uploadProgressUpdate(){
  
           this._motorApis.uploadProgressUpdate()
           .subscribe(
               //data=>this.postuploadProgressUpdateResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postuploadProgressUpdateResponse))
           )
  
  
       }
  
       batteryProgressUpdate(){
  
           this._motorApis.batteryProgressUpdate()
           .subscribe(
             //  data=>this.postbatteryProgressUpdateResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postbatteryProgressUpdateResponse))
           )
  
  
       }
  
       setFlightMode(){
  
           this._motorApis.setFlightMode()
           .subscribe(
             //  data=>this.postsetFlightModeResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postsetFlightModeResponse))
           )
  
  
       }
  
       setEmergencyProc(){
  
           this._motorApis.setEmergencyProc()
           .subscribe(
               //data=>this.postsetEmergencyProcResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postsetEmergencyProcResponse))
           )
  
  
       }
  
       sendInspectType(){
  
           this._motorApis.sendInspectType()
           .subscribe(
               //data=>this.postsendInspectTypeResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectType request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendInspectTypeResponse))
           )
  
  
       }
  
       sendInspectPitch(){
  
           this._motorApis.sendInspectPitch()
           .subscribe(
             // data=>this.postsendInspectPitchResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendInspectPitchResponse))
           )
  
  
       }
  
       sendA7RType(){
  
           this._motorApis.sendA7RType()
           .subscribe(
              // data=>this.postsendA7RTypeResponse=JSON.stringify(data),
              data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendA7RTypeResponse))
           )
  
  
       }
  
       sendA7RPitch(){
  
           this._motorApis.sendA7RPitch()
           .subscribe(
             //  data=>this.postsendA7RPitchResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendA7RPitchResponse))
           )
  
  
       }
  
       stickCommand(){
  
           this._motorApis.stickCommand()
           .subscribe(
              // data=>this.poststickCommandResponse=JSON.stringify(data),
              data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.poststickCommandResponse))
           )
  
  
       }
}