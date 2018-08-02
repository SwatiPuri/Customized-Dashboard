export interface IDroneStats{
      type : string,
      Serial_Number : number,
    Uuid : string,

 }
 export class DroneStats implements IDroneStats{
     constructor(
          public type : string,
         public Serial_Number : number,
         public Uuid : string,

     ){}
 }
