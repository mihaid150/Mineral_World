import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IMineralBase } from 'src/app/model/imineralbase';
import { Observable } from 'rxjs';
import { Mineral } from '../model/mineral';

@Injectable({
  providedIn: 'root'
})
export class MineralWorldService {




  constructor(private http:HttpClient) {
   }
     getAllMinerals(BuySell: number): Observable<IMineralBase[]>
     {
      return this.http.get('data/minerals.json').pipe( map((data:any)=>
       {
            const mineralsArray: Array<IMineralBase> =[];
              for (const id in data){
              if(data.hasOwnProperty(id) && data[id].BuySell === BuySell)
              {
                mineralsArray.push(data[id]);
              }
             }
            return mineralsArray;
       }
           )
     );
     }

    // getAllMinerals(buySell: number): Observable<IMineral[]> {
    //   return this.http.get('data/minerals.json').pipe(map((data: any) => {
    //     return data.reduce((allMinerals: IMineral[], currentMineral: IMineral) => {
    //         currentMineral.BuySell === buySell ?
    //           allMinerals.push(currentMineral) :
    //           allMinerals;
    //         return allMinerals;
    //       }, [])
    //   }));
    // }

    addMineral(mineral: Mineral)
    {
      localStorage.setItem('newMin',JSON.stringify(mineral));
    }

}
