import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core';
import {DroneStatsService} from '../services/DroneStatServices';
/* importing Interfaces */
import {IDroneStats} from '../services/DroneStat';
import {IServiceInfo} from '../services/serviceInfoInterface';
import {IGpsPositionInfo} from '../services/gpsPositionInterface';
import {IGPSState} from '../services/GPSState';
import {IBatteryInfo} from '../services/BatteryInfo';
import {ILicenceInfo} from '../services/LicenceInfo';
import {IPayloadInfo} from '../services/PayloadInfo';
import {IBatteryState} from '../services/BatteryState';
import {IGUConnectionState} from '../services/guConnectionState';
import {IGUType} from '../services/guType';
import {IGUVersion} from '../services/guVersion';

import {changeMapClass} from '../services/changeMapClass';

import {HttpWaypoints} from '../services/HttpWaypoints.services';
import {Http,Response} from '@angular/http';
import {MotorApis} from '../services/PostStartMotor';
/* importing Services */
//import {ServiceInfoServices} from '../services/serviceInfoServices';
//import {GpsPositionServices} from '../services/gpsPositionServices';
//import {GPSStateServices} from '../services/GPSState.service';
//import {RecentAlertsService} from '../services/GetRecentAlerts';
//import {BatteryInfoService} from '../services/BatteryInfoService';
//import {LicenceInfoService} from '../services/LicenceInfoService';
//import {PayloadInfoService} from '../services/PayloadInfoService';
//import {BatteryStateService} from '../services/BatteryStateService';
//import {DroneBatteryLevelService} from '../services/droneBatteryLevel.services';
//import {ConnectService} from '../services/ConnectService';


@Component({
    selector : 'widget1',
    templateUrl : './latitude.component.html',
	styleUrls : ['./latitude.component.css'],
    providers : [DroneStatsService,changeMapClass,HttpWaypoints,MotorApis
    //ServiceInfoServices,GpsPositionServices,GPSStateServices,RecentAlertsService,
			//	 BatteryInfoService, LicenceInfoService,
		//		PayloadInfoService,BatteryStateService,DroneBatteryLevelService,
        //ConnectService
        ]
})

export class WidgetOneComponent{
    collapseWidgetPanel : boolean = true;
    count : number =1;
    lat_info : number = 20;
    private timer;
    stats:any[];
    getdataBasicInfo : String;
    getdataBasicInfoId1:number;
    getdataBasicInfoId2: String;
    getdata :{};
    sampleJsonMajor:number;
    sampleJsonMinor:number;
    sampleJsonGpsPositionLat:number;
    sampleJsonGpsPositionLong:number;
    sampleJsonGpsPositionAlt:number;
    batteryInfoJsonPackCycle:number;
    batteryInfoJsonSerialNumber:number;
    batteryInfoJsonType:String;
    batteryInfoJsonPackCapacity:number;
    id1 :number=1;
    id2:number = 2;
    showWidgets :boolean = true;
    alertsData = {};
	batteryInfoJson:{};
    licenceInfoJsonValidUntil:number;
    licenceInfoJsonValidType:String;
	payloadInfoJson:{};
    batteryStateJson:{};
    payloadInfoserialNumber:number;
    payloadInfoType:String;
    batteryLevel:number;
    connectionStatus : string;
    GUType : string;
    GUMajorVersion : string;
    GUMinorVersion : string;
    DroneFlightTime : String;
    
    valeSelectionBlockDrone : boolean = false;
    valeSelectionBlockGU : boolean = false;
    valeSelectionBlockBoth : boolean = false; 

    selectedDroneApis : any[]=[''];
    selectedGUApis : any[]=[''];
    selectedApis : boolean = false;
    
    postWaypoints:String;
    csvUrl: string = './../assets/sample.csv';  // URL to web API
    csvData: any[] = [];

    droneBasicInfoFlag : boolean = false;
    droneServiceInfoFlag : boolean = false;
    droneGPSPositionFlag : boolean = false;
    droneBatteryStatsFlag : boolean = false;
    droneLicenceStatsFlag : boolean = false;
    dronePayloadInfoFlag : boolean = false;
    droneFlightTimeFlag : boolean = false;

