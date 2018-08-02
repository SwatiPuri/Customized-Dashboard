import {Component} from '@angular/core';
import {MotorApis} from '../services/PostStartMotor';
import {SharedPostResponseService} from '../services/SharedPostResponse';
import {HttpWaypoints} from '../services/HttpWaypoints.services';

import {ConnectService} from '../services/Connect';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
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
    progressPanel : boolean = false;
    height : number = 70;
    missionPanelHeight : number = 70;
    connectionPanelHeight : number = 70;
    flightPanelHeight : number = 70;
    progessPanelHeight : number = 70;

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
//    connectValues : Connection;
  //  connectValuesFromForm : Connection;
    ipAdresss : string;
    port : string;

    ipAdresssToSend : string;
    portToSend : string;

    ImageClicked(value : string) : void{
        console.log("status : " +  value);
    }
    constructor(private _motorApis:MotorApis,
        private responseData:SharedPostResponseService,
        public waypointservice:HttpWaypoints,
        private _heightResponse : SharedPostResponseService,
        private connectObj : ConnectService
    ){}

    ngOnInit(){
        this.responseData.currentMessage.subscribe(message => this.message = message);
        this._heightResponse.currentHeight.subscribe(
            height => { this.height = height,
                        this.missionPanelHeight = height,
                        this.connectionPanelHeight = height,
                        this.flightPanelHeight = height,
                        this.progessPanelHeight = height}
        );

    this.connectObj.ipSubjectOb.subscribe((data)=>{
            this.ipAdresssToSend=data;
            console.log("Subscribed"+data);
        });

        this.connectObj.portSubjectOb.subscribe((data)=>{
            this.portToSend=data;
            console.log("Subscribed"+data);
        });   

 }


    MissionPlan() : void{
        console.log("mission plan is ready");
        this.missionPanel = true;
        this.MainPanel = false;
        this.connectionPanel = false;
        this.flightPanel = false;
        this.progressPanel = false;
        this.waypointservice.showWayPoints("invokeReadCSV");
        this.missionPanel? this._heightResponse.changeHeight(70) : this._heightResponse.changeHeight(100);
    }

    flyDrone() : void{
        console.log("Drone is ready to fly");
        this.MainPanel = false;
        this.flightPanel = true;
        this.missionPanel = false;
        this.connectionPanel = false;
        this.progressPanel = false;
    }

    progressBars() : void{
        console.log("progressBars section");
        this.MainPanel = false;
        this.flightPanel = false;
        this.missionPanel = false;
        this.connectionPanel = false;
        this.progressPanel = true;
    }

    OtherOptions() : void{
        console.log("for other options");
    }

    goToMainPanel() :void{
        this.missionPanel = false;
        this.MainPanel = true;
        this.connectionPanel = false;
        this.flightPanel = false;
        this.progressPanel = false;
    }
    connectfn() : void{
        console.log("connect");
        this.MainPanel = false;
        this.connectionPanel = true;
        this.flightPanel = false;
        this.missionPanel = false;
        this.progressPanel = false;
    }

    connect(){
        console.log(this.ipAdresss);
        console.log(this.port);
      //  this.connectValuesFromForm.ipAdress = this.ipAdresss;
      //  this.connectValuesFromForm.port = this.port;
     //   console.log("connectValuesFromForm");
     //   console.log(this.connectValuesFromForm.ipAdress);
     //   console.log(this.connectValuesFromForm.port);
        //this.connectObj.connect(this.connectValuesFromForm);
        this.connectObj.ipsetter(this.ipAdresss);
        this.connectObj.portsetter(this.port);
        this.connectObj.portsetter(this.port);
        this.connectObj.ipsetter(this.ipAdresss);
        this.responseData.changeMessage("Connection");
        console.log("this.ipAdresssToSend "+this.ipAdresssToSend);
        console.log("this.portToSend "+ this.portToSend);
        console.log();
        this._motorApis.connect(this.ipAdresss,this.port)
        .retry(3)
        
        .subscribe(
            data=>{this.postConnectResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
            error=>{alert('Error in postConnectResponse request');
            this.responseData.changeMessage("Error in postConnectResponse request");},
            ()=>console.log("finished"+JSON.stringify(this.postConnectResponse))
        )
      }
      postStartMotor(){
        this.responseData.changeMessage("Start Motor");
          this._motorApis.postStartMotor(this.ipAdresssToSend,this.portToSend)
          .subscribe(
             // data=>this.postStartMotorResponse=JSON.stringify(data),
             data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
              error=>{alert('Error in post start motor request');
              this.responseData.changeMessage("Error in post start motor request");},
              ()=>console.log("finished"+JSON.stringify(this.postStartMotorResponse))
          )


      }

      poststopMotor(){
        this.responseData.changeMessage("Stop Motor");
           this._motorApis.postStopMotor(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postStopMotorResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data))},
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage("Error in post start motor request");},
               ()=>console.log("finished"+JSON.stringify(this.postStopMotorResponse))
           )


       }

       poststopFlight(){
        this.responseData.changeMessage("Stop Flight");
           this._motorApis.stopFlight(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.poststopFlightResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>{alert('Error in post sto flight request');
               this.responseData.changeMessage("Error in post sto flight request");},
               ()=>console.log("finished"+JSON.stringify(this.poststopFlightResponse))
           )


       }

       poststartFlight(){
        this.responseData.changeMessage("Start Flight");
           this._motorApis.startFlight(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.poststartFlightResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data))},
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage("Error in post start motor request");    },
               ()=>console.log("finished"+JSON.stringify(this.poststartFlightResponse))
           )


       }

       pauseFlight(){
        this.responseData.changeMessage("Pause Flight");
           this._motorApis.pauseFlight(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postpauseFlightResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>{alert('Error in post postpauseFlightResponse request');
               this.responseData.changeMessage("Error in post postpauseFlightResponse request");},
               ()=>console.log("finished"+JSON.stringify(this.postpauseFlightResponse))
           )


       }


       comeHome(){
        this.responseData.changeMessage("RTL");
           this._motorApis.comeHome(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postcomeHomeResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post start motor request'),
               ()=>console.log("finished"+JSON.stringify(this.postcomeHomeResponse))
           )


       }


       clearWayPoints(){
        this.responseData.changeMessage("Clear waypoints");
           this._motorApis.clearWayPoints(this.ipAdresssToSend,this.portToSend)
           .subscribe(
              // data=>this.postclearWayPointsResponse=JSON.stringify(data),
              data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage("Error in post start motor request");},
               ()=>console.log("finished"+JSON.stringify(this.postclearWayPointsResponse))
           )


       }

       flyToWayPoint(){
        this.responseData.changeMessage("Fly to waypoint");
           this._motorApis.flyToWayPoint(this.ipAdresssToSend,this.portToSend)
           .subscribe(
              // data=>this.postflyToWayPointResponse=JSON.stringify(data),
              data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>
               {alert('Error in Fly to waypoint request');
               this.responseData.changeMessage("Error in Fly to waypoint request");},
               ()=>console.log("finished"+JSON.stringify(this.postflyToWayPointResponse))
           )


       }

       initProgressUpdate(){
        this.responseData.changeMessage('Init Progress Update');
           this._motorApis.initProgressUpdate(this.ipAdresssToSend,this.portToSend)
           .subscribe(
             //  data=>this.postinitProgressUpdateResponse=JSON.stringify(data),
             data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage('Error in post start motor request')},
               ()=>console.log("finished"+JSON.stringify(this.postinitProgressUpdateResponse))
           )


       }

       flightProgressUpdate(){
        this.responseData.changeMessage('Flight Progress Update');
        
           this._motorApis.flightProgressUpdate(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postflightProgressUpdateResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));
               },
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage('Error in Flight Progress Update');},
               ()=>console.log("finished"+JSON.stringify(this.postflightProgressUpdateResponse))
           )


       }

       uploadProgressUpdate(){
        this.responseData.changeMessage('Upload Progress Update');
           this._motorApis.uploadProgressUpdate(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postuploadProgressUpdateResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));},
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage('Error in Upload Progress Update');},
               ()=>console.log("finished"+JSON.stringify(this.postuploadProgressUpdateResponse))
           )


       }

       batteryProgressUpdate(){
        this.responseData.changeMessage('Battery Progress Update');
        
           this._motorApis.batteryProgressUpdate(this.ipAdresssToSend,this.portToSend)
           .subscribe(
             //  data=>this.postbatteryProgressUpdateResponse=JSON.stringify(data),
             data=>{this.postResponse=JSON.stringify(data);
               // this.responseData.changeMessage(JSON.stringify(data));
            },
               error=>{alert('Error in post start motor request');
               this.responseData.changeMessage('Error in Battery Progress Update');
            },
               ()=>console.log("finished"+JSON.stringify(this.postbatteryProgressUpdateResponse))
           )


       }

       setFlightMode(){
        this.responseData.changeMessage('Set Flight Mode');
        
           this._motorApis.setFlightMode(this.ipAdresssToSend,this.portToSend)
           .subscribe(
             //  data=>this.postsetFlightModeResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>{alert('Error in Set Flight Mode request');
               this.responseData.changeMessage('Error in Set Flight Mode request');
            },
               ()=>console.log("finished"+JSON.stringify(this.postsetFlightModeResponse))
           )


       }

       setEmergencyProc(){
        this.responseData.changeMessage('Set Emergency Proc');
           this._motorApis.setEmergencyProc(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postsetEmergencyProcResponse=JSON.stringify(data),
               data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));
            },
               error=>{alert('Error in Set Emergency Proc request');
               this.responseData.changeMessage('Error in Set Emergency Proc');
            },
               ()=>console.log("finished"+JSON.stringify(this.postsetEmergencyProcResponse))
           )


       }

       sendInspectType(){

           this._motorApis.sendInspectType(this.ipAdresssToSend,this.portToSend)
           .subscribe(
               //data=>this.postsendInspectTypeResponse=JSON.stringify(data),
               data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectType request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendInspectTypeResponse))
           )


       }

       sendInspectPitch(){

           this._motorApis.sendInspectPitch(this.ipAdresssToSend,this.portToSend)
           .subscribe(
             // data=>this.postsendInspectPitchResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendInspectPitchResponse))
           )


       }

       sendA7RType(){

           this._motorApis.sendA7RType(this.ipAdresssToSend,this.portToSend)
           .subscribe(
              // data=>this.postsendA7RTypeResponse=JSON.stringify(data),
              data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendA7RTypeResponse))
           )


       }

       sendA7RPitch(){

           this._motorApis.sendA7RPitch(this.ipAdresssToSend,this.portToSend)
           .subscribe(
             //  data=>this.postsendA7RPitchResponse=JSON.stringify(data),
             data=>this.postResponse=JSON.stringify(data),
               error=>alert('Error in post sendInspectPitch request'),
               ()=>console.log("finished"+JSON.stringify(this.postsendA7RPitchResponse))
           )


       }

       stickCommand(){
        this.responseData.changeMessage('Stick Comamnd');
           this._motorApis.stickCommand(this.ipAdresssToSend,this.portToSend)
           .subscribe(
              // data=>this.poststickCommandResponse=JSON.stringify(data),
              data=>{this.postResponse=JSON.stringify(data);
                this.responseData.changeMessage(JSON.stringify(data));
              },
               error=>{alert('Error in post sendInspectPitch request');
               this.responseData.changeMessage('Error in Stick Comamnd');},
               ()=>console.log("finished"+JSON.stringify(this.poststickCommandResponse))
           )


       }
}
