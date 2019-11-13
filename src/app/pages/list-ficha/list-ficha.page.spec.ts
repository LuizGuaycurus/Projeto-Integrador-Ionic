import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFichaPage } from './list-ficha.page';

describe('ListFichaPage', () => {
  let component: ListFichaPage;
  let fixture: ComponentFixture<ListFichaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFichaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFichaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
