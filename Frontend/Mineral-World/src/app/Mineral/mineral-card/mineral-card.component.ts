import { Component } from '@angular/core';

@Component(
{
  selector: 'app-mineral-card',
  templateUrl: 'mineral-card.component.html',
  styleUrls: ['mineral-card.component.css']
})
export class MineralCardComponent
{
  Property: any = {
    "Id":1,
    "Name":"Pirita",
    "Formula":"FeS2",
    "Price":1200
  }
}
