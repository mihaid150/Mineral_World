import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineralWorldService } from 'src/app/services/mineral-world.service';
import { IMineralBase } from 'src/app/model/imineralbase';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {

  BuySell= 1;
  minerals!: Array<IMineralBase>;

  constructor(private route: ActivatedRoute, private mineralworldService: MineralWorldService) { }

  ngOnInit(): void
  {
      if ( this.route.snapshot.url.toString())
      {
        this.BuySell = 1;
      }


    this.mineralworldService.getAllMinerals(this.BuySell).subscribe(
      (       data: any)=>{
        this.minerals=data;
        console.log(data);
      }, error =>{
        console.log('httperror:');
        console.log(error);
      }
    );
  }
}
