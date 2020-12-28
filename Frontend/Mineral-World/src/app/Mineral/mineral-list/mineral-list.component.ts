import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {

  Minerals: Array<any> =
  [
    {
        "Id":1,
        "Name":"Aur 22k",
        "Formula":"Au",
        "Price":"100 RON",
        "Cantitate":"20"
    },
    {
      "Id":2,
      "Name":"Cuarț Roz",
      "Formula":"SiO2",
      "Price":"80 RON",
      "Cantitate":"20 buc"
    },
    {
      "Id":3,
      "Name":"Ochi Tigru Șlefuit",
      "Formula":"SiO2",
      "Price":"200 RON",
      "Cantitate":"10 buc"
    },
    {
      "Id":4,
      "Name":"Ametist",
      "Formula":"SiO2 Fe+3",
      "Price":"150 RON",
      "Cantitate":"15 buc"
    },
    {
      "Id":5,
      "Name":"Pirită",
      "Formula":"FeS2",
      "Price":"50 RON",
      "Cantitate":"30 buc"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
