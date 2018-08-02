export interface IGPSState{
    number_of_satellites : number,
    quality : number,
    fix_type : string,
    hdop:number,
    pdop:number
 }
 export class GpsState implements IGPSState{
     constructor(
         public number_of_satellites : number,
         public quality : number,
         public fix_type : string,
         public hdop:number,
         public pdop:number
     ){}
 }
