import { Component, OnInit } from '@angular/core';
import { MineralWorldService } from 'src/app/services/mineral-world.service';

@Component({
  selector: 'app-mineral-list',
  templateUrl: './mineral-list.component.html',
  styleUrls: ['./mineral-list.component.css']
})
export class MineralListComponent implements OnInit {

  minerals!: any;



  constructor(private mineralworldService: MineralWorldService) { }

  ngOnInit(): void
  {
    this.mineralworldService.getAllMinerals().subscribe(
      (       data: any)=>{
        this.minerals=data;
        console.log(data);
      }
    );
  }
}
