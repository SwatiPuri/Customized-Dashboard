export interface IBatteryInfo{
    pack_cycles : number;
    Serial_Number : number;
    type : string;
    pack_capacity : number;
}

export class BatteryInfo implements IBatteryInfo {

    constructor(
        public pack_cycles : number,
        public Serial_Number : number,
        public type : string,
        public pack_capacity : number
    ) { }
}
