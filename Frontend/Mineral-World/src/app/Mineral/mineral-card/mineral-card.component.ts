import { Component, Input } from '@angular/core';
import { IMineralBase } from 'src/app/model/imineralbase';

@Component(
{
  selector: 'app-mineral-card',
  templateUrl: 'mineral-card.component.html',
  styleUrls: ['mineral-card.component.css']
})
export class MineralCardComponent
{
  @Input() mineral!: IMineralBase;
  @Input() hideIcons: boolean | undefined;
}
