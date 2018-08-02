import {Injectable} from '@angular/core';
@Injectable()
export class changeMapClass{
    mapWidthClass : String;
    setMapDivWidth(mapWidth : String){
        this.mapWidthClass = 'col-md-11';
        console.log(this.mapWidthClass);
    }
    getMapDivWidth() : String{
        return this.mapWidthClass;
    }
}
