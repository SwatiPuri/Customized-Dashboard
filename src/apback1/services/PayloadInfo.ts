export interface IPayloadInfo{
    serialNumber : number;
    type : string;
}

export class PayloadInfo implements IPayloadInfo {

    constructor(
        public serialNumber : number,
        public type : string
    ) { }
}
