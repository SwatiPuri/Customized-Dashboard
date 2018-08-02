export interface IGUType {
    type : string;
}

export class GUType implements IGUType{
    constructor(
        public type : string
    ) { }
}