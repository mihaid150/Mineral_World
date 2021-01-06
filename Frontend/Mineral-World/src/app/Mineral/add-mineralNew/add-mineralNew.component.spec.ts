/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddMineralNewComponent } from './add-mineralNew.component';

describe('AddMineralNewComponent', () => {
  let component: AddMineralNewComponent;
  let fixture: ComponentFixture<AddMineralNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMineralNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMineralNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
