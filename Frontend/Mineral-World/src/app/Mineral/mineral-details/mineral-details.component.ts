import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mineral-details',
  templateUrl: './mineral-details.component.html',
  styleUrls: ['./mineral-details.component.scss']
})
export class MineralDetailsComponent implements OnInit {
public mineralid: number | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.mineralid = this.route.snapshot.params['id'];
  }

}
