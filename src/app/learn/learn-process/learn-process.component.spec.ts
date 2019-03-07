import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnProcessComponent } from './learn-process.component';

describe('LearnProcessComponent', () => {
  let component: LearnProcessComponent;
  let fixture: ComponentFixture<LearnProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
