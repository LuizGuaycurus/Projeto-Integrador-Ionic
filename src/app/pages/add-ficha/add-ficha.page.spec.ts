import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFichaPage } from './add-ficha.page';

describe('AddFichaPage', () => {
  let component: AddFichaPage;
  let fixture: ComponentFixture<AddFichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFichaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
