export interface IBatteryState{
    current : number;
    stateOfCharge : number;
    voltage : number;
    temperature : number[];
    error_state: number;
}

export class BatteryState implements IBatteryState {

    constructor(
        public current : number,
        public stateOfCharge : number,
        public voltage : number,
        public temperature : number[],
        public error_state: number
    ) { }
}