    guBatteryState : boolean = false;
    guType : boolean = false;
    guVersion : boolean = false;
    guBatteryLevel : boolean = false;
    guConnectionState : boolean = false;
    guLinkState : boolean = false;
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

    droneApis =["droneOrientation","droneENUPosition","droneGPS State","droneFlightState",
"droneFlightMode","droneFlightTime","serviceInfo","droneBasicInfo","droneBatteryInfo",
"droneLicenseInfo","dronePayloadInfo","droneBatteryState","droneGPSState","droneBatteryLevel"]
    
   gUapis = ["guBatteryInfo","guVersion","guType","guBatteryState","guBatteryLevel",
   "guConnectionState","guLinkState"]

showHide(){
     this.showWidgets = !this.showWidgets;
     //this.changeMapClass.emit('col-md-10');
     this._changeMapClass.setMapDivWidth('col-md-11'); 
    }
      
   // @Output()
   // changeMapClass : EventEmitter<String> = new EventEmitter<String>();
    selectOpts(val){
            console.log(val);
    }
    selectApisforDrone(val){
       
        this.selectedDroneApis.push(val);
        //$('#multipleSelect').val();
        console.log("selectApis  "+ this.selectedDroneApis);
        for(var i=0;i<this.selectedDroneApis.length;i++){
            if(val == 'droneOrientation'){
                console.log("api for drone orientation");
                this.getDroneOrientation();

            }
            if(val == 'droneENUPosition'){
                console.log("api for droneENUPosition");
                
            }
            if(val == 'droneGPS State'){
                console.log("api for droneGPS State");
                this.getGpsPosition();
                this.droneGPSPositionFlag = true;
            }
            if(val == 'droneFlightState'){
                console.log("api for droneFlightState");
                this.getDroneFlightState();
                
            }
            if(val == 'droneFlightMode'){
                console.log("api for droneFlightMode");
                this.getDroneFlightState();
            }
            if(val == 'droneFlightTime'){
                console.log("api for droneFlightTime");
                this.getDroneFlightTime();
                this.droneFlightTimeFlag = true;
            }
            if(val == 'serviceInfo'){
                console.log("api for serviceInfo");
                this.getServiceInfo();
                this.droneServiceInfoFlag = true;
            }
            if(val == 'droneBasicInfo'){
                console.log("api for droneBasicInfo");
                ///this.getdataBasicInfo();
                this.getStats();
                this.droneBasicInfoFlag = true;

            }
            if(val == 'droneBatteryInfo'){
                console.log("api for droneBatteryInfo");
                this.getBatteryStats();
            }
            if(val == 'droneLicenseInfo'){
                console.log("api for droneLicenseInfo");
                this.getLicenceStats();
                this.droneLicenceStatsFlag = true;
            }
            if(val == 'dronePayloadInfo'){
                console.log("api for dronePayloadInfo");
                this.getPayloadInfo();
                this.dronePayloadInfoFlag = true;

            }
            if(val == 'droneBatteryState'){
                console.log("api for droneBatteryState");
                this.getBatteryState();
                this.droneBatteryStatsFlag = true;
            }
           
            if(val == 'droneBatteryLevel'){
                console.log("api for droneBatteryLevel");
                this.getDroneBatteryLevel();

            }

        }
           
    }
  
