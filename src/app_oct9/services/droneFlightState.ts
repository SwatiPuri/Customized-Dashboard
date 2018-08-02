export interface IDroneFlightState{
    flightstate : string,
 }
 export class DroneFlightState implements IDroneFlightState{
     constructor(
         public flightstate : string
     ){}
 }
