import {Component} from '@angular/core';
@Component({
    selector : 'side-panel',
    templateUrl : './sidepanel.copmonet.html',
    styleUrls : ['./sidepanel.component.css']
})
export class SidePanelComponent{
    
    ShowMissionPlan : boolean = false;

    ImageClicked(value : string) : void{
        console.log("status : " +  value);
    }

    MissionPlan() : void{
        console.log("mission plan is ready");
        this.ShowMissionPlan = true;
    }

    flyDrone() : void{
        console.log("Drone is ready to fly");
    }

    OtherOptions() : void{
        console.log("for other options");
    }

    goToMainPanel() :void{
        this.ShowMissionPlan = false;
    }
}