    selectApisforGU(val){
            this.selectedGUApis.push(val);
            for(let i=0;i<this.selectedGUApis.length;i++){
                if(val == 'guBatteryInfo'){
                    
                    //this.getguBatteryInfoe();
                    this.guBatteryState = true;
                }
                if(val == 'guVersion'){
                    
                    //this.getguBatteryInfoe();
                    this.guVersion = true;
                }
                if(val == 'guType'){
                    
                    //this.getguBatteryInfoe();
                    this.guType = true;
                }
                
                if(val == 'guBatteryLevel'){
                    
                    //this.getguBatteryInfoe();
                    this.guBatteryLevel = true;
                }
                if(val == 'guConnectionState'){
                    
                    //this.getguBatteryInfoe();
                    this.guConnectionState = true;
                }
                if(val == 'guLinkState'){
                    
                    //this.getguBatteryInfoe();
                    this.guLinkState = true;
                }
            }
    }
    collapseWidget(){
      
         
        console.log("Inside collapseWidget");
        this.getStats();
        this.getServiceInfo();
        this.getGpsPosition();
		    this.getGPSState();
        this.getRecentAlerts();
      //  this.connect();
        this.getDroneBatteryLevel();
       
    }
    constructor(private _dronestats:DroneStatsService,
    private _serviceInfo:DroneStatsService,
    private _gpsPosition:DroneStatsService,private _GPSstate:DroneStatsService,
    private _recentAlerts : DroneStatsService,private _batteryStats:DroneStatsService,
    private _licenceStats:DroneStatsService,private _batteryStateStats:DroneStatsService,
    private _payloadInfoStats:DroneStatsService,
    private _droneBatteryLevel:DroneStatsService,
    private _connectionStateGU:DroneStatsService,
    private _typeGU : DroneStatsService,
    private _versionGU : DroneStatsService,
    private _droneFlightTime : DroneStatsService,
  //  private _connectService:ConnectService,
    private _changeMapClass : changeMapClass,
    private _httpWaypoints:HttpWaypoints,
    private http:Http,
    private _motorApis:MotorApis
    ){
    }

    getStats(){
        this._dronestats.getDroneStatsObservable()
        .subscribe(
          data =>{this.getdataBasicInfo = data["type"],
          this.getdataBasicInfoId1 = data["Serial_Number"],
          this.getdataBasicInfoId2 = data["Uuid"]},
          //data => this.getdata = JSON.stringify(data),
          error => alert('Error !!!'),
         () => console.log("Success"+JSON.stringify(this.getdataBasicInfo))
        )
    }
    getServiceInfo(){
            this._serviceInfo.getServiceInfoObservable()
            .subscribe(
              data => {this.sampleJsonMajor = data["major"],
              this.sampleJsonMinor = data["minor"]
            },
              error => alert('Error in serviceInfo API !!!'),
             () => console.log("Success for getserviceInfo API"+JSON.stringify(this.sampleJsonMajor))
            )
            }

    getGpsPosition(){
                  this._gpsPosition.getGpsPositionObservable()
                  .subscribe(
                    data => {this.sampleJsonGpsPositionLat = data["latitude"],
                    this.sampleJsonGpsPositionLong = data["longitude"],
                    this.sampleJsonGpsPositionAlt = data["height"]
                  },
                    error => alert('Error in GPS Position API!!!'),
                   () => console.log("Success for getGpsPosition API"+JSON.stringify(this.sampleJsonGpsPositionLat))
                  )
                  }
        
   	getGPSState()
                {this._GPSstate.getGPSStateObservable()
        .subscribe(
          data => this.getdata = data,
          error => alert('Error !!!'),
         () => console.log("Success of GPS State :"+JSON.stringify(this.getdata))
        )
}

    getDroneBatteryLevel(){
        this._droneBatteryLevel.getDroneBatteryLevelObservable()
        .subscribe(
          data => this.batteryLevel = data,
          error => alert('Error !!!'),
         () => console.log("Success of Battery Level :"+this.batteryLevel)
        )
}
	getBatteryStats() {
        console.log("battery information");
        this._batteryStats.getBatteryInfoObservable()
        .subscribe(
            data => {
           // this.batteryInfoJsonPackCycle = data[0]["pack_cycles"],
            this.batteryInfoJsonSerialNumber = data[0]["serialNumber"],
            this.batteryInfoJsonType = data[0]["type"],
            this.batteryInfoJsonPackCapacity = data[0]["pack_capacity"]},
        error => alert('Error in getting battery info'),
        () => console.log("Success"+JSON.stringify(this.batteryInfoJsonPackCycle))
    )
}
    getLicenceStats() {
        console.log("licence information");
        this._licenceStats.getLicenceInfoObservable()
        .subscribe(
            data => {this.licenceInfoJsonValidUntil = data[0]["validUntil"],
            this.licenceInfoJsonValidType = data[0]["type"]},
            error => alert('Error in getting licence info'),
            () => console.log("success"+JSON.stringify(this.licenceInfoJsonValidUntil))
        )
    }

