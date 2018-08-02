export interface IGUConnectionState{
   connectionState : string;
}

export class GUConnectionState implements IGUConnectionState{
    constructor(public connectionState : string){

    }
}