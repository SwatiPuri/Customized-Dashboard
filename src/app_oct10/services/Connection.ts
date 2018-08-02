import {Injectable} from '@angular/core';

export interface Connection{
    ipAdress : string;
    port :string;

   
}

export class Connection implements Connection{
      constructor(public ipAdress:string,
    public port:string){}
}