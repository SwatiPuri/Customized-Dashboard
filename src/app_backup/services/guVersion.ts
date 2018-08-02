export interface IGUVersion {
    major : number;
    minor : number;
}

export class GUVersion implements IGUVersion{
    constructor (
        public major : number,
        public minor : number
    ) { }
}