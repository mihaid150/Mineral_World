import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IMineral } from '../Mineral/IMineral.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MineralWorldService {




  constructor(private http:HttpClient) {
   }
    getAllMinerals(): Observable<IMineral[]>
    {
     return this.http.get('data/minerals.json').pipe( map((data:any)=>
      {
           const mineralsArray: Array<IMineral> =[];
             for (const id in data){
             if(data.hasOwnProperty(id))
             {
               mineralsArray.push(data[id]);
             }
            }
           return mineralsArray;
      }
          )
    );
    }
}
