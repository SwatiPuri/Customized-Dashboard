export interface IDroneFlightMode{
    flightmode : string,
 }
 export class DroneFlightMode implements IDroneFlightMode{
     constructor(
         public flightmode : string
     ){}
 }
