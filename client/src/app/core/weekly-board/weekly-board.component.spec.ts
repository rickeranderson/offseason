import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyBoardComponent } from './weekly-board.component';

describe('WeeklyBoardComponent', () => {
  let component: WeeklyBoardComponent;
  let fixture: ComponentFixture<WeeklyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
