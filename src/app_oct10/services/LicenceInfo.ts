export interface ILicenceInfo {
    validUntil : number;
    type : string;
}

export class LicenceInfo implements ILicenceInfo {
    
        constructor(
            public validUntil : number,
            public type : string,
        ) { }
    }