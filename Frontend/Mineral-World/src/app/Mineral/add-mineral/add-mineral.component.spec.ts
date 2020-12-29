/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddMineralComponent } from './add-mineral.component';

describe('AddMineralComponent', () => {
  let component: AddMineralComponent;
  let fixture: ComponentFixture<AddMineralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMineralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMineralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
