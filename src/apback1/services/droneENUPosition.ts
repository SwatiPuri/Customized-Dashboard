export interface IDroneENUPositon{
    east : number,
    north : number,
    up : number,
 }
 export class DroneENUPositon implements IDroneENUPositon{
     constructor(
         public east : number,
         public north : number,
         public up : number,
     ){}
 }
