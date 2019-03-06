import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPage } from './learn.page';

describe('LearnPage', () => {
  let component: LearnPage;
  let fixture: ComponentFixture<LearnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
