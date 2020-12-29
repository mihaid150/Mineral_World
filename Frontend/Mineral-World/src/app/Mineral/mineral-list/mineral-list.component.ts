import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MineralWorldService } from 'src/app/services/mineral-world.service';
import { IMineral } from '../IMineral.interface';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {

  BuySell = 1;
  minerals!: Array<IMineral>;

  constructor(private route: ActivatedRoute, private mineralworldService: MineralWorldService) { }

  ngOnInit(): void
  {
     if ( this.route.snapshot.url.toString())
     {
       this.BuySell = 2;
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
