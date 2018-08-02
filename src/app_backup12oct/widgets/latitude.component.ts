import {Component,Input,OnInit,Output,EventEmitter} from '@angular/core';
import {DroneStatsService} from '../services/DroneStatServices';
import {SharedPostResponseService} from '../services/SharedPostResponse';
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
import {IDroneOrientation} from '../services/droneOrientation';
import {IDroneENUPositon} from '../services/droneENUPosition';
import {IDroneFlightState} from '../services/droneFlightState';
import {IDroneFlightMode} from '../services/droneFlightMode';

import {changeMapClass} from '../services/changeMapClass';
import {HttpWaypoints} from '../services/HttpWaypoints.services';
import {Http,Response} from '@angular/http';

import {ICameraOrientation} from '../services/cameraOrientationInterface';
import {IGULinkState} from '../services/GULinkStateInterface';

import {MotorApis} from '../services/PostStartMotor';
import {ConnectService} from '../services/Connect'


@Component({
    selector : 'widget1',
    templateUrl : './latitude.component.html',
	styleUrls : ['./latitude.component.css'],
    providers : [DroneStatsService,changeMapClass,HttpWaypoints,MotorApis
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
    batteryInfoJsonPackCycleGU:number;
    batteryInfoJsonSerialNumberGU:number;
    batteryInfoJsonTypeGU:String;
    batteryInfoJsonPackCapacityGU:number;
    id1 :number=1;
    id2:number = 2;
    showWidgets :boolean;
    alertsData = {};
	batteryInfoJson:{};
    licenceInfoJsonValidUntil:number;
    licenceInfoJsonValidType:String;
    payloadInfoJson:{};

    GpsStateSattelites:number;
    GpsStateQuality:number;
    GpsStateFixType:string;
    GpsStateHdop:number;
    GpsStatePdop:number;

    droneOrientationYaw : number;
    droneOrientationRoll : number;
    droneOrientationPitch : number;

    droneENUPositionEast : number;
    droneENUPositionNorth : number;
    droneENUPositionUp : number;

    droneFlightState : string;
    droneFlightMode : string;

    batteryStateCurrent:number;batteryStateCurrentGU:number;
    batteryStateOfCharge:number;batteryStateOfChargeGU:number;
    batteryStateVoltage:number;batteryStateVoltageGU:number;
    batteryStateTemperature:String;batteryStateTemperatureGU:String;
    batteryStateErrorState:number;  batteryStateErrorStateGU:number;

    getYaw:number;getPitch:number;getRoll:number;

    linkStateRx:number;linkStateTx:number;linkStateType:String;linkStateQuality:number;

    payloadInfoserialNumber:number;
    payloadInfoType:String;
    batteryLevel:number;
    guBatteryLevelNumber:number;
    connectionStatus : string;
    GUType : string;
    GUMajorVersion : string;
    GUMinorVersion : string;
    DroneFlightTime : String;

    valeSelectionBlockDrone : boolean = false;
    valeSelectionBlockGU : boolean = false;
    valeSelectionBlockBoth : boolean = false;

    selectedDroneApis : any[]=[''];
    selectedApis : boolean = false;
    selectedGUApis : any[]=[''];

    postWaypoints:String;
    csvUrl: string = './../assets/sample.csv';  // URL to web API
    csvData: any[] = [];

    droneBasicInfoFlag : boolean = false;
    droneServiceInfoFlag : boolean = false;
    droneGPSStateFlag : boolean = false;
    droneFlightStateFlag : boolean = false;
    droneFlightModeFlag : boolean = false;
    droneGPSPositionFlag : boolean = false;
    droneBatteryStatsFlag : boolean = false;
    droneBatteryStateFlag : boolean = false;
    guBatteryStateFlag : boolean = false;guLinkStateFlag : boolean = false;
    droneLicenceStatsFlag : boolean = false;
    dronePayloadInfoFlag : boolean = false;
    droneFlightTimeFlag : boolean = false;
    dronebatteryLevelFlag : boolean = false;
    droneOrientationFlag : boolean = false;
    droneENUPositionFlag : boolean = false;
    getGpsPositionFlag: boolean= false;

    guBatteryStatsFlag : boolean = false;
    gubatteryLevelFlag : boolean = false;
    cameraOrientationFlag : boolean = false;

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
    postConnectResponse : string;

    droneOrientationInterval : any;
    droneENUPositionInterval : any;
    droneGPSStateInterval : any;
    droneFlightStateInterval : any;
    droneFlightModeInterval : any;
    droneFlightTimeInterval : any;
    serviceInfoInterval : any;
    droneBasicInfoInterval : any;
    droneBatteryInfoInterval : any;
    droneLicenseInfoInterval : any;
    dronePayloadInfoInterval : any;
    droneBatteryStateInterval : any;
    DroneGPSPositionInterval : any;
    droneBatteryLevelInterval : any;
    CameraOrientationInterval : any;
    GUBatteryLevelInterval : any;
    GUBatteryStateInterval : any;
    GULinkStateInterval : any;
    GUVersionInterval : any;
    GUTypeInterval : any;
    GUConnectionStateInterval : any;
    GUBatteryInfoInterval : any;
   // classToApply : String;
  ip :string;
  port:string;
    droneApis =["droneOrientation","droneENUPosition","droneGPS State","droneFlightState",
              "droneFlightMode","droneFlightTime","serviceInfo","droneBasicInfo","droneBatteryInfo",
              "droneLicenseInfo","dronePayloadInfo","droneBatteryState","Drone GPS Position","droneBatteryLevel",
              "Camera Orientation"
]

 gUapis = ["GU Battery Level","GU Battery State","GU Link State","GU Version","GU Type",
            "GU Connection State","GU Battery Info"]
 

       
showHide(){
    // this.showWidgets = !this.showWidgets;
     //this.changeMapClass.emit('col-md-10');
//     this._changeMapClass.setMapDivWidth('col-md-11');
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

            if(val == 'droneOrientation'){
                this.droneOrientationFlag = true;
                this.getDroneOrientation();
            }

            if(val == 'droneENUPosition'){
                this.droneENUPositionFlag = true;
                this.getDroneENUPosition();
            }

            if(val == 'droneGPS State'){
                this.droneGPSStateFlag = true;
                this.getGPSState();
            }

            if(val == 'droneFlightState'){
                this.droneFlightStateFlag = true;
                this.getDroneFlightState();
            }

            if(val == 'droneFlightMode'){
                this.droneFlightModeFlag = true;
                this.getDroneFlightMode();
            }

            if(val == 'droneFlightTime'){
                console.log("api for droneFlightTime");
                this.droneFlightTimeFlag = true;
                this.getDroneFlightTime();
            }

            if(val == 'serviceInfo'){
                this.droneServiceInfoFlag = true;
                this.getServiceInfo();
            }

            if(val == 'droneBasicInfo'){
                this.droneBasicInfoFlag = true;
                this.getStats();
                ///this.getdataBasicInfo();
            }

            if(val == 'droneBatteryInfo'){
                this.droneBatteryStatsFlag = true;
                this.getBatteryStats();
            }

            if(val == 'Drone GPS Position'){
                this.getGpsPositionFlag = true;
                this.getGpsPosition();
            }

            if(val == 'droneLicenseInfo'){
                this.droneLicenceStatsFlag = true;
                this.getLicenceStats();
            }

            if(val == 'dronePayloadInfo'){
                this.dronePayloadInfoFlag = true;
                this.getPayloadInfo();
            }

            if(val == 'droneBatteryState'){
               this.droneBatteryStateFlag = true;
               this.getBatteryState();
            }

            if(val == 'droneBatteryLevel'){
                this.dronebatteryLevelFlag=true;
                this.getDroneBatteryLevel();
            }

            if(val == 'Camera Orientation'){
                this.cameraOrientationFlag=true;
                this.getCameraOrientation();
            }
    }

 selectApisforGU(val){
            this.selectedGUApis.push(val);

            if(val== 'GU Battery Level'){
                this.gubatteryLevelFlag=true;
                this.getGUBatteryLevel();
            }

                if(val == 'GU Battery State'){
                     this.guBatteryStateFlag = true;
                    this.getGUBatteryState();
                }

                if(val== 'GU Link State'){
                   this.guLinkStateFlag = true;
                    this.getGULinkState();
               }

                if(val == 'GU Version'){
                    this.guVersion = true;
                    this.getVersionGU();
                }

                if(val == 'GU Type'){
                    this.guType = true;
                    this.getTypeGU();
                }

                if(val == 'GU Connection State'){
                    this.guConnectionState = true;
                    this.getConnectionstatusGU();
                }

                if(val == 'GU Battery Info'){
                    this.guBatteryStatsFlag = true;
                    this.getBatteryStatsGU();
                }
    }

    collapseWidget(){

        console.log("Inside collapseWidget");
        this.getRecentAlerts();
    }

    constructor(private _dronestats:DroneStatsService,
    private _droneOrientation:DroneStatsService,
    private _droneENUPosition:DroneStatsService,
    private _serviceInfo:DroneStatsService,
    private _gpsPosition:DroneStatsService,
    private _GPSstate:DroneStatsService,
    private _droneFlightState:DroneStatsService,
    private _droneFlightMode:DroneStatsService,
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
    private _batteryStatsGU:DroneStatsService,

    private _cameraOrientation : DroneStatsService,
    private _guBatteryLevel:DroneStatsService, private _batteryStateStatsGU:DroneStatsService,
    private _linkStateStatsGU:DroneStatsService,
    private _motorApis:MotorApis,
    private _widgetResponse : SharedPostResponseService,
    private connectService:ConnectService   
    ){
    }

    ngOnInit(){
    this._widgetResponse.currentWidget.subscribe(showHide => this.showWidgets = showHide);
    this.connectService.ipSubjectOb.subscribe((data)=>this.ip=data);
    this.connectService.portSubjectOb.subscribe((data)=>this.port=data);
}

    //functions for Drone
    getDroneOrientation() {
        console.log("api for drone orientation");
        this.droneOrientationInterval = setInterval(()=> {
            this._droneOrientation.getDroneOrientationObservable(this.ip,this.port)
            .subscribe(
                data=>{ this.droneOrientationYaw = data['yaw'],
                        this.droneOrientationRoll = data['roll'],
                        this.droneOrientationPitch = data['pitch']
                },
                error=>alert('Error in getting drone orientation'),
                () => console.log('success'+JSON.stringify(this.droneOrientationYaw))
            )
        },5000);  //polling for 5 sec
    }

    getDroneENUPosition(){
        console.log("api for drone ENU Position");
        this.droneENUPositionInterval = setInterval(()=>{
            this._droneENUPosition.getDroneENUPositionObservable(this.ip,this.port)
            .subscribe(
                data=>{
                    this.droneENUPositionEast = data['east'],
                    this.droneENUPositionNorth = data['north'],
                    this.droneENUPositionUp = data['up']
                },
                error=>alert('Error in getting drone ENU Postion'),
                () => console.log('success'+JSON.stringify(this.droneENUPositionEast))
            )
         },5000);   //polling for 5 sec
    }

    getGPSState()
    {
        console.log("api for droneGPS State");
        this.droneGPSStateInterval = setInterval(() => {
            this._GPSstate.getGPSStateObservable(this.ip,this.port)
            .subscribe(
                 data => { this.GpsStateSattelites = data[0]["number_of_sattelites"],
                this.GpsStateQuality = data[0]["quality"],
                this.GpsStateFixType = data[0]["fix_type"],
                this.GpsStateHdop = data[0]["hdop"],
                this.GpsStatePdop = data[0]["pdop"]
                        },
                error => alert('Error in getGPSState !!!'),
                () => console.log("Success of GPS State :"+this.GpsStateSattelites)
                    )
    },5000);
}

    getDroneFlightState(){
      console.log("api for drone flight state");
      this.droneFlightStateInterval = setInterval(() => {
        this._droneFlightState.getDroneFlightStateObservable(this.ip,this.port)
        .subscribe(
           data=>this.droneFlightState=data['flightstate'],
           error=>alert('Error in getting drone flight state'),
           () => console.log('success'+JSON.stringify(this.getDroneFlightState))
                 )
          },5000);
}

getDroneFlightMode(){
    console.log('api for drone flight mode');
    this.droneFlightModeInterval = setInterval(() => {
        this._droneFlightMode.getDroneFlightModeObservable(this.ip,this.port)
        .subscribe(
            data=>this.droneFlightMode=data['flightmode'],
            error=>alert('error in getting drone flight mode'),
            () => console.log('success'+JSON.stringify(this.droneFlightMode))
        )
     },5000);
}

getDroneFlightTime(){
    console.log("inside drone flight time");
    this.droneFlightTimeInterval = setInterval(() => {
        this._droneFlightTime.getdroneFlightTimeObservable(this.ip,this.port)
        .subscribe(
            data=>this.DroneFlightTime=data,
            error=>alert('error in getting drone flight time'),
             () => console.log('success'+JSON.stringify(this.DroneFlightTime))
    )
            },5000);
}

getServiceInfo(){
    console.log("api for serviceInfo");
    this.serviceInfoInterval = setInterval(() => {
        this._serviceInfo.getServiceInfoObservable(this.ip,this.port)
        .subscribe(
          data => {this.sampleJsonMajor = data["major"],
          this.sampleJsonMinor = data["minor"]
        },
          error => alert('Error in serviceInfo API !!!'),
         () => console.log("Success for getserviceInfo API"+JSON.stringify(this.sampleJsonMajor))
        )
         },5000);
}

getStats(){
      console.log("api for droneBasicInfo");
      this.droneBasicInfoInterval = setInterval(() => {
          this._dronestats.getDroneStatsObservable(this.ip,this.port)
          .subscribe(
            data =>{this.getdataBasicInfo = data["type"],
            this.getdataBasicInfoId1 = data["Serial_Number"],
            this.getdataBasicInfoId2 = data["Uuid"]},
            //data => this.getdata = JSON.stringify(data),
            error => alert('Error !!!'),
           () => console.log("Success"+JSON.stringify(this.getdataBasicInfo))
          )
           },5000);
}

getBatteryStats() {
    console.log("api for droneBatteryInfo");
    this.droneBatteryInfoInterval = setInterval(() => {
        this._batteryStats.getBatteryInfoObservable(this.ip,this.port)
        .subscribe(
            data => {
            this.batteryInfoJsonPackCycle = data[0]["pack_cycles"],
            this.batteryInfoJsonSerialNumber = data[0]["serialNumber"],
            this.batteryInfoJsonType = data[0]["type"],
            this.batteryInfoJsonPackCapacity = data[0]["pack_capacity"]},
        error => alert('Error in getting battery info'),
        () => console.log("Success"+JSON.stringify(this.batteryInfoJsonPackCycle))
    )
         },5000);

}

    getGpsPosition(){
        console.log("api for drone GPS Position");
        this.DroneGPSPositionInterval = setInterval(() => {
            this._gpsPosition.getGpsPositionObservable(this.ip,this.port)
            .subscribe(
              data => {this.sampleJsonGpsPositionLat = data["latitude"],
              this.sampleJsonGpsPositionLong = data["longitude"],
              this.sampleJsonGpsPositionAlt = data["height"]
            },
              error => alert('Error in GPS Position API!!!'),
             () => console.log("Success for getGpsPosition API"+JSON.stringify(this.sampleJsonGpsPositionLat))
            )
              },5000);
     }

     getLicenceStats() {
        console.log("api for droneLicenseInfo");
        this.droneLicenseInfoInterval = setInterval(() => {
            this._licenceStats.getLicenceInfoObservable(this.ip,this.port)
            .subscribe(
                data => {this.licenceInfoJsonValidUntil = data[0]["validUntil"],
                this.licenceInfoJsonValidType = data[0]["type"]},
                error => alert('Error in getting licence info'),
                () => console.log("success"+JSON.stringify(this.licenceInfoJsonValidUntil))
            )
              },5000);
    }

    getPayloadInfo(){
        console.log("api for dronePayloadInfo");
        this.dronePayloadInfoInterval = setInterval(() => {
            this._payloadInfoStats.getPayloadInfoObservable(this.ip,this.port)
            .subscribe(
                data => {this.payloadInfoserialNumber = data["serialNumber"],this.payloadInfoType = data["type"]},
                error => alert('Error in getting payload info'),
                () => console.log("success"+JSON.stringify(this.payloadInfoserialNumber))
            )
             },5000);
    }

    getBatteryState(){
        console.log("api for droneBatteryState");
        this.droneBatteryStateInterval = setInterval(() => {
            this._batteryStateStats.getBatteryStateObservable(this.ip,this.port)
            .subscribe(
                data =>
                {
                //this.batteryStateLength = data,
                for(let i=0;i<data.length;i++){
                this.batteryStateCurrent = data[i]["current"],
                this.batteryStateOfCharge = data[i]["stateOfCharge"],
                this.batteryStateVoltage = data[i]["voltage"],
                this.batteryStateTemperature = JSON.stringify(data[i]["temperature"]),
                this.batteryStateErrorState = data[i]["error_state"]
            }
             },
                error => alert('Error in getting battery state info'),
                () => console.log("success"+JSON.stringify(this.batteryStateTemperature))
                )
             },5000);
    }

    getDroneBatteryLevel(){
        console.log("api for droneBatteryLevel");
        this.droneBatteryLevelInterval = setInterval(() => {
            this._droneBatteryLevel.getDroneBatteryLevelObservable(this.ip,this.port)
            .subscribe(
              data => this.batteryLevel = data,
              error => alert('Error !!!'),
             () => console.log("Success of Battery Level :"+this.batteryLevel)
            )
              },5000);
}

getCameraOrientation(){
    console.log("api for Camera Orientation");
    this.CameraOrientationInterval = setInterval(() => {
        this._cameraOrientation.getCameraOrientationObservable(this.ip,this.port)
        .subscribe(
          data =>{
          this.getYaw = data["yaw"],
          this.getPitch = data["pitch"],
          this.getRoll = data["roll"]
          },
          error => alert('Error in Camera Orientation!'),
         () => console.log("Success"+JSON.stringify(this.getYaw))
        )
          },5000);
}

//functions for GU

getGUBatteryLevel(){
    console.log("In battery level function for GU");
    this.GUBatteryLevelInterval = setInterval(() => {
        this._guBatteryLevel.getGroundUnitBatteryLevelObservable(this.ip,this.port)
        .subscribe(
          data => this.guBatteryLevelNumber = data,
          error => alert('Error in GroundUnit Battery Level!'),
         () => console.log("Success of Battery Level :"+this.guBatteryLevelNumber)
        )
    },5000);
}

getGUBatteryState(){
    console.log("In battery state function for GU");
    this.GUBatteryStateInterval = setInterval(() => {
        this._batteryStateStatsGU.getGUBatteryStateObservable(this.ip,this.port)
        .subscribe(
            data =>
            {
            for(let i=0;i<data.length;i++){
            this.batteryStateCurrentGU = data[i]["current"],
            this.batteryStateOfChargeGU = data[i]["stateOfCharge"],
            this.batteryStateVoltageGU = data[i]["voltage"],
            this.batteryStateTemperatureGU = JSON.stringify(data[i]["temperature"]),
            this.batteryStateErrorStateGU = data[i]["error_state"]
        }
         },
            error => alert('Error in getting battery state info for GU'),
            () => console.log("success"+JSON.stringify(this.batteryStateTemperatureGU))
            )
    },5000);
}

getGULinkState(){
    console.log("In link state function for GU");
    this.GULinkStateInterval = setInterval(() => {
        this._linkStateStatsGU.getGULinkStateObservable(this.ip,this.port)
        .subscribe(
            data =>
            {
            for(let i=0;i<data.length;i++){
            this.linkStateRx = data[i]["rxBytesPerSecond"],
            this.linkStateQuality = data[i]["quality"],
            this.linkStateType = data[i]["type"],
            this.linkStateTx = data[i]["txBytesPerSecond"]
        }
         },
            error => alert('Error in getting link state info for GU'),
            () => console.log("success"+JSON.stringify(this.linkStateRx))
            )
    },5000);
}

getVersionGU(){
    console.log("in verion GU");
    this.GUVersionInterval = setInterval(() => {
        this._versionGU.getVersionGUObservable(this.ip,this.port)
        .subscribe(
            data => {this.GUMajorVersion=data["major"],
                     this.GUMinorVersion=data["minor"]},
            error=>alert('Error in getting verison for GU'),
            () => console.log('success'+JSON.stringify(this.GUMajorVersion))
        )
    },5000);
}

getTypeGU(){
    console.log("in GU type");
    this.GUTypeInterval = setInterval(() => {
        this._typeGU.getTypeGUObservable(this.ip,this.port)
        .subscribe(data=>this.GUType=data["type"],
        error=>alert('Error in getting type for GU'),
        () => console.log('success'+JSON.stringify(this.GUType))
        )
    },5000);
}

getConnectionstatusGU(){
    console.log("in GU connection state");
    this.GUConnectionStateInterval = setInterval(() => {
        this._connectionStateGU.getConnectionStateGUObservable(this.ip,this.port)
        .subscribe(
            data => this.connectionStatus = data["connectionState"],
            error => alert('Error in getting Connection for GU'),
            () => console.log('success'+JSON.stringify(this.connectionStatus))
        )
    },5000);
}
//end
    getRecentAlerts(){
    this._recentAlerts.getRecentAlerts(this.ip,this.port)
    .subscribe(
        data => this.alertsData = data,
        error => alert("Error !!!"),
         () => console.log("Alerts : "+ this.alertsData)
    )
   }


    valueselectionfordrone(val){
        console.log("valueselectionfordrone "+this.valeSelectionBlockDrone);
     //   this.valeSelectionBlockDrone = true;

    }
    valueselectionforgu(val){

       // this.valeSelectionBlockGU = true;
        console.log("valeSelectionBlockGU "+this.valeSelectionBlockGU);

    }

getBatteryStatsGU() {
      console.log("battery information for GU");
      this.GUBatteryInfoInterval = setInterval(() => {
        this._batteryStatsGU.getBatteryInfoObservableGU(this.ip,this.port)
        .subscribe(
            data => {
            this.batteryInfoJsonPackCycleGU = data[0]["pack_cycles"],
            this.batteryInfoJsonSerialNumberGU = data[0]["serialNumber"],
            this.batteryInfoJsonTypeGU = data[0]["type"],
            this.batteryInfoJsonPackCapacityGU = data[0]["pack_capacity"]},
        error => alert('Error in getting battery info for GU'),
        () => console.log("Success"+JSON.stringify(this.batteryInfoJsonPackCycleGU))
    )
      },5000);
}

clearInterval(value){
    if(value == 'droneOrientation'){
    this.droneOrientationFlag = false;
    clearInterval(this.droneOrientationInterval);
    }

    if(value == 'DroneENUPosition'){
        this.droneENUPositionFlag = false;
        clearInterval(this.droneENUPositionInterval);
    }

    if(value == 'DroneGPSState'){
        this.droneGPSStateFlag = false;
        clearInterval(this.droneGPSStateInterval);
    }

    if(value == 'DroneFlightState'){
        this.droneFlightStateFlag = false;
        clearInterval(this.droneFlightStateInterval);
    }

    if(value == 'DroneFlightMode'){
        this.droneFlightModeFlag = false;
        clearInterval(this.droneFlightModeInterval);
    }

    if(value == 'DroneBasicInfo'){
        this.droneBasicInfoFlag = false;
        clearInterval(this.droneBasicInfoInterval);
    }

    if(value == 'DroneServiceInfo'){
        this.droneServiceInfoFlag = false;
        clearInterval(this.serviceInfoInterval);
    }

    if(value == 'DroneGPSPosition'){
        this.droneGPSPositionFlag = false;
        clearInterval(this.DroneGPSPositionInterval);
    }

    if(value == 'BatteryStats'){
        this.droneBatteryStatsFlag = false;
        clearInterval(this.droneBatteryInfoInterval);
    }

    if(value =='BatteryState'){
        this.droneBatteryStateFlag = false;
        clearInterval(this.droneBatteryStateInterval);
    }

    if(value == 'LicenceStats'){
        this.droneLicenceStatsFlag = false;
        clearInterval(this.droneLicenseInfoInterval);
    }

    if(value == 'PayloadInfo'){
        this.dronePayloadInfoFlag = false;
        clearInterval(this.dronePayloadInfoInterval);
    }

    if(value == 'DroneFlightTime'){
        this.droneFlightTimeFlag = false;
        clearInterval(this.droneFlightTimeInterval);
    }

    if(value == 'DroneBatteryLevel'){
        this.dronebatteryLevelFlag = false;
        clearInterval(this.droneBatteryLevelInterval);
    }

    if(value == 'CameraOrientation'){
        this.cameraOrientationFlag = false;
        clearInterval(this.CameraOrientationInterval);
    }

    if(value == 'GroundUnitBatteryState'){
        this.guBatteryStateFlag = false;
        clearInterval(this.GUBatteryStateInterval);
    }

    if(value == 'GroundUnitType'){
        this.guType = false;
        clearInterval(this.GUTypeInterval);
    }

    if(value == 'GroundUnitVersion'){
        this.guVersion = false;
        clearInterval(this.GUVersionInterval);
    }

    if(value == 'GroundUnitBatteryLevel'){
        this.gubatteryLevelFlag = false;
        clearInterval(this.GUBatteryLevelInterval);
    }

    if(value == 'BatteryInfoforGroundUnit'){
        this.guBatteryStatsFlag = false;
        clearInterval(this.GUBatteryInfoInterval);
    }

    if(value == 'ConnectionState'){
        this.guConnectionState = false
        clearInterval(this.GUConnectionStateInterval);
    }

    if(value == 'GroundUnitLinkState'){
        this.guLinkStateFlag = false;
        clearInterval(this.GULinkStateInterval);
    }

}

  /*  postWaypoints1(){
        console.log("In postwaypoints state function");
        this._httpWaypoints.postWaypointsObservable()
        .subscribe(
            data=>this.postWaypoints=JSON.stringify(data),
            error=>alert('Error in post request'),
            ()=>console.log("finished"+JSON.stringify(this.postWaypoints))
        )
    }   */

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

   

}
