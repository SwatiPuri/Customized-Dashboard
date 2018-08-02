export interface IGpsPositionInfo{
      latitude : number,
      longitude : number,
      height : number
}

 export class GpsPositionInfo implements IGpsPositionInfo{
     constructor(
         public  latitude : number,
         public  longitude : number,
         public height : number
         ){}
 }
