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

    addMineral(mineral: Mineral)
    {
      let newMin =[mineral];
      if(localStorage.getItem('newMin'))
      {
        var Data = localStorage.getItem('newMin');
        if( Data !=null )
        {
          try {
          newMin = [mineral, ...JSON.parse(Data)];
          localStorage.setItem('newMin',JSON.stringify(newMin));}
          catch(e){
            newMin = [mineral];
            localStorage.setItem('newMin',JSON.stringify(newMin));
          }
        }

      }

    }

    newMinId ()
    {
      if(localStorage.getItem('MID')){
        var data = localStorage.getItem('MID');
        if( data != null){
            localStorage.setItem('MID',String(+data + 1));
            return +data;
        } return 101;
      }
      else{
          localStorage.setItem('MID','101');
          return 101;
      }

    }

}
