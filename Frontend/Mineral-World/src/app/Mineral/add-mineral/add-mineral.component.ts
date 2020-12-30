import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-mineral',
  templateUrl: './add-mineral.component.html',
  styleUrls: ['./add-mineral.component.scss']
})
export class AddMineralComponent implements OnInit {
  @ViewChild ('Form') addMineralForm: NgForm | undefined;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack()
  {
    this.router.navigate(['/'])
  }

  onSubmit(Form: NgForm)
  {
    console.log('Congrats');
    console.log(this.addMineralForm);
  }

}
