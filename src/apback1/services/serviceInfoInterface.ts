export interface IServiceInfo{
      major : number,
      minor : number
}

 export class ServiceInfo implements IServiceInfo{
     constructor(
         public  major : number,
         public minor : number
         ){}
 }