    getRecentAlerts(){
    this._recentAlerts.getRecentAlerts()
    .subscribe(
        data => this.alertsData = data,
        error => alert("Error !!!"),
         () => console.log("Alerts : "+ this.alertsData)
    )
   }

    getBatteryState(){
        console.log("In battery state function");
        this._batteryStateStats.getBatteryStateObservable()
        .subscribe(
            data => this.batteryStateJson = data,
            error => alert('Error in getting battery state info'),
            () => console.log("success"+JSON.stringify(this.getdata))
        )

    }

    getPayloadInfo(){
        console.log("In battery state function");


        this._payloadInfoStats.getPayloadInfoObservable()
        .subscribe(
            data => {this.payloadInfoserialNumber = data["serialNumber"],this.payloadInfoType = data["type"]},
            error => alert('Error in getting payload info'),
            () => console.log("success"+JSON.stringify(this.payloadInfoserialNumber))
        )
          this.getBatteryState();
    }

    getConnectionstatusGU(){
        console.log("in GU connection state");
        
        this._connectionStateGU.getConnectionStateGUObservable()
        .subscribe(
            data => this.connectionStatus = data["connectionStatus"],
            error => alert('Error in getting Connection for GU'),
            () => console.log('success'+JSON.stringify(this.connectionStatus))
        )
    }

    getTypeGU(){
        console.log("in GU type");
        
        this._typeGU.getTypeGUObservable()
        .subscribe(data=>this.GUType=data["type"],
        error=>alert('Error in getting type for GU'),
        () => console.log('success'+JSON.stringify(this.GUType))
        )
    }

    getVersionGU(){
        console.log("in verion GU");

        this._versionGU.getVersionGUObservable()
        .subscribe(
            data => {this.GUMajorVersion=data["major"],
                     this.GUMinorVersion=data["minor"]},
            error=>alert('Error in getting verison for GU'),
            () => console.log('success'+JSON.stringify(this.GUMajorVersion))
        )
    }

    getDroneFlightTime(){
        console.log("inside drone flight time");

        this._droneFlightTime.getdroneFlightTimeObservable()
            .subscribe(data=>this.DroneFlightTime=data,
            error=>alert('error in getting drone flight time'),
            () => console.log('success'+JSON.stringify(this.DroneFlightTime))
        )
    }
    getDroneFlightState(){

    }
    getDroneOrientation(){

    }
    valueselectionfordrone(val){
        console.log("valueselectionfordrone "+this.valeSelectionBlockDrone);
     //   this.valeSelectionBlockDrone = true;
        
    }
    valueselectionforgu(val){
       
       // this.valeSelectionBlockGU = true;
        console.log("valeSelectionBlockGU "+this.valeSelectionBlockGU);
       
    }
   
