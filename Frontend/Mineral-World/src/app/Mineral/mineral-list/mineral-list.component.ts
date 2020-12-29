import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {

  minerals!: any;



  constructor(private http:HttpClient) { }

  ngOnInit(): void
  {
     this.http.get('data/minerals.json').subscribe(data=>
      {
        this.minerals=data;
        console.log(data);
      });

  }
}
