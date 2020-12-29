import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mineral',
  templateUrl: './add-mineral.component.html',
  styleUrls: ['./add-mineral.component.scss']
})
export class AddMineralComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/'])
  }

}
