export interface IGULinkState{
      rxBytes : number,
      quality : number,
      type: String,
      txBytes : number

 }
 export class GULinkState implements IGULinkState{
     constructor(
         public rxBytes : number,
         public quality : number,
         public type: String,
         public txBytes : number,
     ){}
 }
