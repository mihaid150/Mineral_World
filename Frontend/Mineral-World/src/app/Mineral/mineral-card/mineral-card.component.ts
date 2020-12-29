import { Component, Input } from '@angular/core';

@Component(
{
  selector: 'app-mineral-card',
  templateUrl: 'mineral-card.component.html',
  styleUrls: ['mineral-card.component.css']
})
export class MineralCardComponent
{
  @Input() mineral : any
}