    postWaypoints1(){
        console.log("In postwaypoints state function");
        this._httpWaypoints.postWaypointsObservable()
        .subscribe(
            data=>this.postWaypoints=JSON.stringify(data),
            error=>alert('Error in post request'),
            ()=>console.log("finished"+JSON.stringify(this.postWaypoints))
        )
 

    }
    readCsvData () {
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
                    console.log(data[j]);
                }
                lines.push(tarr);
            }
        }
        this.csvData = lines;
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
    postStartMotor(){
       
        this._motorApis.postStartMotor()
        .subscribe(
            data=>this.postStartMotorResponse=JSON.stringify(data),
            error=>alert('Error in post start motor request'),
            ()=>console.log("finished"+JSON.stringify(this.postStartMotorResponse))
        )
 

    }
  
    poststopMotor(){
        
         this._motorApis.postStopMotor()
         .subscribe(
             data=>this.postStopMotorResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postStopMotorResponse))
         )
  
 
     }

     poststopFlight(){
        
         this._motorApis.stopFlight()
         .subscribe(
             data=>this.poststopFlightResponse=JSON.stringify(data),
             error=>alert('Error in post sto flight request'),
             ()=>console.log("finished"+JSON.stringify(this.poststopFlightResponse))
         )
  
 
     }

     poststartFlight(){
        
         this._motorApis.startFlight()
         .subscribe(
             data=>this.poststartFlightResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.poststartFlightResponse))
         )
  
 
     }

     pauseFlight(){
        
         this._motorApis.pauseFlight()
         .subscribe(
             data=>this.postpauseFlightResponse=JSON.stringify(data),
             error=>alert('Error in post postpauseFlightResponse request'),
             ()=>console.log("finished"+JSON.stringify(this.postpauseFlightResponse))
         )
  
 
     }


     comeHome(){
        
         this._motorApis.comeHome()
         .subscribe(
             data=>this.postcomeHomeResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postcomeHomeResponse))
         )
  
 
     }


     clearWayPoints(){
        
         this._motorApis.clearWayPoints()
         .subscribe(
             data=>this.postclearWayPointsResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postclearWayPointsResponse))
         )
  
 
     }

     flyToWayPoint(){
        
         this._motorApis.flyToWayPoint()
         .subscribe(
             data=>this.postflyToWayPointResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postflyToWayPointResponse))
         )
  
 
     }

     initProgressUpdate(){
        
         this._motorApis.initProgressUpdate()
         .subscribe(
             data=>this.postinitProgressUpdateResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postinitProgressUpdateResponse))
         )
  
 
     }

     flightProgressUpdate(){
        
         this._motorApis.flightProgressUpdate()
         .subscribe(
             data=>this.postflightProgressUpdateResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postflightProgressUpdateResponse))
         )
  
 
     }

     uploadProgressUpdate(){
        
         this._motorApis.uploadProgressUpdate()
         .subscribe(
             data=>this.postuploadProgressUpdateResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postuploadProgressUpdateResponse))
         )
  
 
     }

     batteryProgressUpdate(){
        
         this._motorApis.batteryProgressUpdate()
         .subscribe(
             data=>this.postbatteryProgressUpdateResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postbatteryProgressUpdateResponse))
         )
  
 
     }

     setFlightMode(){
        
         this._motorApis.setFlightMode()
         .subscribe(
             data=>this.postsetFlightModeResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postsetFlightModeResponse))
         )
  
 
     }

     setEmergencyProc(){
        
         this._motorApis.setEmergencyProc()
         .subscribe(
             data=>this.postsetEmergencyProcResponse=JSON.stringify(data),
             error=>alert('Error in post start motor request'),
             ()=>console.log("finished"+JSON.stringify(this.postsetEmergencyProcResponse))
         )
  
 
     }

     sendInspectType(){
        
         this._motorApis.sendInspectType()
         .subscribe(
             data=>this.postsendInspectTypeResponse=JSON.stringify(data),
             error=>alert('Error in post sendInspectType request'),
             ()=>console.log("finished"+JSON.stringify(this.postsendInspectTypeResponse))
         )
  
 
     }

     sendInspectPitch(){
        
         this._motorApis.sendInspectPitch()
         .subscribe(
             data=>this.postsendInspectPitchResponse=JSON.stringify(data),
             error=>alert('Error in post sendInspectPitch request'),
             ()=>console.log("finished"+JSON.stringify(this.postsendInspectPitchResponse))
         )
  
 
     }

     sendA7RType(){
        
         this._motorApis.sendA7RType()
         .subscribe(
             data=>this.postsendA7RTypeResponse=JSON.stringify(data),
             error=>alert('Error in post sendInspectPitch request'),
             ()=>console.log("finished"+JSON.stringify(this.postsendA7RTypeResponse))
         )
  
 
     }

     sendA7RPitch(){
        
         this._motorApis.sendA7RPitch()
         .subscribe(
             data=>this.postsendA7RPitchResponse=JSON.stringify(data),
             error=>alert('Error in post sendInspectPitch request'),
             ()=>console.log("finished"+JSON.stringify(this.postsendA7RPitchResponse))
         )
  
 
     }

     stickCommand(){
        
         this._motorApis.stickCommand()
         .subscribe(
             data=>this.poststickCommandResponse=JSON.stringify(data),
             error=>alert('Error in post sendInspectPitch request'),
             ()=>console.log("finished"+JSON.stringify(this.poststickCommandResponse))
         )
  
 
     }
}
