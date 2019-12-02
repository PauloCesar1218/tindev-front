import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainV2Page } from './main-v2.page';

describe('MainV2Page', () => {
  let component: MainV2Page;
  let fixture: ComponentFixture<MainV2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainV2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainV2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
