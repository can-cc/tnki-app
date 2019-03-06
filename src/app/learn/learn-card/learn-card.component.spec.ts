import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnCardComponent } from './learn-card.component';

describe('LearnCardComponent', () => {
  let component: LearnCardComponent;
  let fixture: ComponentFixture<LearnCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
