import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonRadioDirective } from 'ngx-bootstrap/buttons';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IMineralBase } from 'src/app/model/imineralbase';
import { Mineral } from 'src/app/model/mineral';
import { MineralWorldService } from 'src/app/services/mineral-world.service';
import * as alertyfy from 'alertifyjs';

@Component({
  selector: 'app-add-mineral',
  templateUrl: './add-mineral.component.html',
  styleUrls: ['./add-mineral.component.scss']
})
export class AddMineralComponent implements OnInit {

  //@ViewChild ('Form') addMineralForm!: NgForm
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  addMineralForm!: FormGroup;

  nextClicked: boolean | undefined;
  mineral = new Mineral();

  classMinerals: Array<string> = ['Silicates','Sulfides','Carbonates','Oxides','Halides','Sulfates','Phosphates','Native Elements']
  currency: Array<string> = ['RON','USD','EUR']
  units: Array<string> = ['Grams','Kilograms','Pounds']

 mineralView: IMineralBase = {
      id: null as any,
      Name: '',
      Formula: '',
      Price: '',
      Currency: '',
      Quantity: '',
      Units: '',
      BuySell: null as any,
      Class : '',
      Details:''
   };
  displayErrors!: boolean;

  constructor(private fb: FormBuilder,private router: Router, private MineralWorldService: MineralWorldService) { }

  ngOnInit() {
     this.CreateAddMineralForm();
  }


   mapMineral():void {
     //this.mineral.id = this.id.value;
     this.mineral.Name = this.Name.value;
     this.mineral.Formula = this.Formula.value;
     this.mineral.Class = this.Class.value;
     this.mineral.Price = this.Price.value;
     this.mineral.Currency = this.Currency.value;
     this.mineral.Units = this.Units.value;
     this.mineral.Quantity = this.Quantity.value;
     this.mineral.Details = this.Details.value;
     this.mineral.PostedOn = new Date().toString();
    // this.mineral.BuySell = this.BuySell.value;

   }


  onBack()
  {
    this.router.navigate(['/'])
  }

  onSubmit(Form: NgForm)
  {
    // this.nextClicked = true;
    // if(this.allTabsValid()){
    //   this.mapMineral();
    //   this.MineralWorldService.addMineral(this.mineral);
    //   alertyfy.success("Congrats");
    //   console.log(this.addMineralForm);
    // }else {

    // }alertyfy.error("Try again");
    if(this.addMineralForm.invalid)
    {
      this.displayErrors = true;
      return;
    }
    const formData = this.addMineralForm.getRawValue();
    if(this.allTabsValid()){
         this.mapMineral();
         this.MineralWorldService.addMineral(this.mineral);
         alertyfy.success("Congrats");
         console.log(this.addMineralForm);
      }else {
        alertyfy.error("Try again");
       }


  }

  CreateAddMineralForm()
  {
    this.addMineralForm = this.fb.group({
      BasicDetails: this.fb.group({
        Name: [null, Validators.required],
        Formula: [null, Validators.required],
        Class: [null, Validators.required]

      }),
       PriceQuantityInfo: this.fb.group({
        Price: [null, Validators.required],
        Currency: [null, Validators.required],
        Quantity: [null, Validators.required],
        Units: [null, Validators.required]
       }),
       Detailss: this.fb.group({
        Details: [null, Validators.required]
       })
    })
  }

  selectTab(NextTabId: number, IsCurrentTabValid: boolean)
  {
    this.nextClicked = true;
    if(IsCurrentTabValid){
     this.formTabs.tabs[NextTabId].active =true;}
  }

  allTabsValid(): boolean {
    if (this.BasicDetails.invalid) {
      this.formTabs.tabs[0].active = true;
      return false;
    }

    if (this.PriceQuantityInfo.invalid) {
      this.formTabs.tabs[1].active = true;
      return false;
    }

    if (this.Detailss.invalid) {
      this.formTabs.tabs[2].active = true;
      return false;
    }
    return true;
  }

  //#region ( Getter Methods )
    //#region <FormGroups>
        get BasicDetails() {
          return this.addMineralForm.controls.BasicDetails as FormGroup;
        }
        get PriceQuantityInfo() {
          return this.addMineralForm.controls.PriceQuantityInfo as FormGroup;
        }
        get Detailss() {
          return this.addMineralForm.controls.Detailss as FormGroup;
        }
  //#endregion
    //#region <Form Controls>


        get Name() {
          return this.BasicDetails.controls.Name as FormControl;
        }
        get Formula() {
          return this.BasicDetails.controls.Formula as FormControl;
        }
        get Class() {
          return this.BasicDetails.controls.Class as FormControl;
        }
        get Currency() {
          return this.PriceQuantityInfo.controls.Currency as FormControl;
        }
        get Price() {
          return this.PriceQuantityInfo.controls.Price as FormControl;
        }
        get Quantity() {
            return this.PriceQuantityInfo.controls.Quantity as FormControl;
        }

        get Units() {
          return this.PriceQuantityInfo.controls.Units as FormControl;
        }



        get Details() {
          return this.Detailss.controls.Details as FormControl;
        }
//#endregion
//#endregion
}
