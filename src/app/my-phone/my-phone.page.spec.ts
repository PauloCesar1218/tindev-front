import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPhonePage } from './my-phone.page';

describe('MyPhonePage', () => {
  let component: MyPhonePage;
  let fixture: ComponentFixture<MyPhonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPhonePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPhonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
