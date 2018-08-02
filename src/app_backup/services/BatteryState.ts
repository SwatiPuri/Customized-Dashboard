export interface IBatteryState{
    current : number;
    stateOfCharge : number;
    voltage : number;
    temperature : string;
}

export class BatteryState implements IBatteryState {

    constructor(
        public current : number,
        public stateOfCharge : number,
        public voltage : number,
        public temperature : string
    ) { }
}