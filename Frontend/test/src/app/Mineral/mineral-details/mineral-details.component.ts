import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mineral-details',
  templateUrl: './mineral-details.component.html',
  styleUrls: ['./mineral-details.component.scss']
})
export class MineralDetailsComponent implements OnInit {
public mineralid: number | undefined;
  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.mineralid = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params)=> {
        this.mineralid = +params['id'];
      }
    )
  }
  onSelectNext()
{
  this.mineralid! += 1;
  this.router.navigate(['mineral-details', this.mineralid]);
}
}
