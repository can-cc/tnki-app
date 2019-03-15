import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCompletePage } from './learn-complete.page';

describe('LearnCompletePage', () => {
  let component: LearnCompletePage;
  let fixture: ComponentFixture<LearnCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LearnCompletePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
