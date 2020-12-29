import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MineralWorldService {




  constructor(private http:HttpClient) {
   }
    getAllMinerals()
    {
     return this.http.get('data/minerals.json');
    }
}
