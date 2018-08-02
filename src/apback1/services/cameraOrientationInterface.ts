export interface ICameraOrientation{
      yaw : number,
      roll : number,
      pitch : number,

 }
 export class CameraOrientation implements ICameraOrientation{
     constructor(
         public yaw : number,
         public roll : number,
         public pitch : number,
     ){}
 }
