export interface IDroneOrientation{
    yaw : number,
    roll : number,
    pitch : number,
 }
 export class DroneOrientation implements IDroneOrientation{
     constructor(
         public yaw : number,
         public roll : number,
         public pitch : number,
     ){}
 }
